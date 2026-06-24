
export function resetLocalStorage() {
  localStorage.removeItem("votes");
  localStorage.removeItem("votesCategory");
  localStorage.removeItem("selectedCreators");
}