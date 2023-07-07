
document.addEventListener('DOMContentLoaded', function () {
    // Récupération des éléments HTML
    const inputAcceptation = document.getElementById('acceptation');
    const buttonSoumettre = document.getElementById('soumettre');

    // Écouteur d'événement pour le clic sur l'input radio
    inputAcceptation.addEventListener('click', function () {
        // Activation/désactivation du bouton en fonction de l'état de l'input radio
        buttonSoumettre.disabled = !inputAcceptation.checked;

        // Activation/désactivation du style au survol du bouton
        if (inputAcceptation.checked) {
            buttonSoumettre.classList.remove('disable-hover');
        } else {
            buttonSoumettre.classList.add('disable-hover');
        }
    });

    // Désactivation du style au survol initial si l'input "acceptation" n'est pas coché
    if (!inputAcceptation.checked) {
        buttonSoumettre.classList.add('disable-hover');
    }

    // Écouteur d'événement pour le clic sur le bouton soumettre
    buttonSoumettre.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Vérification des champs obligatoires avant de soumettre le formulaire
        const nom = document.getElementById('name').value;
        const prenom = document.getElementById('firstName').value;
        const telephone = document.getElementById('phone').value;
        const email = document.getElementById('mail').value;
        const preferences = document.getElementById('pref').value;

        if (nom === '' || prenom === '' || telephone === '' || email === '' || preferences === '') {
            // Affichage du message d'erreur
            const divResultat = document.getElementById('resultat');
            divResultat.innerHTML = '<p>Tous les champs doivent être remplis.</p>';
        } else {
            // Soumission du formulaire si tous les champs sont remplis
            const divResa = document.getElementById('resa');
            const contenuResa = divResa.innerHTML;

            const acceptation = inputAcceptation.checked ? 'Accepté' : 'Non accepté';

            // Construction du contenu à afficher dans la div de résultat
            const contenuResultat = `
                <p>Votre réservation à bien été pris en compte
                <div class="resa-content">${contenuResa}</div>
                <p>Nom: ${nom}</p>
                <p>Prénom: ${prenom}</p>
                <p>Téléphone: ${telephone}</p>
                <p>Email: ${email}</p>
                <p>Préférences: ${preferences}</p>
                <p>Acceptation des C.G.: ${acceptation}</p>
            `;

            // Affichage du contenu dans la div de résultat
            const divResultat = document.getElementById('resultat');
            divResultat.innerHTML = contenuResultat;
        }
    });
});
