<?php
include 'conn.php';
$gid = isset($_POST['gid']) ? $_POST['gid'] : ''; //用户id
$title = isset($_POST['title']) ? $_POST['title'] : ''; //用户名
$price = isset($_POST['price']) ? $_POST['price'] : ''; //密码
$kucun = isset($_POST['kucun']) ? $_POST['kucun'] : ''; //邮箱
$bigimg = isset($_POST['bigimg']) ? $_POST['bigimg'] : ''; //电话
$sql1 = "SELECT * FROM manager WHERE uid='$gid'";
$res1 =  $conn->query($sql1);
if ($res1) { //存在才更新
    $sql = "UPDATE list SET title='$title', price='$price',kucun='$kucun',bigimg='$bigimg' WHERE  gid='$gid'";
    $res =  $conn->query($sql);
    // var_dump($res);
    if ($res) {
        echo json_encode('存在更新成功', JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode('存在更新失败', JSON_UNESCAPED_UNICODE);
    }
} else {

    echo json_encode('该商品不存在', JSON_UNESCAPED_UNICODE);
}
