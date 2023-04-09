import { Router } from "express";
import {
  register,
  login,
  generateOTP,
  verifyOTP,
} from "../controllers/auth.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/verify", verifyUser);
authRouter.post("/login", verifyUser, login);
authRouter.post("/generate-otp", generateOTP);
authRouter.post("/verify-otp", verifyOTP);

export default authRouter;
