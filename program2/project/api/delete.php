<?php
include 'conn.php';
//数据加减
$gid = isset($_POST['gid']) ? $_POST['gid'] : ''; //商品id
$username = isset($_POST['username']) ? $_POST['username'] : ''; //用户名
$gnum = isset($_POST['gnum']) ? $_POST['gnum'] : '1'; //商品数量，有数量就是改变数量
$del = isset($_POST['del']) ? $_POST['del'] : ''; //删除某一行，有参数就是删除
$dels = isset($_POST['dels']) ? $_POST['dels'] : ''; //清空表
$total = isset($_POST['total']) ? $_POST['total'] : ''; //一个商品单行总价格
// $insert = isset($_POST['insert']) ? $_POST['insert'] : ''; //插入，增加新得商品进入购物车
if ($del) {
    $sql = "DELETE FROM gwc WHERE gid=$gid And username='$username'";
    $res =  $conn->query($sql);
    if ($res) {
        echo json_encode('删除成功', JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode('删除失败', JSON_UNESCAPED_UNICODE);
    }
} else if ($gnum && $total) {
    $sql = "UPDATE gwc SET gnum=$gnum,total=$total WHERE gid=$gid And username='$username'";
    $res =  $conn->query($sql);
    // var_dump($res);
    if ($res) {
        echo json_encode('更新成功', JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode('更新失败', JSON_UNESCAPED_UNICODE);
    }
} else if ($dels) { //删除整个表，清空整个表数据
    $sql = "DELETE FROM gwc Where gid=$gid and username='$username'";
    $res =  $conn->query($sql);
    if ($res) {
        echo json_encode('清空全部勾选的数据成功', JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode('清空全部勾选的数据失败', JSON_UNESCAPED_UNICODE);
    }
}
