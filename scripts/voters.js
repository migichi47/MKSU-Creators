
document.querySelector('.js-back').addEventListener('click', () => {
  window.location.href = 'main.html';
})

let selectedCreators = JSON.parse(localStorage.getItem('selectedCreators')) || [];
let votedCategories = JSON.parse(localStorage.getItem('votesCategory')) || {};
let voteCount;
updateVoteCount();

function updateVoteCount() {
  voteCount = selectedCreators.length;
  localStorage.setItem("votes", JSON.stringify(voteCount));
}

function renderSelectedCreators()  {
  let html = '';
  selectedCreators.forEach(creator => {
    html += `
      <div class="card">
        <img src="${creator.image || "images/default.png"}" alt="" />
        <h2>${creator.name}</h2>
        <p>Best ${(creator.category).slice(0, -1)}</p>
        <button class="remove-btn js-remove-btn" data-id="${creator.id}">Remove</button>
      </div>
    `;
});
document.querySelector('.js-voters-grid').innerHTML = html;
}

renderSelectedCreators();
toggleButtons();

document.querySelector('.js-voters-grid').addEventListener('click', (e) => {
  if (!e.target.classList.contains('js-remove-btn')) return;
  const {id} = e.target.dataset;

  const removedCreator = selectedCreators.find(creator => creator.id === id);
  if (removedCreator) {
    delete votedCategories[removedCreator.category];
    localStorage.setItem("votesCategory", JSON.stringify(votedCategories));
  }
  selectedCreators = selectedCreators.filter(creator => creator.id !== id);
  localStorage.setItem('selectedCreators', JSON.stringify(selectedCreators));
  
  updateVoteCount();
  renderSelectedCreators();
  toggleButtons();
})

function clearVotes() {
  localStorage.removeItem("votes");
  localStorage.removeItem("votesCategory");
  localStorage.removeItem("selectedCreators");
  document.querySelector('.js-voters-grid').innerHTML = '';
}

function toggleButtons() {
   if(!selectedCreators.length) {
    document.querySelector('.js-clear-button-container').innerHTML = '';
    document.querySelector('.js-submit-button-container').innerHTML = '';
  }
}

(document.querySelector('.js-clear-button')) && (document.querySelector('.js-clear-button')).addEventListener('click', () => {

  if(!confirm('Clear all votes?')) {
    return;
  }
  clearVotes();
  toggleButtons();
});

(document.querySelector('.js-submit-button')) && (document.querySelector('.js-submit-button')).addEventListener('click', () => {
  setTimeout(() => {
    alert('Votes submitted successfully');
  }, 1)
  localStorage.removeItem("votes");
  localStorage.removeItem("selectedCreators");
  document.querySelector('.js-voters-grid').innerHTML = '';

  toggleButtons();
});