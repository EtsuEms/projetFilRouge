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