<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include("connect.php");

$data = json_decode(file_get_contents('php://input'), true);
$login = $data['login'];
$password = $data['password'];

if (empty($login) || empty($password)) {
    echo json_encode(['message' => 'Все поля обязательны для заполнения']);
    exit();
}

$stmt = $conn->prepare("SELECT id FROM users WHERE login = ?");
$stmt->bind_param("s", $login);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(['message' => 'Логин уже существует']);
    $stmt->close();
    $conn->close();
    exit();
}

$stmt->close();

$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$stmt = $conn->prepare("INSERT INTO users (login, password) VALUES (?, ?)");
$stmt->bind_param("ss", $login, $hashed_password);

if ($stmt->execute()) {
    echo json_encode(['message' => 'Регистрация успешна']);
} else {
    echo json_encode(['message' => 'Ошибка регистрации']);
}

$stmt->close();
$conn->close();
?>
