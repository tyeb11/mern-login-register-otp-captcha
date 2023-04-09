import { Router } from "express";
import { verifyUser } from "../controllers/auth";
import { addSlot, getAllSlot } from "../controllers/slot";

const slotRouter = Router();

slotRouter.get("/slot", verifyUser, getAllSlot);
slotRouter.post("/slot", verifyUser, addSlot);

export default slotRouter;
