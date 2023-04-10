import chalk from "chalk";
import fs from "fs";

const readDataFile = () => {
  const data = fs.readFileSync("data.json", { encoding: "utf8", flag: "r" });
  return JSON.parse(data);
};
const writeDataFile = (value, valueType, actionType) => {
  const { state, city, subject, timeSlot, testDate } = readDataFile();
  if (actionType == "add") {
    if (valueType == "state") {
      state.push(value);
    }
    if (valueType == "city") {
      city.push(value);
    }
    if (valueType == "subject") {
      subject.push(value);
    }
    if (valueType == "time-slot") {
      timeSlot.push(value);
    }
    if (valueType == "test-date") {
      testDate.push(value);
    }
  } else if (actionType == "remove") {
    if (valueType == "state") {
      state.splice(state.indexOf(value), 1);
    }
    if (valueType == "city") {
      city.splice(city.indexOf(value), 1);
    }
    if (valueType == "subject") {
      subject.splice(subject.indexOf(value), 1);
    }
    if (valueType == "time-slot") {
      timeSlot.splice(timeSlot.indexOf(value), 1);
    }
    if (valueType == "test-date") {
      testDate.splice(testDate.indexOf(value), 1);
    }
  } else if (actionType == "edit") {
  }
  fs.writeFileSync(
    "data.json",
    JSON.stringify({ state, city, subject, timeSlot, testDate })
  );
};

export async function getSubject(req, res) {
  try {
    const { subject } = readDataFile();
    return res.status(200).send(subject);
  } catch (e) {
    console.log(chalk.red(`Error while getting subject`));
    return res.status(500).send({ error: "can not get subject" });
  }
}
export async function getTestDate(req, res) {
  try {
    const { testDate } = readDataFile();
    return res.status(200).send(testDate);
  } catch (e) {
    console.log(chalk.red(`Error while getting test-date`));
    return res.status(500).send({ error: "can not get test-date" });
  }
}
export async function getState(req, res) {
  try {
    const { state } = readDataFile();
    return res.status(200).send(state);
  } catch (e) {
    console.log(chalk.red(`Error while getting state`));
    return res.status(500).send({ error: "can not get state" });
  }
}
export async function getCity(req, res) {
  try {
    const { city } = readDataFile();
    return res.status(200).send(city);
  } catch (e) {
    console.log(chalk.red(`Error while getting city`));
    return res.status(500).send({ error: "can not get city" });
  }
}
export async function getTimeSlot(req, res) {
  try {
    const { timeSlot } = readDataFile();
    return res.status(200).send(timeSlot);
  } catch (e) {
    console.log(chalk.red(`Error while getting time-slot`));
    return res.status(500).send({ error: "can not get time-slot" });
  }
}

export async function addSubject(req, res) {
  try {
    const { value } = req.body;
    writeDataFile(value, "subject", "add");
    res.status(200).send({ msg: "data added to subject" });
  } catch (e) {
    console.log(chalk.red(`Error while adding subject`));
  }
}
export async function addState(req, res) {
  try {
    const { value } = req.body;
    writeDataFile(value, "state", "add");
    res.status(200).send({ msg: "data added to state" });
  } catch (e) {
    console.log(chalk.red(`Error while adding state`));
  }
}
export async function addCity(req, res) {
  try {
    const { value } = req.body;
    writeDataFile(value, "city", "add");
    res.status(200).send({ msg: "data added to city" });
  } catch (e) {
    console.log(chalk.red(`Error while adding city`));
  }
}
export async function addTimeSlot(req, res) {
  try {
    const { value } = req.body;
    writeDataFile(value, "time-slot", "add");
    res.status(200).send({ msg: "data added to time-slot" });
  } catch (e) {
    console.log(chalk.red(`Error while adding time-slot`));
  }
}
export async function addTestDate(req, res) {
  try {
    const { value } = req.body;
    writeDataFile(value, "test-date", "add");
    res.status(200).send({ msg: "data added to test-date" });
  } catch (e) {
    console.log(chalk.red(`Error while adding test-date`));
  }
}
