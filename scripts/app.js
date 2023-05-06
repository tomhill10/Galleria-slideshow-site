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
        localStorage.setItem("selectedArtistIndex", index);
        window.location.href = "./pages/slideshow.html";
      });
      artistsContainer.appendChild(div);
    });
  });
