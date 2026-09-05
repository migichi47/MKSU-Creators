import multer from "multer";
import { Router } from "express";
import { addCreator } from "../controllers/addCreator.js";
import { getApprovedCreators } from "../controllers/getApprovedCreators.js";

const router = Router();
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.get("/approved", getApprovedCreators);
router.post("/creators", upload.single("image"), addCreator);

export default router;
