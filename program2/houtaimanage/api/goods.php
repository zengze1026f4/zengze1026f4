<?php
include 'conn.php';
$sql = 'SELECT * FROM list';
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr);
// $conn->set_charset('utf8'); //设置编码
