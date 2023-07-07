
const divDate = document.getElementById('date');

// Crée un nouvel objet Date pour obtenir la date actuelle
const date = new Date();

// Obtient les composants de la date
const jour = date.getDate();
const mois = date.getMonth() + 1; // Les mois commencent à partir de zéro, donc on ajoute 1
const annee = date.getFullYear();

// Formatte la date
const dateFormatee = 'le ' + ('0' + jour).slice(-2) + '/' + ('0' + mois).slice(-2) + '/' + annee;

// Insère la date formatée dans le contenu de la div
divDate.textContent = dateFormatee;





// Récupère le bouton d'importation d'image
var importerImage = document.getElementById('bouton-importer');

// Récupère la div avec l'ID "formule"
var divFormule = document.getElementById('formule');

// Vérifie s'il y a une image précédemment sélectionnée stockée en tant que donnée locale
var imageStockee = localStorage.getItem('imageSelectionnee');
if (imageStockee) {
    // Crée un élément d'image
    var image = document.createElement('img');
    image.src = imageStockee; // Définit la source de l'image comme l'image stockée

    // Ajoute l'image à la div "formule"
    divFormule.appendChild(image);
}

// Ajoute un écouteur d'événement pour détecter lorsque le bouton est cliqué
importerImage.addEventListener('click', function () {
    // Crée un input de type file (pour l'importation de fichiers)
    var inputFichier = document.createElement('input');
    inputFichier.type = 'file';

    // Ajoute un écouteur d'événement pour détecter lorsque l'utilisateur sélectionne un fichier
    inputFichier.addEventListener('change', function () {
        var fichier = inputFichier.files[0]; // Récupère le fichier sélectionné

        // Crée un objet FileReader pour lire le contenu du fichier
        var lecteurFichier = new FileReader();

        // Ajoute un écouteur d'événement pour détecter lorsque le contenu du fichier est chargé
        lecteurFichier.addEventListener('load', function () {
            // Crée un élément d'image
            var image = document.createElement('img');
            image.src = lecteurFichier.result; // Définit la source de l'image comme le contenu du fichier

            // Supprime tous les enfants de la div "formule" (au cas où il y aurait déjà une image)
            while (divFormule.firstChild) {
                divFormule.removeChild(divFormule.firstChild);
            }

            // Ajoute l'image à la div "formule"
            divFormule.appendChild(image);

            // Stocke l'image sélectionnée en tant que donnée locale
            localStorage.setItem('imageSelectionnee', lecteurFichier.result);
        });

        // Lit le contenu du fichier en tant que URL de données (base64)
        lecteurFichier.readAsDataURL(fichier);
    });

    // Déclenche un clic sur l'input de fichier
    inputFichier.click();
});




