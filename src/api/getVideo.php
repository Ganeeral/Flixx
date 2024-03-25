<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "db_flix"; 

$mysqli = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    $id = $mysqli->real_escape_string($_GET['id']);
    $result = $mysqli->query("SELECT * FROM videos WHERE id=$id");
    if ($result) {
        $video = $result->fetch_assoc();
        header('Content-Type: application/json');
        echo json_encode($video);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Видео не найдено"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Неправильный запрос"));
}

$mysqli->close();
?>
