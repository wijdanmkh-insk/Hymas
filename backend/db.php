<?php

require_once __DIR__ . '/../vendor/autoload.php'; // Perbaiki path

use Dotenv\Dotenv;

// Memuat file .env
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');  // Memuat .env dari root folder
$dotenv->load();

// Ambil variabel-variabel konfigurasi dari .env
$host = $_ENV['DB_HOST'];
$db = $_ENV['DB_DATABASE'];
$user = $_ENV['DB_USERNAME'];
$pass = $_ENV['DB_PASSWORD'];

try {
    $pdo = new PDO("mysql:host=localhost;port=3306;dbname=hymas", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected to the database successfully!";
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

?>
