/*****************************
 * 020 - Fonctions - Préalable
 */

// 1. FONCTION SANS PARAMÈTRE ET SANS RETURN 

/* RAPPELS :
	1. Déclarer la fonction
	2. Exécuter la fonction
	3. Valeur de retour de la fonction
*/

/*
DÉCLARER la fonction = CRÉER la fonction :
On crée un conteneur qui a un identifiant (le nom de la fonction)
et on y stocke le mode d'emploi (le corps de la fonction, la liste d'instructions qui sont entre les accolades)
=> C'est comme quand on initialise une variable :
	- déclarer une variable = créer un conteneur qui porte un nom pour y stocker une valeur
	- déclarer une fonction = créer un conteneur qui porte un nom et y stocker un mode d'emploi
N.B. La déclaration, à elle toute seule, ne produit aucun résultat visible
	(on a juste enregistré quelque chose dans la mémoire de l'ordinateur,
	on a préparé le terrain : on a défini un mode d'emploi pour pouvoir travailler avec plus tard,
	on a expliqué comment faire quelque chose mais on n'a pas encore donné l'ordre de le faire)
*/

// 1°) a) Déclarer la fonction
function direBonjour() {
    console.log('Bonjour !');
    // À vous de remplir le contenu de cette fonction pour afficher "Bonjour !" dans la console.
}

// 2°) a) Exécuter la fonction (appelez la fonction direBonjour)
direBonjour();
// 3°) a) Stocker le résultat de l'exécution de direBonjour dans une variable resultat
const resultat = direBonjour();

// 3°) b) Donner l'ordre d'afficher le contenu de la variable resultat dans la console

console.log(resultat);