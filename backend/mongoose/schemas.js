import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
  image: String,
  followers: String,
  category: String,
  platform: String,
  username: String,
  admission: String,
  fullName: String,
  year: String,
  phoneNumber: String,
});

export const Creator = mongoose.model("Creator", creatorSchema);
