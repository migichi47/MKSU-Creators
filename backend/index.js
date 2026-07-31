import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";

import { Creator } from "./mongoose/schemas.js";

const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://localhost/MKSU_Creators")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(`Error: ${err}`));

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

app.get("/creators", async (request, response) => {
  try {
    const creators = await Creator.find();

    const formattedCreators = creators.map(creator => ({
      ...creator._doc,
      image: `http://localhost:3000/uploads/${creator.image}`
    }))

    response.status(200).json(formattedCreators);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

app.post("/creators", upload.single("image"), async (request, response) => {
  try {
    const creator = new Creator({
      ...request.body,
      image: request.file.filename,
    });
    await creator.save();

    response.status(201).json(creator);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});
