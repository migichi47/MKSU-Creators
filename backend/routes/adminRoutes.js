import { Router } from "express";
import multer from "multer";
import { adminAddCreator } from "../controllers/adminAddCreator.js";
import { approveCreator } from "../controllers/approveCreator.js";
import { deleteCreator } from "../controllers/deleteCreator.js";
import { getPendingCreators } from "../controllers/getPendingCreators.js";
import { getAllCreators } from "../controllers/getAllCreators.js";

const router = Router();
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.get("/all", getAllCreators);
router.post("/add", upload.single("image"), adminAddCreator);
router.delete("/:id", deleteCreator);
router.get("/pending", getPendingCreators);
router.patch("/:id/approve", approveCreator);

export default router;
