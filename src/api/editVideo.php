<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "db_flix"; 


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  if (isset($_POST['id'], $_POST['title'], $_POST['description'], $_POST['preview'])) {

      $id = $_POST['id'];
      $title = $_POST['title'];
      $description = $_POST['description'];
      $preview = $_POST['preview'];

      $sql = "UPDATE Videos SET title='$title', description='$description', preview='$preview' WHERE id=$id";
  
      if ($conn->query($sql) === TRUE) {
        echo "Видео удачно обновлено";
      } else {
        echo "Ошибка обновления видео: " . $conn->error;
      }
  } else {
      echo "Отсутствуют требуемые параметры";
  }
  
  $conn->close();
?>
