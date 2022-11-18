// Dichiarazione variabile nome
const userName = prompt("Inserisci il tuo nome");

document.getElementById('name').innerHTML= userName;

// Dichiarazione variabile cognome
const userLastName = prompt("Inserisci il tuo cognonome");

document.getElementById('lastname').innerHTML= userLastName;

//Dichiarazione variabile colore preferito
const userFavoriteColor = prompt("Inserisci il tuo colore preferito");

document.getElementById('favorite-color').innerHTML= userFavoriteColor;

//Viasulizzazione delle variabili nella console

console.log(userName, userLastName, userFavoriteColor);

//Dichiarazione variabile password

const userPassword = userName + userLastName + userFavoriteColor + 22;

document.getElementById('password').innerHTML= userPassword;