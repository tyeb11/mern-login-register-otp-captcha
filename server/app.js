import chalk from "chalk";
import express from "express";
import connectToDB from "./utils/connect.js";
import authRoute from "./routes/auth.js";
import cors from "cors";
import slotRouter from "./routes/slot.js";
import adminRouter from "./routes/admin.js";
import dataRouter from "./routes/data.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api", slotRouter);
app.use("/api/admin", adminRouter);
app.use("/api/data", dataRouter);

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
