<?php
session_start();

$donneesPasses = [];
$donneesDuJour = [];
$donneesAVenir = [];


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["validation"])) {
    $reservations = $_SESSION["donnees"];

    foreach ($_POST["validation"] as $index) {
        $reservation = $reservations[$index];
        $dateObj = new DateTime($reservation["Date"] . " " . $reservation["Heure"]);
        $maintenant = new DateTime();

        if ($dateObj < $maintenant) {
            // Date passée
            $donneesPasses[] = $reservation;
        } elseif ($dateObj->format('Y-m-d') === $maintenant->format('Y-m-d')) {
            // Date du jour
            $donneesDuJour[] = $reservation;
        } else {
            // Date à venir
            $donneesAVenir[] = $reservation;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Résultats des réservations</title>
</head>
<body>

<h1>Réservations passées</h1>
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
    </tr>
    <?php
    foreach ($donneesPasses as $reservation) {
        $dateObj = new DateTime($reservation["Date"]);
        echo "<tr>";
        echo "<td>".$reservation["Email"]."</td>";
        echo "<td>".$reservation["Nom"]."</td>";
        echo "<td>".$reservation["Prénom"]."</td>";
        echo "<td>".$reservation["Phone"]."</td>";
        echo "<td>".$reservation["Couverts"]."</td>";
        echo "<td>".$dateObj->format('d-m-Y')."</td>";
        echo "<td>".$reservation["Heure"]."</td>";
        echo "<td>".$reservation["Emplacement"]."</td>";
        echo "</tr>";
    }
    ?>
</table>

<h1>Aujourd'Hui :</h1>
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
    </tr>
    <?php
    foreach ($donneesDuJour as $reservation) {
        $dateObj = new DateTime($reservation["Date"]);
        echo "<tr>";
        echo "<td>".$reservation["Email"]."</td>";
        echo "<td>".$reservation["Nom"]."</td>";
        echo "<td>".$reservation["Prénom"]."</td>";
        echo "<td>".$reservation["Phone"]."</td>";
        echo "<td>".$reservation["Couverts"]."</td>";
        echo "<td>".$dateObj->format('d-m-Y')."</td>";
        echo "<td>".$reservation["Heure"]."</td>";
        echo "<td>".$reservation["Emplacement"]."</td>";
        echo "</tr>";
    }
    ?>
</table>

<h1>Réservations à venir</h1>
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
    </tr>
    <?php
    foreach ($donneesAVenir as $reservation) {
        $dateObj = new DateTime($reservation["Date"]);
        echo "<tr>";
        echo "<td>".$reservation["Email"]."</td>";
        echo "<td>".$reservation["Nom"]."</td>";
        echo "<td>".$reservation["Prénom"]."</td>";
        echo "<td>".$reservation["Phone"]."</td>";
        echo "<td>".$reservation["Couverts"]."</td>";
        echo "<td>".$dateObj->format('d-m-Y')."</td>";
        echo "<td>".$reservation["Heure"]."</td>";
        echo "<td>".$reservation["Emplacement"]."</td>";
        echo "</tr>";
    }
    ?>
</table>

</body>
</html>
