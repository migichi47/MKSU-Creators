import { Router } from "express";
import multer from "multer";
import { adminAddCreator } from "../controllers/adminAddCreator.js";
import { approveCreator } from "../controllers/approveCreator.js";
import { deleteCreator } from "../controllers/deleteCreator.js";
import { getPendingCreators } from "../controllers/getPendingCreators.js";

const router = Router();
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/creators/add", upload.single("image"), adminAddCreator);
router.delete("/creators/:id", deleteCreator);
router.get("/creators/pending", getPendingCreators);
router.patch("/creators/:id/approve", approveCreator);

export default router;
