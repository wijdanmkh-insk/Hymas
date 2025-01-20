<?php
try {
    $pdo = new PDO("mysql:host=localhost;port=3306;dbname=hymas", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected to the database!";
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
