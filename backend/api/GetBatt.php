<?php
include_once '../db.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

try {
    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'GET'){
        $query = "SELECT baterai_status FROM baterai_status WHERE id = 1";
        $stmt = $pdo->query($query);

        if($stmt){
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if($row){
                echo json_encode(['baterai_status' => $row['baterai_status']]);
                exit;
            }
        }
        
        echo json_encode(['status' => 'error', 'message' => 'Data tidak ditemukan.']);
        exit;
    } else {
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Metide tidak diizinkan.']);
        exit;
    }
} catch(Exception $e){
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Terjadi kesalahan pada server.', 'error' => $e->getMessage()]);
    exit;
}