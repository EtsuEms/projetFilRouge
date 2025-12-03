// =============================================================
// Exercice 1
// =============================================================
console.log("----- Correction Exercice 1 -----");


// - Créer une variable pour le nom de la boutique
let shopName = "JavaShop";
// - Créer une variable pour la ville
let city = "Paris";
// - Créer une variable booléenne pour savoir si la boutique est ouverte
let isOpen = false;
// - Créer une variable pour le nombre de produits
let productCount = 34;
// - Créer une variable pour le slogan
const slogan = "Everything JavaScript, Everyone culprit!";

// - Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)
console.log("Bienvenue dans la boutique " + shopName);


// - Afficher le slogan dans la console
console.log(slogan);


// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)
if (isOpen==true) {
    console.log("La boutique est ouverte");
} else {
    console.log("La boutique est fermée");
}



// =============================================================
// Exercice 2
// =============================================================
console.log("----- EXERCICE 2 -----");

// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
    let message1 = "Bienvenue dans la boutique" + " " + shopName;


// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
    let message2 = `Bienvenue dans la boutique ${shopName}`;


// - Calculer la longueur du slogan
    let longueur = slogan.length;
    

// - Créer une version en majuscules du slogan
    let sloganMaj = slogan.toUpperCase();


// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
    let sloganRemplace = slogan.replace("culprit", "please stand up");


// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
console.log(message1);
console.log(message2);
console.log(longueur);
console.log(sloganMaj);
console.log(sloganRemplace);



// =============================================================
// Exercice 3
// =============================================================
console.log("----- EXERCICE 3 -----");

// - Créer une variable contenant un prix HT d’exemple
let prixHT = 1298;


// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)
const VAT = 0.2;


// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)
let prixTTC = prixHT + (prixHT*VAT);


// - Afficher le prix HT et le prix TTC dans la console
console.log(`Prix HT : ${prixHT} €`);
console.log(`Prix TTC : ${prixTTC} €`);


// - Créer une variable pour compter le nombre de ventes
//   (commencer à 0)
let salesCount = 0;



// - Simuler une nouvelle vente en augmentant ce compteur
//   (indice : utiliser l’opérateur pour ajouter 1)
salesCount++;


// - Afficher la nouvelle valeur du compteur dans la console
console.log(`Nombre de ventes : ${salesCount}`);