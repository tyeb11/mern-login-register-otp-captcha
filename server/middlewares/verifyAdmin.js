import chalk from "chalk";
import { User } from "../models/user.js";

export async function verifyAdmin(req, res, next) {
  try {
    const { email } = req.body;
    if (!process.env.ADMIN_EMAIL_IDS.includes(email)) {
      console.log(chalk.red(`${email} access restricted`));
      return res.status(404).send({ error: "user not allowed" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      console.log(chalk.red(`user does not exists in db`));
      return res.status(404).send({ error: "can not find user" });
    }
    if (!user.email_verified) {
      console.log(chalk.red(`${user.email} not verified`));
      return res.status(404).send({ error: "user not verified" });
    }
    if (user.user_type == "user") {
      console.log(chalk.red(`${user.email} access restricted`));
      return res.status(404).send({ error: "user not allowed" });
    }
    console.log(chalk.green(`user exists in db`));
    next();
  } catch (error) {
    console.log(chalk.red(`Error Verifying user ${error}`));
    return res.status(404).send({ error: "Error while verifing user" });
  }
}
