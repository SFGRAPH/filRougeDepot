<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $nom = $_POST["Nom"];
    $prenom = $_POST["Prenom"];
    $date = $_POST["Date"];
    $heure = $_POST["Heure"];
    $phone = $_POST["Phone"];
    $couverts = $_POST["Couverts"];
    $emplacement = $_POST["Emplacement"];

    // Créer une ligne de données
    $donnees = array(
        "Email" => $email, 
        "Nom" => $nom, 
        "Prénom" => $prenom, 
        "Date" => $date, 
        "Heure" => $heure,
        "Phone" => $phone,
        "Couverts" => $couverts,
        "Emplacement" => $emplacement
    );

    // Vérifier si le tableau de session existe
    if (!isset($_SESSION["donnees"])) {
        $_SESSION["donnees"] = array();
    }

    // Ajouter les données au tableau de session
    $_SESSION["donnees"][] = $donnees;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin_reservation.css">
    <title>Liste des réservations Clients</title>
</head>
<body>

    <div class="message">
            <p class="Bienvenue">Bonjour l'equipe Mama Betty !!&nbsp; </p>
            <div id="date"></div>
        </div>

    <div id="date"></div>

    <h1>Tableau des réservations en attente</h1>
    
    <form action="admin_resavalide.php" method="post">
        <table border="2">
            <tr>
                <th>Email</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Téléphone</th>
                <th>Nbr de couverts</th>
                <th>Date</th>
                <th>Heure</th>
                <th>Préférence</th>
                <th>Validation</th>
            </tr>
            
            <?php
            if (isset($_SESSION["donnees"])) {
                foreach ($_SESSION["donnees"] as $index => $donnees) {
                    $dateObj = new DateTime($donnees["Date"]);
                    echo "<tr>";
                    echo "<td>".$donnees["Email"]."</td>";
                    echo "<td>".$donnees["Nom"]."</td>";
                    echo "<td>".$donnees["Prénom"]."</td>";
                    echo "<td>".$donnees["Phone"]."</td>";
                    echo "<td>".$donnees["Couverts"]."</td>";
                    echo "<td>".$dateObj->format('d-m-Y')."</td>";
                    echo "<td>".$donnees["Heure"]."</td>";
                    echo "<td>".$donnees["Emplacement"]."</td>";
                    echo "<td><input type='checkbox' name='validation[]' value='$index'></td>";
                    echo "</tr>";
                }
            }
            ?>
        </table>
        <br><br>
        <input type="submit" value="Valider les réservations sélectionnées" >
    </form>


    <script src="site_MB_dev/back-office.js"></script>
</body>
</html>
