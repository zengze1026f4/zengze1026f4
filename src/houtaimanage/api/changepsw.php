<?php
include 'conn.php';
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
$sql = "UPDATE manager set psw='$password' WHERE username='$name'";
//执行语句
$res = $conn->query($sql);
// var_dump($sql);
if ($res) {
    echo 'yes';
} else {
    echo 'no';
}
