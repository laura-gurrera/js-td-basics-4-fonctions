/*****************************
 * 020 - Fonctions - Préalable
 */

// 2. FONCTION SANS PARAMÈTRE MAIS AVEC UN RETURN 

// 4°) Utilité du RETURN :

/*
On peut voir le RETURN comme un MOYEN DE COMMUNICATION entre la fonction
et le reste du programme :
L'INSTRUCTION RETURN EST UN MOYEN DE FAIRE SORTIR UNE DONNÉE D'UNE FONCTION
=> cela permet, par exemple, de récupérer le résultat d'une fonction
pour le réutiliser dans une autre fonction
*/

// EXERCICE :
// Créez deux fonctions :
// - une fonction calcule1() qui
//   - stocke dans une variable resultat1 le résultat de 2 + 3
//   - affiche dans la console "Dans calcule1 : resultat1 =  "
//   - retourne resultat1
// - une fonction calcule2() qui
//   - stocke dans une variable resultat2 le double de resultat1
//   - affiche dans la console "Dans calcule2 : resultat2 =  "
// Exécutez les deux fonctions

// 1°) Créez la fonction calcule1

function calcule1(){
    const resultat1=2+3;
    console.log('Dans calcule1 : resultat1 = ' +resultat1);
    return resultat1;
}

// 2°) Créez la fonction calcule2
function calcule2(){
    const resultat2= calcule1()*2;
    console.log('Dans calcule2 : resultat2 = ' + resultat2);
}

// 3°) Appelez les fonctions calcule1() et calcule2() pour exécuter les calculs et afficher les résultats dans la console

calcule2();