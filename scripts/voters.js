
document.querySelector('.js-back').addEventListener('click', () => {
  window.location.href = 'main.html';
})

let selectedCreators = JSON.parse(localStorage.getItem('selectedCreators')) || [];

function renderSelectedCreators()  {
  let html = '';
  selectedCreators.forEach(creator => {
    html += `
      <div class="card">
        <img src="${creator.image || "images/default.png"}" alt="" />
        <h2>${creator.name}</h2>
        <p>Category: ${creator.category}</p>
      </div>
    `;
});
document.querySelector('.js-voters-grid').innerHTML = html;
}

renderSelectedCreators();


function clearVotes() {
  localStorage.removeItem("votes");
  localStorage.removeItem("votesCategory");
  localStorage.removeItem("selectedCreators");
  document.querySelector('.js-voters-grid').innerHTML = '';
}

 if(!document.querySelector('.js-voters-grid').innerHTML) {
    document.querySelector('.js-clear-button-container').innerHTML = '';
    document.querySelector('.js-submit-button-container').innerHTML = '';
  }

document.querySelector('.js-clear-button').addEventListener('click', () => {
 
  if(!confirm('Clear all votes?')) {
    return;
  }
  clearVotes();
  if(!document.querySelector('.js-voters-grid').innerHTML) {
    document.querySelector('.js-clear-button-container').innerHTML = '';
    document.querySelector('.js-submit-button-container').innerHTML = '';
  }
});

document.querySelector('.js-submit-button').addEventListener('click', () => {
  setTimeout(() => {
    alert('Votes submitted successfully');
  }, 1)
  clearVotes();

  if(!document.querySelector('.js-voters-grid').innerHTML) {
    document.querySelector('.js-clear-button-container').innerHTML = '';
    document.querySelector('.js-submit-button-container').innerHTML = '';
  }
});

//add delete button to each component tile
//continue with the project