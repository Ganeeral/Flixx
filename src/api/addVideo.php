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

    $title = $_POST['title'];
    $description = $_POST['description'];
    $author = "Who is";
    $publication_date = date('Y-m-d');
    $imageDir = "../../public/images/";
    $videoDir = "../../public/video/";

    if (isset($_FILES['preview']) && isset($_FILES['video'])) {
        $preview_tmp = $_FILES['preview']['tmp_name'];
        $video_tmp = $_FILES['video']['tmp_name'];

        $preview = '/images/' . basename($_FILES['preview']['name']);
        move_uploaded_file($preview_tmp, $imageDir . basename($_FILES['preview']['name']));

        $video_url = '/video/' . basename($_FILES['video']['name']);
        move_uploaded_file($video_tmp, $videoDir . basename($_FILES['video']['name']));

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die('Ошибка подключения к базе данных: ' . $conn->connect_error);
        }
        $sql = "INSERT INTO Videos (title, description, author, publication_date, preview, video_url) VALUES ('$title', '$description', '$author', '$publication_date', '$preview', '$video_url')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Видео успешно добавлено"]);
        } else {
            echo json_encode(["error" => "Ошибка при добавлении видео: " . $conn->error]);
        }

        $conn->close();
    } else {
        echo json_encode(["error" => "Превью и видео не были загружены"]);
    }
} else {
    echo json_encode(["error" => "Метод не разрешен"]);
}
?>
