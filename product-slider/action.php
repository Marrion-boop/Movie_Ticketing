<?php

$name = $_GET['seat'];
$count =0;
if (isset($_GET['seat'])) {
    echo "You chose the following seat(s): <br>";
    for($i=0;$i<count($_GET['seat']);$i++){$count++;}
    echo "You have $count tickets";
    foreach ($name as $seat){
        echo $seat."<br />";
    }
} else {
    echo "You did not choose a seat.";
}
if (isset($_GET['cinema_room'])) {echo $_GET['cinema_room'];}
else {
    echo "You did not choose a Cinema Room.";
}

if (isset($_GET['time_slot'])) {echo $_GET['time_slot'];}
else {
    echo "You did not choose a Time slot.";
}

if (isset($_GET['movie'])) {echo $_GET['movie'];}
else {
    echo "You did not choose a Movie.";
}

?>