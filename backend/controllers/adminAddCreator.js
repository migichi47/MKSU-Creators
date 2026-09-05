export const adminAddCreator = async (request, response) => {
  try {
    const creator = new Creator({
      ...request.body,
      image: request.file.filename,
      status: "approved",
    });
    await creator.save();

    response.status(201).json({
      msg: "Creator submitted and is verified",
      creator,
    });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};