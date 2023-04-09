import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/:user");
adminRouter.get("/all-user");
adminRouter.post("/login");
adminRouter.post("/state");
adminRouter.post("/city");
adminRouter.post("/subject");
adminRouter.post("/test-date");
adminRouter.post("/time-slot");

export default adminRouter;
