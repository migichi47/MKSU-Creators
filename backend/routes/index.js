import { Router } from "express";
import adminRoutes from "./adminRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();
router.use("./userRoutes.js", userRoutes);
router.use("./adminRoutes.js", adminRoutes);

export default router;
