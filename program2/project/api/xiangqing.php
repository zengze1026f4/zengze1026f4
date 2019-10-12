<?php
include 'conn.php';
$gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : ''; //详情页id
$sql = "SELECT * FROM `list` WHERE gid='$gid'";
//执行语句
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC); //数组 [{},{},{}]
//提取结果集里面的数据部分
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
$conn->set_charset('utf8'); //设置编码
//3.关闭数据库
// $res->close();
// $conn->close();
