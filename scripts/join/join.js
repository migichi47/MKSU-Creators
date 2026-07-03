document.querySelector('.js-lets-go-btn')
.addEventListener('click', () => {
  window.location.href = '/register.html';
  getDetails();
})

// to be modified
function getDetails() {
  const name = document.querySelector('.js-name').value;
  const admission = document.querySelector('.js-admission').value;
  const year = document.querySelector('.js-year').value;
  const platform = document.querySelector('.js-platform').value;
  const followers = document.querySelector('.js-followers').value;
  const handle = document.querySelector('.js-handle').value;
  console.log(name, admission, year, platform, followers, handle);
}