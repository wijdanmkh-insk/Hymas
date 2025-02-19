<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../db.php';

try {
    // Database connection
    // Read JSON input
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    if ($data && isset($data['state'])) {
        $state = intval($data['state']);

        $stmt = $pdo->prepare("INSERT INTO camera_status (status) VALUES (:state)");
        $stmt->execute(['state' => $state]);

        echo json_encode(["success" => true, "message" => "State updated"]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid JSON"]);
    }
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database error", "error" => $e->getMessage()]);
}
?>
