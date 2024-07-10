<?php

function createdb(){ 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "appdevproject";
$checkdb="SHOW DATABASEs LIKE '$dbname'";
$tbname="Movie";
$tbname2="Cinema_Rooms";
$tbname3="Screening";
$tbname4="Room_Seats";
$tbname5="User_ticket";
$checktable="Show Tables like '$tbname'";
$checktable2="Show Tables like '$tbname2'";
$checktable3="Show Tables like '$tbname3'";
$checktable4="Show Tables like '$tbname4'";
$checktable5="Show Tables like '$tbname5'";

$conn = mysqli_connect($servername, $username, $password);
// Check connection
if (!$conn) {
 die("Connection failed: " . mysqli_connect_error());
}

$result=mysqli_query($conn,$checkdb);
if($result->num_rows==0){
$sql = "CREATE DATABASE $dbname";
if (mysqli_query($conn, $sql)) {
 echo "Database created successfully <br>";
} else {
 echo "Error creating database: " . mysqli_error($conn);
}
}

mysqli_close($conn);

// Create connection
$conn1 = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn1->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}
$result2=mysqli_query($conn1,$checktable);
if(mysqli_num_rows($result2)==0){
$sql = "CREATE TABLE $tbname (
    movie_id int(10) not null,
    movie_name VARCHAR(100) NOT NULL,
    release_date Date not null,
    language VARCHAR(200) not null,
    genre VARCHAR(200) not null,
    primary key (movie_id))";
    if ($conn1->query($sql) === TRUE) {
     echo "Table $tbname created successfully<br>";
    } else {
     echo "Error creating table: " . $conn->error;
    }
} 
$result2=mysqli_query($conn1,$checktable2);
if(mysqli_num_rows($result2)==0){
    $sql = "CREATE TABLE $tbname2 (
        room_id int(10) not null,
        room_name VARCHAR(100) NOT NULL,
        primary key (room_id))";
        if ($conn1->query($sql) === TRUE) {
         echo "Table $tbname2 created successfully<br>";
        } else {
         echo "Error creating table: " . $conn->error;
        }
    } 

$result2=mysqli_query($conn1,$checktable3);
    if(mysqli_num_rows($result2)==0){
        $sql = "CREATE TABLE $tbname3 (
            screening_id int(10) not null,
            room_id int(10) not null,
            movie_id int(10) not null,
            date_time datetime NOT NULL,
            language VARCHAR(100) NOT NULL,
            screening_status VARCHAR(100) NOT NULL,
            primary key (screening_id),
            FOREIGN KEY (room_id) REFERENCES $tbname2(room_id),
            FOREIGN KEY (movie_id) REFERENCES $tbname(movie_id))";
            if ($conn1->query($sql) === TRUE) {
             echo "Table $tbname3 created successfully<br>";
            } else {
             echo "Error creating table: " . $conn->error;
            }
        } 
        
    $result2=mysqli_query($conn1,$checktable4);
        if(mysqli_num_rows($result2)==0){
            $sql = "CREATE TABLE $tbname4 (
            seat_id int(10) not null,
            screening_id int(10) NOT NULL,
            seat_price decimal(10,2) NOT NULL,
            seat_name VARCHAR(100) NOT NULL,
            primary key (seat_id),
            FOREIGN KEY (screening_id) REFERENCES $tbname3(screening_id))";
            if ($conn1->query($sql) === TRUE) {
             echo "Table $tbname4 created successfully<br>";
            } else {
            echo "Error creating table: " . $conn->error;
            }
            }

$result2=mysqli_query($conn1,$checktable5);
            if(mysqli_num_rows($result2)==0){
                $sql = "CREATE TABLE $tbname5 (
                ticket_id int (10) not null,
                user_id int(10) not null,
                movie_id int(10) not null,
                screening_id int(10) not null,
                seat_id int(10) not null,
                ticket_status VARCHAR(100) NOT NULL,
                primary key (ticket_id),
                FOREIGN KEY (screening_id) REFERENCES $tbname3(screening_id),
                FOREIGN KEY (movie_id) REFERENCES $tbname(movie_id),
                FOREIGN KEY (seat_id) REFERENCES $tbname4(seat_id))
                ";
                if ($conn1->query($sql) === TRUE) {
                 echo "Table $tbname5 created successfully <br>";
                } else {
                 echo "Error creating table: " . $conn->error;
                }
                }          
$conn1->close();


}?>

<?php
function inserttomovie($movie_id,$movie_name,$release_date,$language,$genre){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appdevproject";
    $tbname="Movie";
    $conn1 = new mysqli($servername, $username, $password, $dbname);
#ADD Date via YYYY-MM-DD
$insert="Insert INTO $tbname 
        values ($movie_id,'$movie_name','$release_date','$language','$genre')";
mysqli_query($conn1,$insert);
$conn1->close();
}

function inserttocinema_rooms($room_id,$room_name){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appdevproject";
    $tbname="Cinema_Rooms";
    $conn1 = new mysqli($servername, $username, $password, $dbname);

$insert="Insert INTO $tbname 
        values ($room_id,'$room_name')";
mysqli_query($conn1,$insert);
$conn1->close();
}

function inserttoscreening($screening_id,$room_id,$movie_id,$date_time,$language,$screening_status){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appdevproject";
    $tbname="Screening";
    $conn1 = new mysqli($servername, $username, $password, $dbname);

$insert="Insert INTO $tbname
        values ($screening_id,$room_id,$movie_id,'$date_time','$language','$screening_status')";
mysqli_query($conn1,$insert);
$conn1->close();
}

function inserttoroom_seats($seat_id,$screening_id,$seat_price,$seat_name){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appdevproject";
    $tbname="Room_Seats";
    $conn1 = new mysqli($servername, $username, $password, $dbname);

$insert="Insert INTO $tbname
        values ($seat_id,$screening_id,$seat_price,'$seat_name')";
mysqli_query($conn1,$insert);
$conn1->close();
}

function inserttouser_ticket($ticket_id,$user_id,$movie_id,$screening_id,$seat_id,$ticket_status){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appdevproject";
    $tbname="User_ticket";
    $conn1 = new mysqli($servername, $username, $password, $dbname);

$insert="Insert INTO $tbname
        values ($ticket_id,$user_id,$movie_id,$screening_id,$seat_id,'$ticket_status')";
mysqli_query($conn1,$insert);
$conn1->close();
}




createdb();
inserttomovie(1,"Nigger-Man","2019-06-06","English","Action");
inserttocinema_rooms(1,"Sex Dungeon");
inserttoscreening(1,1,1,"2007-06-06 12:58:01","English","Joever");
inserttoroom_seats(1,1,20.11,"A2");
inserttouser_ticket(1,1,1,1,1,"paid");
?>