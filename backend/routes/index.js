import { Router } from "express";
import adminRoutes from "./adminRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();
router.use("/creators", userRoutes);
router.use("/admin", adminRoutes);

export default router;
