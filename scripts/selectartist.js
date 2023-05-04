$.ajax("../data/data.json").then((data) => {
  const selectedArtistIndex = localStorage.getItem("selectedArtistIndex");
  const selectedArtist = data[selectedArtistIndex];
  const artistContainer = $(".artist-container");
  const div = $("<div class='artist'>");
  div.html(`
    <div class="text-wrapper">
      <h3 class="heading-3">${selectedArtist.name}</h3>
      <p class="subhead-2">${selectedArtist.artist.name}</p>
      <p>${selectedArtist.description}</p>
    </div>
    <img src="../${selectedArtist.images.gallery}" alt="artwork">
  `);
  artistContainer.append(div);
});

window.onbeforeunload = function () {
  localStorage.removeItem("selectedArtistIndex");
};
