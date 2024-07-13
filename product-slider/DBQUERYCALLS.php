<?php 
function inserttoscreening($room_name,$movie_name,$start_time){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appdevproject";
    $tbname="Screening";
    $conn1 = new mysqli($servername, $username, $password, $dbname);

$insert="Insert INTO $tbname (room_name, movie_name, start_time)
        values ('$room_name','$movie_name','$start_time')";
mysqli_query($conn1,$insert);
$conn1->close();
}

function inserttoroom_seats($seat_name){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appdevproject";
    $tbname="Room_Seats";
    $conn1 = new mysqli($servername, $username, $password, $dbname);

$insert="Insert INTO $tbname (seat_name)
        values ('$seat_name')";
mysqli_query($conn1,$insert);
$conn1->close();

}

function getseat(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "appdevproject";
    $tbname="Room_Seats";
    $conn1 = new mysqli($servername, $username, $password, $dbname);

    $select="Select * from $tbname";
    $result3=mysqli_query($conn1,$select);
    $seats=[];
    if(mysqli_num_rows($result3)>0){
        while($row=mysqli_fetch_assoc($result3)){
        array_push($seats,($row["seat_name"]));
    }
    }
    $conn1->close();
    return  $seats;}
    

?>