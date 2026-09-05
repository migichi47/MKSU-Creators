import { Creator } from "../mongoose/schemas.js";

export const getAllCreators = async (request, response) => {
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
};
