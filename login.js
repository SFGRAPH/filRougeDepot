window.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // ecoute evenement submit

        
        var email = document.querySelector('#email').value;
        var password = document.querySelector('#password').value;

        // verification email et messages d'erreur
        if (email.trim() === '' || password.trim() === '') {
            alert('Veuillez remplir tous les champs'); 
        } else if (email !== 'stephanefernez@gmail.com' || password !== '1234') {
            alert('Identifiant ou mot de passe incorrect'); 
        } else {
            window.location.href = 'back-office.html'; // apres validation ouverture page back-office
        }
    });
});


