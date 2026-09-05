export const getPendingCreators = async (request, response) => {
  const creators = await Creator.find({ status: "pending" });
  response.json(creators);
};
