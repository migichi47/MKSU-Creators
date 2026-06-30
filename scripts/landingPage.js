document.querySelector('.js-vote-now-btn')
.addEventListener('click', () => {
  window.location.href = '../main.html';
})

document.querySelectorAll('.category-card')
.forEach((card) => {
  card.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})