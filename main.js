"use strict";

/** VARIABLES */

/**    ARRAY OBJECT  */
let listAlbum = {
  img: "imgcold.jpg",
  nomArtiste: "Gideon",
  titre: "Cold",
  annee: 1998,
  label: "Arise",
  duree: 45,
};

/**FUNCTION */

function displayAlbum(album) {
  let sectionAlbum = document.querySelector("#album");
  let div = document.createElement("div");

  div.classList.add("card");
  sectionAlbum.appendChild(div);
  let img = document.createElement("img");
  img.setAttribute("src", "");
  div.appendChild(img);
  let divD = document.createElement("div");
  divD.classList.add("description");
  let h3 = document.createElement("h3");
  div.appendChild(divD);
  let ul = document.createElement("ul");
  divD.appendChild(h3);
  divD.appendChild(ul);
  let li = document.createElement("li");
  h3.innerHTML += ` ${album.nomArtiste}`;
  for (const property in album) {
    ul.appendChild(li);

    li.innerHTML += `${album.titre}`;
    li.innerHTML += `${album.annee}`;

    li.innerHTML += `${album.label}`;
    li.innerHTML += `${album.duree}`;
  }
}

/** MAIN CODE */

document.addEventListener("DOMContentLoaded", function () {
  /** SELECTORS */
  /**EVENT */

  displayAlbum(listAlbum);
});
