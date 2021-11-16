let tabFilms = [
  { numero: 1, nom: "Le pianiste" },
  { numero: 2, nom: "OSS 117" },
  { numero: 3, nom: "Stalingrad" },
];

function afficherFilms() {
  for (let f of tabFilms) {
    afficherFilm(f);
  }
}

function afficherFilm(film) {
  let divFilms = document.getElementById("listeFilms");
  let divFilm = document.createElement("div");
  divFilm.innerHTML = `
        <p> ${film.numero} - ${film.nom}</p>
    `;

  let bouton = document.createElement("button");
  bouton.innerText = "Supprimer";

  bouton.addEventListener("click", function (e) {
    supprimerFilm(film, divFilm);
  });

  divFilm.append(bouton);
  divFilms.append(divFilm);
}

function supprimerFilm(film, balise) {
  let indexFilm = tabFilms.indexOf(film);
  tabFilms.splice(indexFilm, 1);

  balise.remove();
}

afficherFilms();
