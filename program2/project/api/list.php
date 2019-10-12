<?php
//列表页排序，分页功能
include 'conn.php';
$ipage = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1'; //第几页
$num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '2'; //每一页显示商品数量为多少
$paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : ''; //页面升序或者降序
$tex1 = isset($_REQUEST['tex1']) ? $_REQUEST['tex1'] : ''; //第一个输入框最低价格
$tex2 = isset($_REQUEST['tex2']) ? $_REQUEST['tex2'] : ''; //第二个输入框最高价格
$index = ($ipage - 1) * $num; //从index开始，后面的num条数据,模糊查询

//选择数据库内容
$sql = "SELECT * FROM `list` WHERE  price BETWEEN $tex1 AND $tex2 ORDER BY price $paixu limit $index,$num";
// $sql = "SELECT * FROM goodsdata WHERE  price BETWEEN 10 AND 12 AND (gtitle LIKE  '%%'  OR shopname LIKE  '%%') ORDER BY price   limit $ipages,$num";
$sql2 = "SELECT * FROM `list` WHERE  price BETWEEN $tex1 AND $tex2 ORDER BY price $paixu";
$GLOBALS['conn']->set_charset('utf8');
//执行语句
$res = $conn->query($sql); //结果集$conn->query($sql)
// var_dump($res);

$res2 = $conn->query($sql2); //结果集
// //提取数据
$data = $res->fetch_all(MYSQLI_ASSOC);
// // var_dump($data);
$data2 = array(
    'list' => $data, //得到的数据对象数组
    'total' => $res2->num_rows, //含价格升降序总页数
    'yeshu' => ceil(($res2->num_rows) / $num),
    'ipage' => $ipage,
    'num' => $num
);
// //转成字符串传给前端

echo json_encode($data2, JSON_UNESCAPED_UNICODE);
// $res->close();
// $GLOBALS['conn']->close();
// echo $data;
