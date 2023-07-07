
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





// Fonction pour gérer l'importation d'image pour une div spécifique
function gererImportationImage(idBouton, idDiv, cleStockage) {
    var boutonImportation = document.getElementById(idBouton);
    var divEmporter = document.getElementById(idDiv);

    var imageStockee = localStorage.getItem(cleStockage);
    if (imageStockee) {
        var image = document.createElement('img');
        image.src = imageStockee;

        divEmporter.appendChild(image);
    }

    boutonImportation.addEventListener('click', function () {
        var inputFichier = document.createElement('input');
        inputFichier.type = 'file';

        inputFichier.addEventListener('change', function () {
            var fichier = inputFichier.files[0];
            var lecteurFichier = new FileReader();

            lecteurFichier.addEventListener('load', function () {
                var image = document.createElement('img');
                image.src = lecteurFichier.result;

                while (divEmporter.firstChild) {
                    divEmporter.removeChild(divEmporter.firstChild);
                }

                divEmporter.appendChild(image);

                localStorage.setItem(cleStockage, lecteurFichier.result);
            });

            lecteurFichier.readAsDataURL(fichier);
        });

        inputFichier.click();
    });
}

// Appelle la fonction pour gérer l'importation d'image pour la première div
gererImportationImage('bouton-importer1', 'emporter', 'imageSelectionnee1');

// Appelle la fonction pour gérer l'importation d'image pour la deuxième div
gererImportationImage('bouton-importer2', 'carte', 'imageSelectionnee2');














