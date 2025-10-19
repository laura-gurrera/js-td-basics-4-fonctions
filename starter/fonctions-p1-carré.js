/*
FONCTIONS - PRÉPA 1 : Le carré d'un nombre
1. a) Déclarez la fonction carre1() avec la syntaxe normale
      pour qu'elle calcule et renvoie le carré du nombre passé en paramètre
   b) Utilisez ensuite cette fonction pour afficher dans la console
	  - le carré de 0
	  - le carré de 2
	  - le carré de 5
2. a) Déclarez la fonction carre2() avec la syntaxe d'une arrow fonction (ES6)
      pour qu'elle calcule et renvoie le carré du nombre passé en paramètre
   b) Utilisez ensuite cette fonction pour afficher dans la console
	  - le carré de 0
	  - le carré de 2
	  - le carré de 5
*/

// Déclarer carre1 pour qu'elle retourne le carré de x

function carre1(x){
    return x*x;
}

// Calculer le carré de 0, 2 et 5 en utilisant carre1

console.log(carre1(5));

// Déclarer carre2 (en utilisant une fonction fléchée) pour qu'elle retourne le carré de x

const carre2=(x)=>x*x;

// Calculer le carré de 0, 2 et 5 en utilisant carre2

console.log(carre2(5));
