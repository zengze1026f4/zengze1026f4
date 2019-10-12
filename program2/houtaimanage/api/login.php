<?php
include 'conn.php';
//登陆功能
$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
$psw = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
$sql = "SELECT * FROM manager WHERE username='$username'";
//执行
$res = $conn->query($sql);
// var_dump($res);
if ($res->num_rows) {
    // echo 'yes';
    $sql1 = "SELECT * FROM manager WHERE username='$username' AND psw='$psw'";
    $res1 = $conn->query($sql1);
    if ($res1->num_rows) {
        echo 'yes'; //成功
    } else {
        echo 'error'; //密码错误
    }
} else {
    //登陆失败//用户名不存在
    echo 'no'; //用户名不存在
}
//关闭数据库
// $res->close();
// $conn->close();
