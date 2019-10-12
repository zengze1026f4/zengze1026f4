<?php
include 'conn.php';
$gid = isset($_POST['gid']) ? $_POST['gid'] : ''; //商品id
$username = isset($_POST['username']) ? $_POST['username'] : ''; //用户名
//查询整个数据库内容
//选择数据库内容
$GLOBALS['conn']->set_charset('utf8');
$sql1 = "select * from zuji where gid='$gid' and username = '$username'"; //查询数据是否有记录了
$res1 =  $GLOBALS['conn']->query($sql1); //结果集，商品用户名记录
$sql4 = "select * from list where gid='$gid'"; //根据gid查找商品信息
$res4 =  $GLOBALS['conn']->query($sql4); //结果集商品信息
// var_dump($res4);
$data = $res4->fetch_all(MYSQLI_ASSOC); //找到gid商品信息
// echo json_encode($data, JSON_UNESCAPED_UNICODE);
$price = $data[0]['price'] * 1;
$img = $data[0]['bigimg'];
$title = $data[0]['title'];
$gid = $gid * 1;
if ($res1->num_rows == 1) { //若存在数据则更新
    $sql3 = "delete from zuji  where gid='$gid' And username = '$username'";
    $res3 = $GLOBALS['conn']->query($sql3); //结果集
    if ($res3) {
        $sql2 = "INSERT INTO zuji(gid,username,price,title,img) VALUES ($gid,'$username',$price,'$title','$img')";
        $res2 = $GLOBALS['conn']->query($sql2); //结果集
        if ($res2) {
            echo json_encode('重新插入成功', JSON_UNESCAPED_UNICODE);
        }
    } else {
        echo json_encode('删除失败', JSON_UNESCAPED_UNICODE);
    }
} else { //不存在就插入数据
    $sql2 = "INSERT INTO zuji(gid,username,title,price,img) VALUES ($gid,'$username','$title',$price,'$img')";
    $res2 = $GLOBALS['conn']->query($sql2); //结果集
    if ($res2) {
        echo json_encode('插入成功', JSON_UNESCAPED_UNICODE);
    }
}
