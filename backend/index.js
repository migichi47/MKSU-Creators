import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import { Creator } from "./mongoose/schemas.js";
import routes from "./routes/index.js";

const app = express();
const PORT = 3000;

// middleware
// idk what cors are or is
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://localhost/MKSU_Creators")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(`Error: ${err}`));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

app.use("./routes/index.js", routes);
