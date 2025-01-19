<?php
include_once '../db.php'; // Pastikan file ini ada dan koneksi database benar
header('Access-Control-Allow-Origin: *');

header('Content-Type: application/json');

try {
    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        $query = "SELECT motor_status FROM motor_status WHERE id = 1";
        $stmt = $pdo->query($query); // Gunakan `$pdo` dari `db.php`

        if ($stmt) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($row) {
                echo json_encode(['motor_status' => $row['motor_status']]);
                exit;
            }
        }
        // Jika data tidak ditemukan
        echo json_encode(['status' => 'error', 'message' => 'Data tidak ditemukan.']);
        exit;
    } else {
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Metode tidak diizinkan.']);
        exit;
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Terjadi kesalahan pada server.', 'error' => $e->getMessage()]);
    exit;
}
