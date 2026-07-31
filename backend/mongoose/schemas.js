import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
  image: String,
  name: String,
  followers: String,
  category: String
});

export const Creator = mongoose.model("Creator", creatorSchema);