<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$host = "localhost";
$databas = "Emil";
$användare = "Emil";
$lösenord = "uc2jPmA2jZHijOVT";

// Anslut till databasen
$conn = new mysqli($host, $användare, $lösenord, $databas);

// Om någonting går fel. Avsluta och skriv ett felmeddelandet
if ($conn->connect_error) {
    die("Kunde inte ansluta till databasen: " . $conn->connect_error);
} else {
    //echo "Anslutning till databasen OK!";
}
