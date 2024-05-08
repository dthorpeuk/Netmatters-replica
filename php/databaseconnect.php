<?php
include 'pdoconfig.php';
require_once 'pdoconfig.php';
$conn = NULL;
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<script>console.log('Connected successfully')</script>";
  } catch(PDOException $e) {
    echo "<script>console.log('Connection failed: " . $e->getMessage() . "')</script>";
    
  }

  // $query = "SELECT * FROM news_item ORDER BY date DESC";
  // $res = $conn->query($query);

?>