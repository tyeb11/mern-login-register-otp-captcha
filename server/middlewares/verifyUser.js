import chalk from "chalk";
import { User } from "../models/user.js";

export async function verifyUser(req, res, next) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log(chalk.red(`user does not exists in db`));
      return res.status(404).send({ error: "can not find user" });
    }
    if (!user.email_verified) {
      console.log(chalk.red(`${user.email} not verified`));
      return res.status(404).send({ error: "user not verified" });
    }
    console.log(chalk.green(`user exists in db`));
    next();
  } catch (error) {
    consolelog(chalk.red(`Error Verifying user ${error}`));
    return res.status(404).send({ error: "Error while verifing user" });
  }
}
