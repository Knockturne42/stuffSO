<?php
$servername = "localhost";
$username = "test";
$password = "test00";
$bdd;
try {
    $bdd = new PDO("mysql:host=localhost;dbname=testso", $username, $password);
    $bdd->exec("SET NAMES utf8");
    // set the PDO error mode to exception
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>