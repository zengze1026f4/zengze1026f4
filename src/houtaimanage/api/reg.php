<?php
include 'conn.php';
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
//sql语句
$sql = "SELECT * FROM usertable WHERE username='$name'";
//执行语句
$res = $conn->query($sql);
// var_dump($sql);
if ($res->num_rows) {
    //查找到，不能注册
    echo 'no';
} else {
    //可以注册
    echo 'yes';
}
 /*
        select : 返回结果集
        insert、update、delete：返回布尔值
*/
   //关闭数据库
    // $res->close();
    // $conn->close();
