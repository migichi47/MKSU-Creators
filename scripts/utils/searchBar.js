//search-button
const notyf = new Notyf();
export function searchInput(creators) {
  let searchValue = document.querySelector('.js-search-bar').value.trim().toLowerCase();
  let found = false;

  Object.keys(creators).forEach(category => {
    creators[category].forEach(creator => {
      if(creator.name.toLowerCase().includes(searchValue)) {
        let matchingCreator = document.getElementById(creator.id);

        if (matchingCreator) {
          matchingCreator.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          matchingCreator.classList.add('highlight');
          setTimeout(() => {
            matchingCreator.classList.remove('highlight');
          }, 2000);
        }
        found = true;
      }
    });
  });;
  if (!found) {
    notyf.error('No creator found');
  }
  document.querySelector('.js-search-bar').value = '';
}