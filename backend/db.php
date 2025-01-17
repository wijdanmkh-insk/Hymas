<?php
$host = 'localhost';
$db = 'tatsuyar_hymas';
$user = 'tatsuyar_hymas';
$pass = '((.I3Q5$uA9~'; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
