export const deleteCreator = async (request, response) => {
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
};
