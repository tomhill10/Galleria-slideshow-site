let selectedArtistIndex = localStorage.getItem("selectedArtistIndex");
let currentIndex = parseInt(selectedArtistIndex);

function showArtist(index) {
  fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const selectedArtist = data[index];
      const artistContainer = document.querySelector(".artist-container");
      artistContainer.innerHTML = ""; // clear previous artist data

      const div = document.createElement("div");
      div.className = "artist";
      div.innerHTML = `
        <div class="artist-wrapper">
          <div class="artist-left">
            <div class="artist-left-name-artistName">
              <h2 class="artist-left-name-artistName-h2">${selectedArtist.name}</h2>
              <p class="artist-left-name-artistName-p">${selectedArtist.artist.name}</p>
            </div>
            <div class="artist-left-image">
              <img src=".${selectedArtist.images.hero.small}" alt="artist-image">
              <button class="artist-left-image-button">
                <img src="../assets/OpenImage.svg" alt="icon"> VIEW IMAGE
              </button>
            </div>
            <div class="artist-left-portrait">
              <img src=".${selectedArtist.artist.image}" alt="thumbnail">
            </div>
          </div>
          <div class="artist-right">
            <h1 class="display artist-right-display">${selectedArtist.year}</h1>
            <p class="body artist-right-body">${selectedArtist.description}</p>
            <a href="${selectedArtist.source}" class="subhead-1 artist-right-a">GO TO SOURCE</a>
          </div>
        </div>
        <footer class="artist-footer">
          <div class="artist-footer-info">
            <h3 class="heading-2 artist-footer-h3">${selectedArtist.name}</h3>
            <p class="subhead-1 artist-footer-p">${selectedArtist.artist.name}</p>
          </div>
          <div class="artist-footer-arrows-wrapper">
            <img src="../assets/Arrow-left.svg" alt="arrow">
            <img src="../assets/Arrow-right.svg" alt="arrow">
          </div>
        </footer>
      `;

      const leftArrowImg = div.querySelector('img[alt="arrow"]:first-of-type');
      leftArrowImg.addEventListener("click", showPrev);

      const rightArrowImg = div.querySelector('img[alt="arrow"]:last-of-type');
      rightArrowImg.addEventListener("click", showNext);

      artistContainer.appendChild(div);
    });
}

function showNext() {
  const data = JSON.parse(localStorage.getItem("data"));
  currentIndex = (currentIndex + 1) % data.length;
  selectedArtistIndex = currentIndex.toString();
  localStorage.setItem("selectedArtistIndex", selectedArtistIndex);
  showArtist(currentIndex, data);
}

function showPrev() {
  const data = JSON.parse(localStorage.getItem("data"));
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  selectedArtistIndex = currentIndex.toString();
  localStorage.setItem("selectedArtistIndex", selectedArtistIndex);
  showArtist(currentIndex, data);
}

fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("data", JSON.stringify(data));
    showArtist(currentIndex, data);
  });
// window.onbeforeunload = function () {
//   localStorage.removeItem("selectedArtistIndex");
// };
