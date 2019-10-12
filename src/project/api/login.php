<?php
include 'conn.php';
//登陆功能
$name = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';

//sql语句只要用户名，电话号码，Email中有一个对了同时密码也正确就可以登录
// $sql = "SELECT * FROM usertable WHERE username='zzzzzz' AND psw='z123456'";
$sql = "SELECT * FROM usertable WHERE username='$name' OR email='$name' OR phone='$name'";
//执行
$res = $conn->query($sql);
// var_dump($res);
if ($res->num_rows) {
    //登陆成功
    // echo 'yes';
    $sql1 = "SELECT * FROM usertable WHERE username='$name' AND psw='$password' OR email='$name' AND psw='$password' OR phone='$name' AND psw='$password'";
    //SELECT * FROM usertable WHERE username='zzzzz' AND psw='z123456' OR email='123@qq.co' AND psw='z123456' OR phone='14567899876' AND psw='z123456'
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
