import chalk from "chalk";
import express from "express";
import connectToDB from "./utils/connect.js";
import authRoute from "./routes/auth.js";

const app = express();
app.use("/api/auth", authRoute);

await connectToDB()
  .then(() => {
    console.log(chalk.green(`connected to database ...`));
    app.listen(process.env.PORT, (e) => {
      if (e)
        return console.log(
          chalk.red(`Error connecting to server at port ${process.env.PORT}`)
        );
      console.log(
        chalk.green(`server listening on port ${process.env.PORT} ...`)
      );
    });
  })
  .catch((e) => console.log(chalk.red(`Error connecting to database`)));
