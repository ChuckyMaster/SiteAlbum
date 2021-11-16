"use strict";

/** VARIABLES */
let btnAdd;
let form;
let btnTrash;
let putain;
/**    ARRAY OBJECT  */
let listAlbum = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEde0SusbbxyTsjhR4cGbvR7HdfFPZHby9ReP8t-lXzHNLAgxeTmiS84K237DHHBlQ5g&usqp=CAU",
    nomArtiste: "Gideon",
    titre: "Cold",
    annee: 1998,
    label: "Arise",
    duree: 45 + " minutes",
  },
];

// let alb1 = {
//   img: "/img/cold.jpg",
//   nomArtiste: "Gideon",
//   titre: "Cold",
//   annee: 1998,
//   label: "Arise",
//   duree: 45 + " minutes",
// };

/**FUNCTION */
//afficher un album
function displayAlbum(album) {
  let sectionAlbum = document.querySelector("#album");
  let div = document.createElement("div");
  div.classList.add("card");

  sectionAlbum.appendChild(div);
  let img = document.createElement("img");
  img.setAttribute("src", `${album.img}`);

  div.appendChild(img);
  let divD = document.createElement("div");
  divD.classList.add("description");
  let h3 = document.createElement("h3");
  div.appendChild(divD);
  let ul = document.createElement("ul");
  divD.appendChild(h3);
  divD.insertAdjacentHTML("afterend", `<i class="fas fa-trash"></i>`);

  h3.innerHTML += ` ${album.nomArtiste}`;
  for (const property in album) {
    //verifier la propriété:
    // console.log(album[property]);
    let li = document.createElement("li");
    ul.appendChild(li);

    //Affiche la propriété et le valeur
    li.innerHTML += `${property} : ${album[property]} `;
  }

  //BOUTON TRASH PAR ICI
  btnTrash = document.querySelectorAll("i");
  // putain = document
  //   .querySelector("#putain")
  //   .addEventListener("click", console.log("shit"));
  // putain.appendChild(btnTrash);
  btnTrash.forEach((elem) => {
    elem.addEventListener("click", removeOne);
  });

  divD.appendChild(ul);
}

//Reccupérer les input

function catchValue() {
  let album = new Object();
  album.img = document.querySelector("#image-link").value;
  album.nomArtiste = document.querySelector("#artiste").value;
  album.titre = document.querySelector("#titre").value;
  album.annee = document.querySelector("#annee").value;
  album.label = document.querySelector("#label").value;
  album.duree = document.querySelector("#duree").value;

  console.log(album.img);
  listAlbum.push(album);
  displayAlbum(album);
  form.reset();
}

//afficher le tabeal listAlbum
function displayArrayAlbum() {
  listAlbum.forEach((elem) => {
    displayAlbum(elem);
  });
}

function removeOne(e) {
  console.log(e.target.dataset.index);
  console.log("la mongolie vous connaissez?!");
  // listAlbum.splice(e.target.dataset.index, 1);
}

//Ajouter event de la fonction catchValue au button "ajouter"

/** MAIN CODE */

document.addEventListener("DOMContentLoaded", function () {
  displayArrayAlbum();
  /** SELECTORS */
  form = document.querySelector("form");
  btnAdd = document.querySelector("#ajouter");

  /**EVENT */

  //Empeche le raffraichissement par defaut de la page au click sur le bouton submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    catchValue();
    return;
  });
});
