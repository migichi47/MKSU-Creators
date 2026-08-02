import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
  image: { type: String, required: true },
  followers: { type: String, required: true },
  category: { type: String, required: true },
  platform: { type: String, required: true },
  username: { type: String, required: true },
  admission: { type: String, required: true },
  fullName: { type: String, required: true },
  year: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  status: String
});

export const Creator = mongoose.model("Creator", creatorSchema);
