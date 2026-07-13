
export function resetLocalStorage() {
  let confirmed = confirm('Reset local storage?'); 

  if (confirmed) { 
    localStorage.removeItem("votes");
    localStorage.removeItem("votesCategory");
    localStorage.removeItem("selectedCreators");

    location.reload();
  } else {
    return;
  }
}
