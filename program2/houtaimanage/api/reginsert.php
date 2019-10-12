<?php
include 'conn.php';
//注册功能
$name = empty($_REQUEST['name']) ? '' : $_REQUEST['name'];
$password = empty($_REQUEST['password']) ? '' : $_REQUEST['password'];
$email = empty($_REQUEST['email']) ? '' : $_REQUEST['email'];
$phone = empty($_REQUEST['phone']) ? '' : $_REQUEST['phone'];

//sql语句
$sql = "INSERT INTO usertable(username,psw,email,phone) VALUES('$name','$password','$email','$phone')";
//INSERT INTO usertable(username,psw,email,phone) VALUES('zzzzzz','123456','2109520@qq.com','15115079880')

//执行语句
$res = $conn->query($sql);

// var_dump($res);

if ($res) {
    //插入成功
    echo 'yes';
} else {
    echo 'no';
}

    /*
        select : 返回结果集
        insert、update、delete：返回布尔值
    */

    //关闭数据库
    // $res->close();
    // $conn->close();
