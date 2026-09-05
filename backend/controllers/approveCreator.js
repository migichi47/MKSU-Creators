export const approveCreator = async (request, response) => {
  const { id } = request.params;
  const creator = await Creator.findByIdAndUpdate(
    id,
    { status: "approved" },
    { new: true },
  );

  response.json({ msg: "Creator approved", creator });
};
