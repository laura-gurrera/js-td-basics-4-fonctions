/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(year){
    if((!isNaN(year)) && year>0){
        return (!((year%100===0 && !(year%400===0)) || year%4!==0));
    }
}

// Fonction pour vérifier si une date est valide

let maxDays;
function isValid(day, month, year){

    switch (month){
        case 'janvier':
        case 'mars':
        case 'mai':
        case 'juillet':
        case 'août':
        case 'octobre':
        case 'decembre':
            maxDays=31;
            break;
        case 'avril':
        case 'juin':
        case 'septembre':
        case 'novembre':
            maxDays=30;
            break;
        case 'février':
            maxDays= isBissextile(year)? 29 : 28;
            break;
    }
    (day>0 && day<=maxDays)? console.log(`Le ${day} ${month} ${year} est une date valide`) : console.log(`Le ${day} ${month} ${year} n'est pas une date valide`);
}

// Demander à l'utilisateur de saisir une date
let jour= parseInt(prompt('Veillez entrez une date pour savoir si elle est valide ou pas. ' +
    'Entrez ici le jour (ex: 19) : '));
let mois= prompt('Veillez entrez une date pour savoir si elle est valide ou pas. ' +
    'Entrez ici le mois (ex: octobre) : ');
let annee= parseInt(prompt('Veillez entrez une date pour savoir si elle est valide ou pas. ' +
    'Entrez ici l’année (ex: 2025) : '));

// Utilisation de la fonction isValid pour vérifier la date

isValid(jour,mois,annee);