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

/**FUNCTION */
//afficher un album
function displayAlbum(album) {
  //CREATE ELEMENT

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
  icone.classList.add("fas", "fa-trash");

  div.appendChild(icone);
  //ICONE EDIT
  let editIcone = document.createElement("i");
  editIcone.classList.add("fas", "fa-edit");

  div.appendChild(editIcone);

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

  editIcone.addEventListener("click", function (e) {
    editForm(album);
  });
}

//Reccupérer les input

function catchValue() {
  let album = new Object();

  console.log(album);

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

// EDIT FUNCTION

//passer un parametre qui reccupere l'album a push
function editForm(alb) {
  form.setAttribute("data-mode", "add");
  document.querySelector("#image-link").value = alb.img;
  document.querySelector("#artiste").value = alb.nomArtiste;
  document.querySelector("#titre").value = alb.titre;
  document.querySelector("#annee").value = alb.annee;
  document.querySelector("#label").value = alb.label;
  document.querySelector("#duree").value = alb.duree;
}

/** MAIN CODE */

document.addEventListener("DOMContentLoaded", function () {
  displayArrayAlbum();
  /** SELECTORS */
  form = document.querySelector("form");
  btnAdd = document.querySelector("#ajouter");

  /**EVENT */
  form.setAttribute("data-mode", "edit");
  //Empeche le raffraichissement par defaut de la page au click sur le bouton submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    catchValue();
    return;
  });
});
