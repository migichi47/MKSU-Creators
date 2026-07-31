import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
  name: String,
  followers: String,
});

export const Creator = mongoose.model("Creator", creatorSchema);