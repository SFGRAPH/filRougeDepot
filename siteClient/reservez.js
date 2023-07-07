

// Récupérer les éléments <input> et la <div> cible
const inputDej = document.querySelector('#dej');
const inputDin = document.querySelector('#din');
const heureDiv = document.querySelector('#heureDiv');
let heureSelectionnee;
let boutonSelectionne;

// Fonction pour générer les boutons d'heure
function genererBoutonsHeure(debutHeure, finHeure) {
    // Effacer le contenu précédent de la <div>
    heureDiv.innerHTML = '';

    // Générer les boutons de sélection d'heure
    for (let heure = debutHeure; heure <= finHeure; heure++) {
        for (let minute = 0; minute <= 30; minute += 30) {
            const boutonHeure = document.createElement('button');
            boutonHeure.textContent = `${heure}:${minute === 0 ? '00' : '30'}`;
            boutonHeure.type = 'button'; // Définir le type de bouton sur 'button'

            // Ajouter un gestionnaire d'événements au bouton
            boutonHeure.addEventListener('click', function () {
                if (boutonSelectionne) {
                    // Réinitialiser le style du bouton précédemment sélectionné
                    boutonSelectionne.style.backgroundColor = '';
                    boutonSelectionne.style.color = '';
                    boutonSelectionne.style.border = '';
                }
                heureSelectionnee = boutonHeure.textContent;
                boutonHeure.style.backgroundColor = 'black';
                boutonHeure.style.color = 'white';
                boutonHeure.style.border = '2px solid white';
                boutonSelectionne = boutonHeure;
                console.log(heureSelectionnee); // Utilisez la valeur de l'heure sélectionnée selon vos besoins
            });

            // Ajouter les boutons à la <div>
            heureDiv.appendChild(boutonHeure);
        }
    }
}

// Écouter l'événement de clic sur l'élément <input> pour le déjeuner
inputDej.addEventListener('change', function () {
    if (inputDej.checked) {
        inputDin.checked = false; // Désactiver l'autre élément
        genererBoutonsHeure(11, 14);
    } else {
        // Effacer le contenu de la <div> si le bouton n'est pas sélectionné
        heureDiv.innerHTML = '';
    }
});

// Écouter l'événement de clic sur l'élément <input> pour le dîner
inputDin.addEventListener('change', function () {
    if (inputDin.checked) {
        inputDej.checked = false; // Désactiver l'autre élément
        genererBoutonsHeure(18, 22);
    } else {
        // Effacer le contenu de la <div> si le bouton n'est pas sélectionné
        heureDiv.innerHTML = '';
    }
});

// Récupérer le formulaire
const formulaire = document.querySelector('form');

// Écouter l'événement "submit" du formulaire
formulaire.addEventListener('submit', function (event) {
    // Empêcher la soumission du formulaire par défaut
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const nbrCouvert = document.getElementById('nbrCouvert').value;
    const selectDate = document.getElementById('selectDate').value;

    if (nbrCouvert && selectDate && heureSelectionnee) {
        // Stocker les valeurs dans sessionStorage
        sessionStorage.setItem('nbrCouvert', nbrCouvert);
        sessionStorage.setItem('selectDate', selectDate);
        sessionStorage.setItem('heureSelectionnee', heureSelectionnee);

        // Rediriger vers la nouvelle page
        window.location.href = 'enregistrementResa.html';
    } else {
        // Afficher un message d'erreur si les champs ne sont pas remplis
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});



