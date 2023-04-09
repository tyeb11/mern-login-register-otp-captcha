import chalk from "chalk";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const {
      name,
      email,
      password,
      state,
      city,
      subject,
      test_date,
      time_slot,
    } = req.body;

    const emailExists = await User.findOne({ email });

    if (!emailExists) {
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = new User({
          name,
          email,
          password: hashedPassword,
          state,
          city,
          subject,
          test_date,
          time_slot,
        });
        user
          .save()
          .then(() => {
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
