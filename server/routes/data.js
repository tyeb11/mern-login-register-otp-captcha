import { Router } from "express";
import {
  addCity,
  addState,
  addSubject,
  addTestDate,
  addTimeSlot,
  getCity,
  getState,
  getSubject,
  getTestDate,
  getTimeSlot,
} from "../controllers/data.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const dataRouter = Router();

dataRouter.get("/subject", getSubject);
dataRouter.get("/state", getState);
dataRouter.get("/city", getCity);
dataRouter.get("/time-slot", getTimeSlot);
dataRouter.get("/test-date", getTestDate);

dataRouter.post("/subject", verifyAdmin, addSubject);
dataRouter.post("/state", verifyAdmin, addState);
dataRouter.post("/city", verifyAdmin, addCity);
dataRouter.post("/time-slot", verifyAdmin, addTimeSlot);
dataRouter.post("/test-date", verifyAdmin, addTestDate);

export default dataRouter;
