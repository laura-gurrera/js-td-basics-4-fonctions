/*****************************
* 020 - Fonctions - Préalable
*/

// 5. PASSAGE DE PARAMÈTRE : FONCTION AVEC PARAMÈTRE ET AVEC RETURN

/* EXERCICE :
1. Déclarez une fonction appelée direBonjour qui
   - prend comme paramètre le prenom
   - déclare une variable message contenant "Bonjour   !"
   - retourne cette variable message
2. Affichez dans la console bonjour à
   a) "Baptiste"
   b) "Sophie"
*/

function direBonjour(prenom){
    return 'Bonjour ' + prenom;
}
console.log(direBonjour('Baptiste'));

// RETURN, PORTÉE DE VARIABLE, PARAMÈTRE - RÉSUMÉ GLOBAL :
/*
Le RETURN, la VARIABLE GLOBALE et le PARAMÈTRE sont
les trois MOYENS DE COMMUNICATION d'une fonction avec le reste du code :
  - L'instruction RETURN pour FAIRE SORTIR UNE DONNÉE D'UNE FONCTION
  - La VARIABLE GLOBALE pour PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS
	  (rendre une info disponible partout)
  - Le PASSAGE DE PARAMÈTRE pour FAIRE ENTRER UNE DONNÉE DANS UNE FONCTION
*/
