<?php
include 'conn.php';
$gid = isset($_POST['gid']) ? $_POST['gid'] : ''; //商品id
$username = isset($_POST['username']) ? $_POST['username'] : ''; //用户名
$gnum = isset($_POST['gnum']) ? $_POST['gnum'] : '1'; //商品数量
//查询整个数据库内容
//选择数据库内容
$GLOBALS['conn']->set_charset('utf8');
$sql1 = "select * from gwc where gid='$gid' and username = '$username'"; //查询数据是否有记录了
$res1 =  $GLOBALS['conn']->query($sql1); //结果集，商品用户名记录
$sql4 = "select * from list where gid='$gid'"; //根据gid查找商品信息
$res4 =  $GLOBALS['conn']->query($sql4); //结果集商品信息
// var_dump($res4);
$data = $res4->fetch_all(MYSQLI_ASSOC); //找到gid商品信息
// echo json_encode($data, JSON_UNESCAPED_UNICODE);
$kucun = $data[0]['kucun'] * 1;
$price = $data[0]['price'] * 1;
$img = $data[0]['bigimg'];
$title = $data[0]['title'];
$total = $data[0]['price'] * 1;
if ($res1->num_rows == 1) { //若存在数据则更新
    if ($gnum > $kucun) {
        $gnum = $kucun;
        echo json_encode('超出库存', JSON_UNESCAPED_UNICODE);
    } else {
        $total = $data[0]['price'] * $gnum;
        $sql3 = "update gwc set gnum=$gnum,total=$total  where gid='$gid' And username = '$username'";
        $res3 = $GLOBALS['conn']->query($sql3); //结果集
        if ($res3) {
            echo json_encode('更新成功', JSON_UNESCAPED_UNICODE);
        }
    }
} else { //不存在就插入数据
    $sql2 = "INSERT INTO gwc(gid,username,gnum,price,total,title,img,kucun) VALUES ($gid,'$username',$gnum,$price,$total,'$title','$img',$kucun)";
    $res2 = $GLOBALS['conn']->query($sql2); //结果集
    if ($res2) {
        echo json_encode('插入成功', JSON_UNESCAPED_UNICODE);
    }
}
