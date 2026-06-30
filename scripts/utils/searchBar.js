//search-button
const notyf = new Notyf();
export function searchInput(creators) {
  let searchValue = document.querySelector('.js-search-bar').value.trim().toLowerCase();
  let found = false;
  let matchingCreator;

  Object.keys(creators).forEach(category => {
    creators[category].forEach(creator => {
      if(creator.name.toLowerCase().includes(searchValue)) {
        matchingCreator = document.getElementById(creator.id);

        if (matchingCreator) {
          matchingCreator.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });    
        }
        found = true;
      }
    });
  });;
  if (found && matchingCreator) {
    let count = 0;

    const interval = setInterval(() => {
      matchingCreator.classList.toggle('highlight');
      count++;

      if (count === 8) {
        clearInterval(interval);
        matchingCreator.classList.remove('highlight');
      }
    }, 300);
  }
  if (!found) {
    notyf.error('No creator found');
  }
  document.querySelector('.js-search-bar').value = '';
}