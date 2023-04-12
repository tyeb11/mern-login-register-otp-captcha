import chalk from "chalk";
import { User } from "../models/user.js";

export async function verifyUser(req, res, next) {
  try {
    let id;
    if (req.query.id) {
      id = req.query.id;
    }

    if (req.body.id) {
      id = req.body.id;
    }

    console.log(id);
    const user = await User.findById(id);
    console.log(user);
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
