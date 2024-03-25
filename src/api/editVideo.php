<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_flix";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $title = $_POST['title'];
    $description = $_POST['description'];

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die('Ошибка подключения к базе данных: ' . $conn->connect_error);
    }

    $sql = "UPDATE Videos SET title='$title', description='$description' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Видео успешно отредактировано"]);
    } else {
        echo json_encode(["error" => "Ошибка при редактировании видео: " . $conn->error]);
    }

    $conn->close();
} else {
    echo json_encode(["error" => "Метод не разрешен"]);
}
?>
