creators = {
  dancers: [
    {
      image: "images/morin.jpg",
      name: 'Morin',
      followers: 34000,
      year: 4,
    },
    {
      image: "images/mukeli.jpg",
      name: 'Mukelih',
      followers: 4400,
      year: 1,
    },
    {
      image: "images/cute-adorable-little-girl-character-avatar-isolated_925324-1724.avif",
      name: 'Mourine',
      followers: 3400,
      year: 1,
    },
    {
      image: "images/mwende.jpg",
      name: 'Mwende',
      followers: 1100,
      year: 3,
    }
  ],

  vloggers: [
    {
      image: "images/WhatsApp Image 2026-04-21 at 2.53.05 PM (1).jpeg",
      name: 'Migichi',
      followers: 3400,
      year: 1,
    },
    {
      image: "images/tabi mwika.webp",
      name: 'Tabi Mwikaa',
      followers: 2400,
      year: 1,
    },
    {
      image: "images/blessing.jpg",
      name: 'Mourine',
      followers: 1700,
      year: 1,
    },
    {
      image: "images/Marrion.jpg",
      name: 'Marrion',
      followers: 6800,
    },
    {
      image: '',
      name: 'Mksu Vibes',
      followers: 3400,
      year: false,
    }
  ],

  comedians: [
    {
      image: "",
      name: 'Innocent',
      followers: "",
      year: "",
    },
    {
      image: "",
      name: '',
      followers: "",
      year: "",
    },
    {
      image: "",
      name: '',
      followers: "",
      year: "",
    },
    {
      image: "",
      name: '',
      followers: "",
      year: "",
    },
    {
      image: "",
      name: '',
      followers: "",
      year: "",
    }
  ],

  influencers: [
    {
      image: "images/gym reaper.jpg",
      name: 'Gym Reaper',
      followers: "2300",
      year: "",
    },
    {
      image: "images/_opiri.jpg",
      name: '_opiri',
      followers: "3300",
      year: "",
    },
    {
      image: "images/Daisy.webp",
      name: 'Daisy',
      followers: "5900",
      year: "",
    },
    {
      image: "images/Miss Throne.jpg",
      name: 'Miss Throne',
      followers: "3400",
      year: "",
    },
    {
      image: "images/pngtree-cartoon-hand-drawn-handsome-boy-avatar-png-image_16798195.webp",
      name: 'Benzema',
      followers: "11400",
      year: "",
    }
  ],

  musicians: [
    {
      image: "",
      name: 'Bami Nui',
      followers: "",
      year: "",
    },
    {
      image: "",
      name: '',
      followers: "",
      year: "",
    },
    {
      image: "",
      name: '',
      followers: "",
      year: "",
    },
    {
      image: "",
      name: '',
      followers: "",
      year: "",
    },
    {
      image: "",
      name: '',
      followers: "",
      year: "",
    }
  ],

  
};


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


document.querySelector('.js-view-votes').addEventListener('click', () => {
  window.location.href = 'voters.html';
})

function resetLocalStorage() {
  localStorage.removeItem("votes");
  localStorage.removeItem("votesCategory");
  localStorage.removeItem("selectedCreators");
}
