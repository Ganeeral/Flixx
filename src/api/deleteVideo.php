<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include('connect.php');

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $video_id = $data['id'];

    if ($conn->connect_error) {
        die('Ошибка подключения к базе данных: ' . $conn->connect_error);
    }

    $stmt = $conn->prepare("DELETE FROM PendingVideos WHERE id = ?");
    $stmt->bind_param("i", $video_id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Видео успешно удалено"]);
    } else {
        echo json_encode(["error" => "Ошибка при удалении видео: " . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["error" => "Метод не разрешен"]);
}
?>
