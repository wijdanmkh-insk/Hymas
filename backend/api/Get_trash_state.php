<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../db.php';

try {
    // Get the latest trashcan state
    $sql = "SELECT state FROM trash_state ORDER BY timestamp DESC LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch();

    if ($result) {
        echo json_encode(["state" => intval($result['state'])]);
    } else {
        echo json_encode(["state" => null]);
    }
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database error", "error" => $e->getMessage()]);
}
?>
