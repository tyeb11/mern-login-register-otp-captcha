import chalk from "chalk";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import { otpVerificationMail } from "../utils/mail.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    const emailExists = await User.findOne({ email });

    if (!emailExists) {
      if (password) {
        const otp = otpGenerator.generate(6, {
          upperCaseAlphabets: true,
          lowerCaseAlphabets: true,
          specialChars: true,
        });
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = new User({
          name,
          email,
          password: hashedPassword,
          otp,
        });
        console.log(chalk.yellow(`otp : ${otp}`));
        user
          .save()
          .then(async () => {
            await otpVerificationMail(name, email, otp);
            console.log(chalk.green(`user registered successfully`));
            res.status(201).send({ msg: "user registered successfully" });
          })
          .catch((error) => {
            console.log(chalk.red(`Error registering a user into db ${error}`));
            res.status(500).send({ error });
          });
      }
    } else {
      console.log(chalk.red(`Email already exists in db`));
      return res.status(500).send({ error: "Email already exists in db" });
    }
  } catch (error) {
    console.log(chalk.red(`Error registering a user`));
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

export async function generateOTP(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      console.log(chalk.red("email not provide while generating otp"));
      return res.status(400).send({ error: "please provide email and otp" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      console.log(chalk.red("user does not exists in db"));
      return res.status(401).send({ error: "user does not exits" });
    }
    if (user.email_verified) {
      console.log(chalk.green(`${user.email} already verified`));
      return res.status(200).send({ msg: "email already verified" });
    }
    const otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: true,
      upperCaseAlphabets: true,
      specialChars: true,
    });
    user.otp = otp;
    await user.save();
    console.log(chalk.yellow(`otp : ${otp}`));
    await otpVerificationMail(user.name, user.email, user.otp);
    return res.status(200).send({ msg: "OTP generated" });
  } catch (error) {
    console.log(chalk.red(`Error while generating OTP`));
    return res.status(500).send({ error: "can not generate OTP" });
  }
}

export async function verifyOTP(req, res) {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      console.log(chalk.red("email or otp not provide while verifing otp"));
      return res.status(400).send({ error: "please provide email and otp" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      console.log(chalk.red("user does not exists in db"));
      return res.status(401).send({ error: "user does not exits" });
    }
    if (user.email_verified) {
      console.log(chalk.green(`${user.email} already verified`));
      return res.status(200).send({ msg: "email already verified" });
    }
    if (user.otp != otp) {
      console.log(chalk.red(`incorrect OTP by ${user.email}`));
      return res.status(401).send({ error: "credintials does not match" });
    }
    console.log(chalk.green("otp verified"));
    user.email_verified = true;
    await user.save();
    return res.status(200).send({ msg: "user verified" });
  } catch (error) {
    console.log(chalk.red(`Error while verifing OTP`));
    return res.status(500).send({ error: "error while verifing OTP" });
  }
}

export async function deleteUser(req, res) {
  try {
    const { email } = req.body;
    User.deleteOne({ email })
      .then((res) => {
        console.log(chalk.blue(`Deleted user ${res.email}`));
        res.status(200).send({ msg: "user deleted successfully" });
      })
      .catch((e) => {
        console.log(chalk.red("Error deleting user"));
        return res.status(500).send({ error: "can not delete user" });
      });
  } catch (error) {
    console.log(chalk.red("Error deleting user"));
    return res.status(500).send({ error: "can not delete user" });
  }
}
