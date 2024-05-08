<?php
//echo  "The realpath: " . realpath( __DIR__ . "/vendor/autoload.php");//parse_url( "../vendor/autoload.php");
require_once realpath(__DIR__ . "/vendor/autoload.php");
use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__ );
$dotenv->load(); 

?>