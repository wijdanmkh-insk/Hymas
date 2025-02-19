<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'db.php';

// Get the latest trashcan state
$sql = "SELECT state FROM trash_state ORDER BY timestamp DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(["state" => intval($row['state'])]);
} else {
    echo json_encode(["state" => null]);
}

$conn->close();
?>
