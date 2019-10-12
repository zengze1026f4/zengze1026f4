<?php
include 'conn.php';
$gid = isset($_POST['gid']) ? $_POST['gid'] : ''; //商品id
$sql = "DELETE FROM list WHERE gid=$gid";
$res =  $conn->query($sql);
if ($res) {
    echo json_encode('删除成功', JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode('删除失败', JSON_UNESCAPED_UNICODE);
}
