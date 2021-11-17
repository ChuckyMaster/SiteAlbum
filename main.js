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

  //ICONE POUBELLE
  let icone = document.createElement("i");
  icone.classList.add("fas");
  icone.classList.add("fa-trash");
  div.appendChild(icone);

  //ICONE EDIT
  let editIcone = document.createElement("i");
  editIcone.classList.add("fas");
  editIcone.classList.add("fa-edit");
  div.appendChild(editIcone);

  //TEST BUTTON
  let button = document.createElement("button");
  button.innerText = "TEST ME";

  div.appendChild(button);

  button.addEventListener("click", function (e) {
    edit(album);
    console.log("hi from edit");
  });

  h3.innerHTML += ` ${album.nomArtiste}`;
  for (const property in album) {
    //verifier la propriété:
    console.log(property);

    if (property != "img") {
      let li = document.createElement("li");
      ul.appendChild(li);

      //Affiche la propriété et le valeur

      li.innerHTML += `${property} : ${album[property]} `;
    }
  }

  //EVENT DELETE
  icone.addEventListener("click", function (e) {
    removeOne(album, div);
  });
  divD.appendChild(ul);

  //EVENT EDIT
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

function removeOne(album, balise) {
  let indexAlbum = listAlbum.indexOf(album);

  listAlbum.splice(indexAlbum, 1);
  balise.remove();
}
// function edit() {}

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
