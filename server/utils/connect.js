import chalk from "chalk";
import mongoose from "mongoose";

async function connectToDB() {
  const db = await mongoose.connect(process.env.DB_URL);
  return db;
}

export default connectToDB;
