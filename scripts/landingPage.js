document.querySelector('.js-vote-now-btn')
.addEventListener('click', () => {
  window.location.href = '../main.html';
})

document.querySelector('.js-join-as-creator')
.addEventListener('click', () => {
  window.location.href = '/join.html';
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