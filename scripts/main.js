import {creators} from "../data/creators.js";
import { resetLocalStorage } from "./utils/resetLocalStorage.js";
//generating HTML
const generateHtml  = (creatorsList, category) => {
  let html = '';

  creatorsList.forEach(creator => { 
    if(creator.name) {
    html += `
      <div 
        data-creator-id="${creator.id}"
        data-creator-name="${creator.name}"
        data-creator-category="${category}"
        data-creator-image="${creator.image}"
        class="preview "
        >
        <img class="cover-photo" src="${creator.image || "images/default.png"}" alt="">
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

Object.keys(creators).forEach(category => {
  creators[category].forEach((creator, index) => {
    creator.id = `${category}-${index}`;
  });
});


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
let voteCount = JSON.parse(localStorage.getItem("votes")) || 0;
const savedCreators = JSON.parse(localStorage.getItem("selectedCreators")) || [];

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    voteCount = JSON.parse(localStorage.getItem("votes")) || 0;
    updateVoteCount();
  }
});

function updateVoteCount() {
  return document.querySelector('.js-vote-count').innerText = voteCount;
}

updateVoteCount();

document.querySelectorAll(`.preview`).forEach(preview => {
  preview.addEventListener('click', () => {
    const {creatorId, creatorName, creatorCategory, creatorImage} = preview.dataset;

    if(votedCategories[creatorCategory]) {
      alert('You already voted in this category');
      return;
    }
    const confirmed = confirm(`Vote for ${creatorName}`);
    if (confirmed) {
      const popup = document.querySelector(`.js-voted-popup-${creatorId}-off`);
      popup.classList.add('voted-popup-on');

      votedCategories[creatorCategory] = true;
      localStorage.setItem("votesCategory", JSON.stringify(votedCategories));

      savedCreators.push({
      id: creatorId,
      name: creatorName,
      image: creatorImage,
      category: creatorCategory,
      });

      localStorage.setItem('selectedCreators', JSON.stringify(savedCreators))

      voteCount += 1;
      localStorage.setItem("votes", JSON.stringify(voteCount));
      updateVoteCount();

      clearTimeout(popup.timeoutId);
      popup.timeoutId = setTimeout(() => {
        popup.classList.remove('voted-popup-on');
      }, 2000);
    }
  })
});


document.querySelector('.js-confirm-votes-btn').addEventListener('click', () => {
  window.location.href = 'your-votes.html';
})
