<?php
include 'conn.php';
$id = isset($_POST['id']) ? $_POST['id'] : ''; //id
$username = isset($_POST['username']) ? $_POST['username'] : ''; //用户名
$sql = "DELETE FROM usertable WHERE id=$id And username='$username'";
$res =  $conn->query($sql);
if ($res) {
    echo json_encode('删除成功', JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode('删除失败', JSON_UNESCAPED_UNICODE);
}
