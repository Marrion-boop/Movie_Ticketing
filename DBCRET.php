<?php

function createdb(){ 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "appdevproject";
$checkdb="SHOW DATABASEs LIKE '$dbname'";
$tbname3="Screening";
$tbname4="Room_Seats";
$checktable3="Show Tables like '$tbname3'";
$checktable4="Show Tables like '$tbname4'";

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

$result2=mysqli_query($conn1,$checktable3);
    if(mysqli_num_rows($result2)==0){
        $sql = "CREATE TABLE $tbname3 (
            screening_id int(10) not null auto_increment,
            room_name varchar(100),
            movie_name varchar(100),
            start_time varchar(100),
            primary key (screening_id)
            )";
            if ($conn1->query($sql) === TRUE) {
             echo "Table $tbname3 created successfully<br>";
            } else {
             echo "Error creating table: " . $conn->error;
            }
        } 
        
    $result2=mysqli_query($conn1,$checktable4);
        if(mysqli_num_rows($result2)==0){
            $sql = "CREATE TABLE $tbname4 (
            seat_id int(10) not null auto_increment,
            seat_name VARCHAR(100),
            primary key (seat_id)
            )";
            if ($conn1->query($sql) === TRUE) {
             echo "Table $tbname4 created successfully<br>";
            } else {
            echo "Error creating table: " . $conn->error;
            }
            }

$conn1->close();             

}
    createdb();
    echo "Databse and Tables have been created!";
?>