<?php
require_once '../db.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    // Ambil data dari request body
    $input = json_decode(file_get_contents('php://input'), true);
    $status = $input['status'] ?? null;

    if ($status === null) {
        echo json_encode(['success' => false, 'message' => 'Status tidak ditemukan']);
        exit;
    }

    // Query untuk mengupdate status motor
    $stmt = $pdo->prepare("UPDATE motor_status SET motor_status = :status WHERE id = 1");
    $stmt->bindParam(':status', $status);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Motor berhasil dinyalakan']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Gagal memperbarui status']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Terjadi kesalahan: ' . $e->getMessage()]);
}
?>
