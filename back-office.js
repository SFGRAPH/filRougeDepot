
const divDate = document.getElementById('date');

// Crée un nouvel objet Date pour obtenir la date actuelle
const date = new Date();

// Obtient les composants de la date
const jour = date.getDate();
const mois = date.getMonth() + 1; // Les mois commencent à partir de zéro, donc on ajoute 1
const annee = date.getFullYear();

// Formatte la date
const dateFormatee = 'Nous sommes le ' + ('0' + jour).slice(-2) + '/' + ('0' + mois).slice(-2) + '/' + annee;

// Insère la date formatée dans le contenu de la div
divDate.textContent = dateFormatee;





// Récupère le bouton de réservation
const boutonReserver = document.getElementById('reservation');

//vérifier si le bouton a déjà été cliqué
let boutonClique = false;

// Ajoute un écouteur d'événement lors du clic sur le bouton
boutonReserver.addEventListener('click', function (event) {
    // Empêche le comportement par défaut du bouton
    event.preventDefault();

    // Vérifie si le bouton a déjà été cliqué
    if (boutonClique) {
        alert('Vous avez déjà actualisé vos réservations en attente. Veuillez rafraîchir la page.');
    } else {
        // Change la couleur du texte au premier clic
        boutonReserver.style.color = 'red';

        // Met à jour le l'ecouteur d'évenement pour indiquer que le bouton a été cliqué
        boutonClique = true;

        // Récupère la div de réservation en attente
        const divResaAttente = document.getElementById('resaAttente');

        // Crée un tableau
        const tableau = document.createElement('table');
        tableau.classList.add('reservation-table');

        // Crée une ligne d'en-tête
        const enTete = tableau.createTHead().insertRow();
        enTete.innerHTML = '<th>Nom</th><th>Nbr de pers.</th><th>Date et heure <br> Pref.</th><th>Mail</th><th></th>';

        // Ajoute plusieurs lignes pour les informations de réservation
        for (let i = 0; i < 8; i++) { // Afficher plusieurs lignes 
            const ligneReservation = tableau.insertRow();
            const colonneNom = ligneReservation.insertCell();
            colonneNom.textContent = 'John Doe'; //nom de la personne
            const colonneNbPers = ligneReservation.insertCell();
            colonneNbPers.textContent = '4'; //le nombre de personnes
            const colonneDateHeure = ligneReservation.insertCell();
            colonneDateHeure.textContent = '10/07/2023 19:30 Terrasse'; //la date, l'heure,la préférence
            const colonneMail = ligneReservation.insertCell();
            const lienMail = document.createElement('a');
            lienMail.href = 'mailto:John.dDoe@example.com'; //l'adresse e-mail 
            lienMail.textContent = 'Envoyer un mail';
            lienMail.style.width = '60px';
            lienMail.style.height = '30px';
            lienMail.style.fontSize = '14px';
            lienMail.style.textAlign = 'center';
            colonneMail.appendChild(lienMail);
            const colonneSubmit = ligneReservation.insertCell();
            const boutonSubmit = document.createElement('input');
            boutonSubmit.type = 'submit';
            boutonSubmit.value = 'confirmer';
            boutonSubmit.style.width = '70px';
            boutonSubmit.style.height = '40px';
            boutonSubmit.style.fontSize = '13px';
            boutonSubmit.style.textAlign = 'center';
            boutonSubmit.style.fontFamily = 'arial,sans serif';
            boutonSubmit.style.borderRadius = '5px';
            colonneSubmit.appendChild(boutonSubmit);
        }

        // Ajoute le tableau à la div de réservation en attente
        divResaAttente.appendChild(tableau);
    }
});




// Récupérer l'élément input #ajoutResa
const ajoutResa = document.querySelector('#ajoutResa');

// Ajouter un gestionnaire d'événements au clic
ajoutResa.addEventListener('click', () => {
    // Ouvrir la page ajoutResa.html dans une nouvelle fenêtre ou un nouvel onglet
    window.open('ajoutResa.html');
});




