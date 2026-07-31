import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { Creator } from "./mongoose/schemas.js";

const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost/MKSU_Creators")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(`Error: ${err}`));

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
    response.status(200).json(creators);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

app.post("/creators", async (request, response) => {
  try {
    const creator = new Creator(request.body);
    await creator.save();

    response.status(201).send(creator);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});
