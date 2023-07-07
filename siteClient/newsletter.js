// Sélection de la div de validation
var validationDiv = document.getElementById('validationInscription');

// Sélection du formulaire
var formulaire = document.querySelector('form');

// Écouteur d'événement pour la soumission du formulaire
formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Vérification des champs
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('e-mail').value;

    if (nom && prenom && email) {
        // Affichage du message de validation
        validationDiv.textContent = 'Votre inscription a bien été prise en compte.';
    } else {
        // Affichage du message d'erreur
        validationDiv.textContent = 'Veuillez remplir tous les champs du formulaire.';

        validationDiv.classList.add('erreur');
    }

    
});
