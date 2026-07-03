
let htmlNotGenerated = true;

let container = document.querySelector('.js-container');

function generateInitialHTML() {
  container.innerHTML = `
  <h1>Choose your Category</h1>
      <p>
        Pick your content category. Make sure you choose carefully, to avoid any
        future inconveniences
      </p>

      <div class="category-card-container">
        <div class="category-card js-category-card" data-category="dancing">
          <img src="images/dance.png" alt="" />
          <div>Dancing</div>
        </div>
        <div class="category-card js-category-card" data-category="influencer">
          <img src="images/influencer.png" alt="" />
          <div>Social Influencer</div>
        </div>
        <div class="category-card js-category-card" data-category="comedy">
          <img src="images/masks.png" alt="" />
          <div>Comedy</div>
        </div>
        <div class="category-card js-category-card" data-category="vlogging">
          <img src="images/camera.png" alt="" />
          <div>Vlogging</div>
        </div>
        <div class="category-card js-category-card" data-category="music">
          <img src="images/music-note.png" alt="" />
          <div>Music</div>
        </div>
    </div>
`

}


function generateScreenshotHTML() {
  let generatedHTML = `
    <div class="screenshot-tile">
      <h1>Upload your photo</h1>
      <h2>How you would like to appear on the creators list</h2>
      <div class="screenshot-section">
        <input type="file" name="screenshot" accept="image/*" required>
      </div>
    </div>
    <button type="submit">Finish</button>
  `;

  container.innerHTML = generatedHTML;
}

document.querySelectorAll('.js-category-card')
.forEach((card) => {
  const { category } = card.dataset;
  card.addEventListener('click', () => {
    // to be removed
    console.log(`Chose ${category}`);
    generateScreenshotHTML();
    htmlNotGenerated = false;
  })
})

document.querySelector('.js-back').addEventListener('click', () => {
  if (htmlNotGenerated) {
    window.location.href = '/join.html';
    return;
  } else if (!htmlNotGenerated) {
    window.location.href = '/register.html';
    htmlNotGenerated = true;
  }
})

