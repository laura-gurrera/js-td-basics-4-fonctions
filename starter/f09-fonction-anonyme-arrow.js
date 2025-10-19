/*****************************
* 020 - Fonctions - Préalable
*/

// 6. FONCTION ANONYME

// 2°) ES6 : fonction fléchée (fat arrow function)
// = une autre syntaxe pour la déclaration d'une fonction anonyme

/* RAPPEL : fonction anonyme sous forme d'expression de fonction :
  const bonjour = function(prenom) {
    return 'Bonjour, ' + prenom + ' !';
  }
*/

/* EXERCICE 1 :
- Déclarez la fonction ci-dessus en utilisant la syntaxe "fat arrow function"
- Utilisez-la pour saluer Thomas dans la console
*/

// Fonction anonyme avec la syntaxe "fat arrow function"

// const bonjour = (prenom) => {
//     return 'Bonjour, ' + prenom + ' !';
// }

// Utilisation de la fonction pour saluer Thomas dans la console

// console.log(bonjour('Thomas'));

/*
N.B. Dans certains cas particuliers, on peut simplifier la syntaxe des fonctions fléchées :
- Quand le corps de la fonction se limite à une seule ligne,
	on peut écrire son résultat sans créer de blocs de code avec des accolades.
	Dans ce cas, l'instruction  return  est implicite.
- Quand la fonction n'a qu'un seul argument, on peut omettre les parenthèses autour de celui-ci.
*/

/* EXERCICE 2 :
- Déclarez cette même fonction en utilisant la syntaxe simplifiée
- Utilisez-la pour saluer Thomas dans la console
*/

// Fonction anonyme avec la syntaxe simplifiée

const bonjour = (prenom) => 'Bonjour, ' + prenom + ' !';

// Utilisation de la fonction pour saluer Thomas dans la console

console.log(bonjour('Thomas'));