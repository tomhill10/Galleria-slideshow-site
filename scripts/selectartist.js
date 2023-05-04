$.ajax("../data/data.json").then((data) => {
  const selectedArtistIndex = localStorage.getItem("selectedArtistIndex");
  const selectedArtist = data[selectedArtistIndex];
  const artistContainer = $(".artist-container");
  const div = $("<div class='artist'>");
  div.html(` 

<div class="artist-wrapper">
<div class="artist-left">
    <div class="artist-left-name-artistName">
		<h2 class="artist-left-name-artistName-h2">${selectedArtist.name}</h2>
        <p class="artist-left-name-artistName-p">${selectedArtist.artist.name}</p>
    </div>
    <div class="artist-left-image">
        <img src=".${selectedArtist.images.hero.small}" alt="artist-image">
        <button class="artist-left-image-button">
            <img src="../assets/OpenImage.svg" alt="icon"> VIEW IMAGE </button>
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
</footer>

   
  `);
  artistContainer.append(div);
});

window.onbeforeunload = function () {
  localStorage.removeItem("selectedArtistIndex");
};
