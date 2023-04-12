import { Router } from "express";
import {
  deleteSlot,
  editSlot,
  getAllUsers,
  getSlot,
  login,
  register,
} from "../controllers/admin.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

const adminRouter = Router();

adminRouter.get("/slot/:slotId", verifyAdmin, getSlot);
adminRouter.get("/all-user", verifyAdmin, getAllUsers);
adminRouter.post("/login", verifyAdmin, login);
adminRouter.post("/register", register);
adminRouter.patch("/slot", verifyAdmin, editSlot);
adminRouter.delete("/slot", verifyAdmin, deleteSlot);

export default adminRouter;
