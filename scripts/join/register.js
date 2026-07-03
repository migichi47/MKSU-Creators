document.querySelectorAll('.js-category-card')
.forEach((card) => {
  const { category } = card.dataset;
  card.addEventListener('click', () => {
    // to be removed
    console.log(`Chose ${category}`);
  })
})


document.querySelector('.js-back').addEventListener('click', () => {
  window.location.href = '/join.html';
})
