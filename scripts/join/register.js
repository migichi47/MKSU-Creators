document.querySelectorAll('.js-category-card')
.forEach((card) => {
  const { category } = card.dataset;
  card.addEventListener('click', () => {
    console.log(`Chose ${category}`);
  })
})