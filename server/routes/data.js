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

dataRouter.get("/subject", verifyUser, getSubject);
dataRouter.get("/state", verifyUser, getState);
dataRouter.get("/city", verifyUser, getCity);
dataRouter.get("/time-slot", verifyUser, getTimeSlot);
dataRouter.get("/test-date", verifyUser, getTestDate);

dataRouter.post("/subject", verifyAdmin, addSubject);
dataRouter.post("/state", verifyAdmin, addState);
dataRouter.post("/city", verifyAdmin, addCity);
dataRouter.post("/time-slot", verifyAdmin, addTimeSlot);
dataRouter.post("/test-date", verifyAdmin, addTestDate);

export default dataRouter;
