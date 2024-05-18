<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Headers: Content-Type");
    exit;
}

if (isset($_GET['id'])) {
    $videoId = intval($_GET['id']);
    if ($videoId <= 0) {
        echo "Ошибка: Некорректный ID видео.";
        exit;
    }

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "db_flixx";

    $mysqli = new mysqli($servername, $username, $password, $dbname);
    if ($mysqli->connect_error) {
        die('Ошибка подключения к базе данных: ' . $mysqli->connect_error);
    }

    $sql = "DELETE FROM videos WHERE id = ?";
    $statement = $mysqli->prepare($sql);
    if (!$statement) {
        echo "Ошибка подготовки запроса: " . $mysqli->error;
        $mysqli->close();
        exit;
    }

    $statement->bind_param("i", $videoId);

    if ($statement->execute()) {
        echo "Видео успешно удалено";
    } else {
        echo "Ошибка удаления видео: " . $mysqli->error;
    }

    $statement->close();
    $mysqli->close();
} else {
    echo "Ошибка: ID видео не был передан.";
}
echo json_encode($response);
?>
