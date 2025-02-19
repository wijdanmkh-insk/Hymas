<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'db.php';

// Read JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if ($data && isset($data['state'])) {
    $state = intval($data['state']);

    $sql = "INSERT INTO trash_state (state) VALUES ($state)";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "State updated"]);
    } else {
        echo json_encode(["success" => false, "message" => "Database error"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid JSON"]);
}

$conn->close();
?>
