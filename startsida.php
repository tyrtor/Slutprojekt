
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                <label for="namn">Namn</label>
                <input name="namn" type="text" required>
    
                <label for="rubrik">Rubrik</label>
                <input name="rubrik" type="text" required>
    
                <label for="inlägg">Inlägg</label>
                <input name="inlägg" type="text" required>
    
                <button>Skicka</button>
            </form>
            <!-- importera till databasen -->
            <?php
                $inlagg = filter_input(INPUT_POST, 'inlägg', FILTER_SANITIZE_STRING);
                $namn = filter_input(INPUT_POST, 'namn', FILTER_SANITIZE_STRING);
                $rubrik = filter_input(INPUT_POST, 'rubrik', FILTER_SANITIZE_STRING);

                /* logga in på mysql-servern och välj databas */
                $conn = new mysqli($host, $användare, $lösenord, $databas);

                /* Gick det att ansluta? */
                if ($conn->connect_error) {
                    die("Kunde inte ansluta till databasen: " . $conn->connect_error);
                }

                if ($namn && $inlagg && $namn) {

                    $datum = date("Y/m/d");

                    /* SQL??? */
                    $sql = "INSERT INTO spelforumet (id, inlägg, namn, datum, rubrik) VALUES (NULL, '$inlagg', '$namn', '$datum', '$rubrik');";

                    /* kör sql fråga */
                    $resultat = $conn->query($sql);

                    /* gick det bra */
                    if (!$resultat) {
                        die("Det gick åt piparn");
                    } else {
                        echo"<p>inlägget har sparats</p>";
                    }
                    

                }else {
                    echo "<p>Fyll i alla rutor</p>";
                }
            
                /* läsa av det som står i databasen */
            

                /* Gick det att ansluta? */
                if ($conn->connect_error) {
                    die("Kunde inte ansluta till databasen: " . $conn->connect_error);
                }

                /* SQL??? */
                $sql = "SELECT * FROM spelforumet";
                $resultat = $conn->query($sql);

                foreach ($rad as $rader) {
                    echo"<div>";
                    echo"<p>$inlägg</p>";
                    echo"</div>";
                }

                /* stäng ner anslutingnen */
                $conn->close();
            
            ?>
        </div>
    </div>
    <script src="./pong.js"></script>
</body>
</html>
