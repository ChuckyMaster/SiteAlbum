"use strict";
//ARRAY

let tab = [
  {
    nom: "nounou",
    age: 2,
  },

  {
    nom: "janou",
    age: 3,
  },
  {
    nom: "berbere",
    age: 4,
  },
  {
    nom: "doudou",
    age: 3,
  },
];

function MyIndexOf(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i].nom === needle) {
      return i;
    }
  }

  return -1;
}

const userInput = prompt("On dois rechercher quoi ?", "");

let foundAt = MyIndexOf(userInput, tab);

if (foundAt > -1) {
  console.log(`${userInput} trouver à l'index ${foundAt}`);
} else {
  console.log(`${userInput} pas trouver :(`);
}
