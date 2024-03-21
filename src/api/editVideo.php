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

    $video_Id = $_POST['videoId'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $preview = $_POST['preview'];

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die('Ошибка подключения к базе данных: ' . $conn->connect_error);
    }

    $sql = "UPDATE videos SET title='$title', description='$description', preview='$preview' WHERE id=$video_Id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Видео успешно обновлено"]);
    } else {
        echo json_encode(["error" => "Ошибка при обновлении видео: " . $conn->error]);
    }

    $conn->close();
} else {
    echo json_encode(["error" => "Метод не разрешен"]);
}
?>
