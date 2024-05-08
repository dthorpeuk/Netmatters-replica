<?php
// $host = "localhost";
// $dbname = "netmattersdb";
// $username = "root";
// $password = "pass1";
//echo "real path: " . realpath('../envloader.php');
$real = realpath('../envloader.php');
//echo "<script>console.log('". 1 . $real . 1 ."');</script>";
if($real == ""){
    include 'envloader.php';
}
else{
    include '../envloader.php';
}
//if(__DIR__ == "")

$host = $_ENV['MySQL_DB_HOST'];
$dbname = $_ENV['MySQL_DB_NAME'];
$username = $_ENV['MySQL_DB_USER_NAME'];
$password = $_ENV['MySQL_DB_PASSWORD'];
?>