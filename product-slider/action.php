<?php

$name = $_GET['seat'];

if (isset($_GET['seat'])) {
    echo "You chose the following seat(s): <br>";

    foreach ($name as $seat){
        echo $seat."<br />";
    }
} else {
    echo "You did not choose a seat.";
}


?>