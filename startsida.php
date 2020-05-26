
<?php
/**
* PHP version 7
* @category   Spelforumet
* @author     Emil Linder <emil@familjenlinder.se>
* @license    PHP CC
*/
include_once "./konfig-db.php";
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Spelforumet</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Pong</h1>
    <div class="kontainer">
        <canvas></canvas>
        <div>
            <form method="POST">
                <label for="namn">Namn</label>
                <input name="namn" type="text">
    
                <label for="rubrik">Rubrik</label>
                <input name="rubrik" type="text">
    
                <label for="inlägg">Inlägg</label>
                <input name="inlägg" type="text">
    
                <button>Skicka</button>
            </form>
            <?php
                $inlagg = filter_input(INPUT_POST, 'inlägg', FILTER_SANITIZE_STRING);
                $rubrik = filter_input(INPUT_POST, 'rubrik', FILTER_SANITIZE_STRING);

                /* logga in på mysql-servern och välj databas */
                $conn = new mysqli($host, $användare, $lösenord, $databas);

                /* Gick det att ansluta? */
                if ($conn->connect_error) {
                    die("Kunde inte ansluta till databasen: " . $conn->connect_error);
                }

                /* SQL??? */
                $sql = "INSERT INTO spelforumet set inlägg='$inlagg', rubrik='$rubrik'";

                /* kör sql fråga */
                $resultat = $conn->query($sql);

                if ($resultat) {

                    /* returnera id på registrerade posten i tabellen */
                    return $conn->insert_id;
                }

                /* stäng ner anslutingnen */
                $conn->close();
            ?>
        </div>
    </div>
    <script src="./pong.js"></script>
</body>
</html>
