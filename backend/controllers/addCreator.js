import { Creator } from "../mongoose/schemas.js";

export const addCreator = async (request, response) => {
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
};
