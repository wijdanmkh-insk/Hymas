<?php
require_once '../db.php';
header("Content-Type: application/json");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode(['error' => 'Username and password are required']);
        exit;
    }

    // Hash the password before storing it
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    try {
        $stmt->execute([$username, $hashedPassword]);
        echo json_encode(['message' => 'User added successfully']);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Failed to add user: ' . $e->getMessage()]);
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register User</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    <h1>Register User</h1>
    
    <form id="registerForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <button type="submit">Register</button>
    </form>

    <div id="responseMessage"></div>

    <script>
        // Handle form submission
        document.getElementById('registerForm').addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent the default form submit

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await axios.post('http://localhost:80/hymas/backend/api/login.php', {
                    username: username,
                    password: password
                });

                // Display response message
                document.getElementById('responseMessage').innerText = JSON.stringify(response.data);
            } catch (error) {
                document.getElementById('responseMessage').innerText = 'Error: ' + error.response.data.error;
            }
        });
    </script>
</body>
</html>
