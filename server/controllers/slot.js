import chalk from "chalk";
import { User } from "../models/user.js";
import { Slot } from "../models/slot.js";

export async function getAllSlot(req, res) {
  try {
    // const { email = "tayyeb.merchant1@gmail.com" } = req.body;
    const email = "tayyeb.merchant1@gmail.com";
    const user = await User.findOne({ email });
    if (!user) {
      console.log(chalk.red(`user does not exists in db`));
      return res.status(404).send({ error: "can not find user" });
    }
    const slots = await Slot.find({ candidate: user._id }, [
      "-candidate",
      "-_id",
    ]);
    console.log(chalk.blue(`slots : ${slots}`));
    return res.status(200).send({ slots });
  } catch (error) {
    console.log(chalk.red(`Error while getting a slot`));
    return res.status(500).send({ error: "can not create a slot" });
  }
}

export async function addSlot(req, res) {
  try {
    const { email, state, city, subject, test_date, time_slot } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log(chalk.red(`user does not exists in db`));
      return res.status(404).send({ error: "can not find user" });
    }
    const slot = await new Slot({
      candidate: user._id,
      state,
      city,
      subject,
      test_date,
      time_slot,
    });
    await slot.save();
    console.log(chalk.green(`slot added`));
    return res.status(200).send({ msg: "slot added successfully" });
  } catch (error) {
    console.log(chalk.red("Error while adding slots"));
    return res.status(500).send({ error: "can not add slot" });
  }
}
