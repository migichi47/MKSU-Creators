import {creators} from "../data/creators.js";
import { getVotes, updateVoteCount } from "./utils/getVotes.js";
import { resetLocalStorage } from "./utils/resetLocalStorage.js";
import { searchInput } from "./utils/searchBar.js";
import { isUnderDevelopment } from "./utils/underDevelopment.js";

// generating id for each creator
Object.keys(creators).forEach(category => {
  creators[category].forEach((creator, index) => {
    creator.id = `${category}-${index}`;
  });
});

//generating HTML
function generateHtml(creatorsList, category) {
  let html = '';

  creatorsList.forEach(creator => { 
    if(creator.name) {
    html += `
      <div 
        id = "${creator.id}"
        data-creator-id="${creator.id}"
        data-creator-name="${creator.name}"
        data-creator-category="${category}"
        data-creator-image="${creator.image}"
        class="preview"
        >
        <img src="${creator.image || "images/default.png"}" alt="">
        <div class="preview-text">
          <div>
            <p class="name" >${creator.name}</p>
          </div>
          <div class="description">
            <p style="display: inline-block;" >${creator.followers > 1000 ?( creator.followers / 1000 + 'k') : 'N/A'} followers</p>&#183
            <p style="display: inline-block;" >Year ${creator.year || 'N/A'} </p>

            <div class="voted-popup-off js-voted-popup-${creator.id}-off">
              <div class="voted-emoji">✅</div>
              <p class="voted" >Voted</p>
            </div>
          </div>
        </div>
      </div>
    `
    }
  })

  return html;
}


document.querySelector(".js-dancers").innerHTML = generateHtml(creators.dancers, 'dancers');
document.querySelector(".js-vloggers").innerHTML = generateHtml(creators.vloggers, 'vloggers');
document.querySelector(".js-comedians").innerHTML = generateHtml(creators.comedians, 'comedians');
document.querySelector(".js-influencers").innerHTML = generateHtml(creators.influencers, 'influencers');
document.querySelector(".js-musicians").innerHTML = generateHtml(creators.musicians, 'musicians');



document.querySelector('.js-reset-local-storage')
.addEventListener('click', () => {
  resetLocalStorage();
})



const votedCategories = JSON.parse(localStorage.getItem("votesCategory")) || {};
const savedCreators = JSON.parse(localStorage.getItem("selectedCreators")) || [];

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    updateVoteCount();
  }
});

updateVoteCount();
getVotes(votedCategories, savedCreators);

document.querySelector('.js-confirm-votes-btn').addEventListener('click', () => {
  window.location.href = 'your-votes.html';
})

// search function
document.querySelector('.js-search-button').addEventListener('click', () => {
  searchInput(creators);
})
//search on enter
document.querySelector('.js-search-bar').addEventListener('keydown', (e) => {
  (e.key === 'Enter') && searchInput(creators);
})


// Display when page is under development
isUnderDevelopment(true);