import express, { request, response } from "express";
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

// get approved creators
app.get("/creators", async (request, response) => {
  try {
    const creators = await Creator.find({ status: "approved" });
    const formattedCreators = creators.map((creator) => ({
      ...creator._doc,
      image: `http://localhost:3000/uploads/${creator.image}`,
    }));

    response.status(200).json(formattedCreators);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// get all creators (approved, pending, rejected)
app.get("/creators/all", async (request, response) => {
  try {
    const creators = await Creator.find();
    const formattedCreators = creators.map((creator) => ({
      ...creator._doc,
      image: `http://localhost:3000/uploads/${creator.image}`,
    }));

    response.status(200).json(formattedCreators);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// create a creator request
app.post("/creators", upload.single("image"), async (request, response) => {
  try {
    const creator = new Creator({
      ...request.body,
      image: request.file.filename,
      status: "pending",
    });
    await creator.save();

    response.status(201).json({
      msg: "Creator submitted for approval",
      creator,
    });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});


// admin create a creator
app.post("/creators/add", upload.single("image"), async (request, response) => {
  try {
    const creator = new Creator({
      ...request.body,
      image: request.file.filename,
      status: "pending",
    });
    await creator.save();

    response.status(201).json({
      msg: "Creator submitted and is verified",
      creator,
    });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});


// admin delete creator
app.delete("/creators/:id", async (request, response) => {
  try {
    const {
      params: { id },
    } = request;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).send({ msg: "Invalid ID" });
    }

    const deletedCreator = await Creator.findByIdAndDelete(id);

    if (!deletedCreator) {
      return response.status(404).send({ msg: "Creator not found" });
    }

    response.send({
      msg: "Creator deleted successfully",
      creator: deletedCreator,
    });
  } catch (error) {
    response
      .status(500)
      .send({ msg: "Error deleting creator", Error: error.message });
  }
});

// admin gets pending creators
app.get("/creators/pending", async (request, response) => {
  const creators = await Creator.find({ status: "pending" });
  response.json(creators);
});

// admin approves creators
app.patch("/creators/:id/approve", async (request, response) => {
  const { id } = request.params;

  const creator = await Creator.findByIdAndUpdate(
    id,
    { status: "approved" },
    { new: true },
  );

  response.json({ msg: "Creator approved", creator });
});
