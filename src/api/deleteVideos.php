<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Headers: Content-Type");
    exit;
}

if (isset($_GET['id'])) {
    $videoId = intval($_GET['id']); // Преобразуем id в целое число
    if ($videoId <= 0) {
        echo "Ошибка: Некорректный ID видео.";
        exit;
    }

    // Параметры подключения к базе данных
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "flix_db";

    // Подключение к базе данных
    $mysqli = new mysqli($servername, $username, $password, $dbname);
    if ($mysqli->connect_error) {
        die('Ошибка подключения к базе данных: ' . $mysqli->connect_error);
    }

    // Подготовленный запрос на удаление видео
    $sql = "DELETE FROM videos WHERE id = ?";
    $statement = $mysqli->prepare($sql);
    if (!$statement) {
        echo "Ошибка подготовки запроса: " . $mysqli->error;
        $mysqli->close();
        exit;
    }

    // Привязываем параметр к подготовленному запросу
    $statement->bind_param("i", $videoId);

    // Выполняем запрос
    if ($statement->execute()) {
        echo "Видео успешно удалено";
    } else {
        echo "Ошибка удаления видео: " . $mysqli->error;
    }

    // Закрываем подготовленный запрос и соединение с базой данных
    $statement->close();
    $mysqli->close();
} else {
    echo "Ошибка: ID видео не был передан.";
}
echo json_encode($response);
?>
