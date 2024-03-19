<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "flix_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Не удалось подключиться: " . $conn->connect_error);
}

$sql = "SELECT Videos.id, Videos.title, Videos.video_url, Videos.preview, Videos.author, Videos.publication_date, Videos.views, Videos.description, Users.author_avatar 
        FROM Videos 
        LEFT JOIN Users ON Videos.author = Users.username";
$result = $conn->query($sql);

if (!$result) {
    die("Ошибка выполнения запроса: " . $conn->error);
}

$videos = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $videos[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($videos);

$conn->close();
?>
