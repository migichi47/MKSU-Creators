
let voteCount = JSON.parse(localStorage.getItem("votes")) || 0;

export function getVotes(votedCategories, savedCreators) {
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
}

export function updateVoteCount() {
  voteCount = JSON.parse(localStorage.getItem("votes")) || 0;
  document.querySelector('.js-vote-count').innerText = voteCount;
}