<?php
include 'conn.php';
$uid = isset($_POST['uid']) ? $_POST['uid'] : ''; //用户id
$username = isset($_POST['username']) ? $_POST['username'] : ''; //用户名
$psw = isset($_POST['psw']) ? $_POST['psw'] : ''; //密码
$email = isset($_POST['email']) ? $_POST['email'] : ''; //邮箱
$phone = isset($_POST['phone']) ? $_POST['phone'] : ''; //电话
$sql = "UPDATE usertable SET psw='$psw',phone='$phone',email='$email' WHERE uid='$uid' and username='$username'";
$res =  $conn->query($sql);
// var_dump($res);
if ($res) {
    echo json_encode('修改成功', JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode('更新失败', JSON_UNESCAPED_UNICODE);
}
