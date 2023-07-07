
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




// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer l'élément div #resaContainer
    const resaContainer = document.querySelector('#resaContainer');

    // Créer l'élément de formulaire
    const formulaire = document.createElement('form');

    // Créer les éléments de formulaire

    const dateInput = document.createElement('input');
    dateInput.type ='date';
    dateInput.placeholder = 'date';


    const nomInput = document.createElement('input');
    nomInput.type = 'text';
    nomInput.placeholder = 'Nom';

    const prenomInput = document.createElement('input');
    prenomInput.type = 'text';
    prenomInput.placeholder = 'Prénom';

    const telephoneInput = document.createElement('input');
    telephoneInput.type = 'tel';
    telephoneInput.placeholder = 'Téléphone';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'E-mail';

    const select = document.createElement('select');
    const optionBase = document.createElement('option');
    optionBase.textContent = '-';
    const optionInterieur = document.createElement('option');
    optionInterieur.textContent = 'Intérieur';
    const optionTerrasse = document.createElement('option');
    optionTerrasse.textContent = 'Terrasse';

    const submitInput = document.createElement('input');
    submitInput.classList.add('bouton');
    submitInput.type = 'submit';
    submitInput.value = 'Valider';

    // Ajouter les éléments au formulaire
    formulaire.appendChild(dateInput);
    formulaire.appendChild(nomInput);
    formulaire.appendChild(prenomInput);
    formulaire.appendChild(telephoneInput);
    formulaire.appendChild(emailInput);
    select.appendChild(optionBase);
    select.appendChild(optionInterieur);
    select.appendChild(optionTerrasse);
    formulaire.appendChild(select);
    formulaire.appendChild(submitInput);

    // Ajouter le formulaire à #resaContainer
    resaContainer.appendChild(formulaire);

    // Gestionnaire d'événements pour la soumission du formulaire
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêcher la soumission par défaut

        // Vérifier si tous les champs sont saisis
        if (
            nomInput.value.trim() === '' ||
            prenomInput.value.trim() === '' ||
            telephoneInput.value.trim() === '' ||
            emailInput.value.trim() === ''
        ) {
            // Afficher un message d'erreur
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }

        // Vérifier si le téléphone est un numéro valide
        const phoneNumber = telephoneInput.value.trim();
        if (!isValidPhoneNumber(phoneNumber)) {
            // Afficher un message d'erreur pour le téléphone
            alert('Veuillez saisir un numéro de téléphone valide.');
            return;
        }

        // Vérifier si l'e-mail est bien saisi
        const email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            // Afficher un message d'erreur pour l'e-mail
            alert('Veuillez saisir une adresse e-mail valide.');
            return;
        }

        // Soumission du formulaire si les champs sont valides
        formulaire.submit();
    });

    // Fonction pour valider un numéro de téléphone (format: 10 chiffres)
    function isValidPhoneNumber(number) {
        const phoneNumberRegex = /^\d{10}$/;
        return phoneNumberRegex.test(number);
    }

    // Fonction pour valider une adresse e-mail
    function isValidEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }
});

