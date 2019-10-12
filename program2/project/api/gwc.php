<?php
include 'conn.php';
$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
$uid = isset($_REQUEST['uid']) ? $_REQUEST['uid'] : '';
$sql = "SELECT * FROM gwc WHERE username='$username' or uid='$uid'";
// $sql = "SELECT * FROM 'gwc' WHERE username='$username'";
//SELECT * FROM gwc WHERE username='zzzzzz'
//执行语句
$res = $conn->query($sql);
// var_dump($res);
$arr = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
$conn->set_charset('utf8'); //设置编码
