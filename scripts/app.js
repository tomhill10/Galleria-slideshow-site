const artistsContainer = document.querySelector(".artists");

fetch("./data/data.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((artist, index) => {
      console.log("artist index:", index);
      const div = document.createElement("div");
      div.className = "artist gallery-artist";
      div.innerHTML = `
        <div class="text-wrapper">
          <h3 class="heading-3">${artist.name}</h3>
          <p class="subhead-2">${artist.artist.name}</p>
        </div>
        <img src="${artist.images.gallery}" alt="artwork">
      `;
      div.addEventListener("click", function () {
        localStorage.setItem("selectedArtist", JSON.stringify(artist));
        localStorage.setItem("selectedArtistIndex", index);
        window.location.href = "./pages/slideshow.html";
      });

      artistsContainer.appendChild(div);
    });
  });

const startSlideshow = document.getElementById("startSlideshow");
startSlideshow.addEventListener("click", function () {
  console.log("button pressed");
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => {
      const selectedArtist = json[0];
      localStorage.setItem("selectedArtist", JSON.stringify(selectedArtist));
      localStorage.setItem("selectedArtistIndex", 1);
      window.location.href = "./pages/slideshow.html";
    });
});
