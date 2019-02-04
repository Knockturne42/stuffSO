<?php
$servername = "localhost";
$username = "test";
$password = "test00";

try {
    $conn = new PDO("mysql:host=localhost;dbname=testso", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>