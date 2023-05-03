const artists = $(".artists");

$.ajax("./data/data.json").then((data) => {
  data.forEach((artist) => {
    const div = $("<div class='artist gallery-artist'>");
    div.html(`
<div class="text-wrapper">
    <h3 class="heading-3">${artist.name}</h3>
    
    <p class="subhead-2">${artist.artist.name}</p>
    </div>
    <img src="${artist.images.gallery}" alt="artwork">
    `);
    artists.append(div);
  });
});
