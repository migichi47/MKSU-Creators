export function isUnderDevelopment(param) {
  let underDevelopment = param;
  
  if (underDevelopment) {
    document.querySelector('.js-container').innerHTML = newPage;

    document.querySelector('button')
    .addEventListener('click', () => {
      window.location.href = '/index.html';
    })
  }
}

let newPage = `
  <div class="container">
    <h1>This Page is currently under Development</h1>
    <button>Go Back</button>
  </div>
`;