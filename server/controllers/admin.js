import chalk from "chalk";
import bcrypt from "bcrypt";
import { Slot } from "../models/slot.js";
import { User } from "../models/user.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!process.env.ADMIN_EMAIL_IDS.includes(email)) {
      console.log(chalk.red(`${email} access restricted`));
      return res.status(404).send({ error: "user not allowed" });
    }
    const emailExists = await User.findOne({ email });

    if (!emailExists) {
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = new User({
          name,
          email,
          password: hashedPassword,
          email_verified: true,
          user_type: "admin",
        });
        user
          .save()
          .then(async () => {
            console.log(chalk.green(`admin registered successfully`));
            res.status(201).send({ msg: "admin registered successfully" });
          })
          .catch((error) => {
            console.log(
              chalk.red(`Error registering a admin into db ${error}`)
            );
            res.status(500).send({ error });
          });
      }
    } else {
      console.log(chalk.red(`Email already exists in db`));
      return res.status(500).send({ error: "Email already exists in db" });
    }
  } catch (error) {
    console.log(chalk.red(`Error registering admin`));
    return res.status(500).send({ error });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log(chalk.red("email or password not provide while login"));
      return res
        .status(400)
        .send({ error: "please provide email and password" });
    }
    const user = await User.findOne({ email });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        console.log(chalk.green(`user login successfull`));
        return res.status(200).send({
          msg: "login successfull",
        });
      }
      console.log(chalk.red(`password does not match`));
      return res.status(400).send({ error: "credintials does not match" });
    }
  } catch (error) {
    console.log(chalk.red(`Error while trying to log user`));
    return res.status(500).send({ error: "login user" });
  }
}

export async function getUser(req, res) {
  try {
  } catch (error) {
    console.log(chalk.red(`Error getting user data`));
    return res.status(500).send({ error: "can not get user data" });
  }
}
export async function getAllUsers(req, res) {
  try {
    const slot = await Slot.find().populate("candidate", ["-password", "-otp"]);
    console.log(slot);
    return res.status(200).send(slot);
  } catch (error) {
    console.log(chalk.red(`Error getting all users data`));
    return res.status(500).send({ error: "can not get all users data" });
  }
}
export async function editSlot(req, res) {
  try {
    const { id, state, city, subject, test_date, time_slot } = req.body;
    const slot = await Slot.findByIdAndUpdate(id, {
      subject,
      city,
      state,
      time_slot,
      test_date,
    });
    await slot.save();
    console.log(chalk.blue(`slot updated`));
    return res.status(200).send({ msg: "slot updated" });
  } catch (error) {
    console.log(chalk.red(`Error editing user data`));
    return res.status(500).send({ error: "can not edit user data" });
  }
}
export async function deleteSlot(req, res) {
  try {
    const { id } = req.body;
    Slot.findByIdAndDelete(id)
      .then(() => {
        console.log(chalk.blue("slot deleted"));
        return res.status(200).send({ msg: "slot deleted successfull" });
      })
      .catch((error) => {
        console.log(chalk.red("Error deleting slot"));
        return res.status(401).send({ error });
      });
  } catch (error) {
    console.log(chalk.red(`Error removing user`));
    return res.status(500).send({ error: "can not remove user" });
  }
}
