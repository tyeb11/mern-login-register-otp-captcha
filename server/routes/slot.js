import { Router } from "express";
import { verifyUser } from "../middlewares/verifyUser.js";
import { addSlot, getAllSlot } from "../controllers/slot.js";

const slotRouter = Router();

slotRouter.get("/slot", getAllSlot); //verifyUser
slotRouter.post("/slot", verifyUser, addSlot);

export default slotRouter;
