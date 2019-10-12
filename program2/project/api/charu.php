<?php
include 'conn.php';
$gid = isset($_POST['gid']) ? $_POST['gid'] : ''; //商品id
$username = isset($_POST['username']) ? $_POST['username'] : ''; //用户名
$gnum = isset($_POST['gnum']) ? $_POST['gnum'] : 1; //数量
$kucun = isset($_POST['kucun']) ? $_POST['kucun'] : 1; //库存
$price = isset($_POST['price']) ? $_POST['price'] : ''; //价格
$bigimg = isset($_POST['bigimg']) ? $_POST['bigimg'] : ''; //大图
$title = isset($_POST['title']) ? $_POST['title'] : ''; //title
$sql2 = "INSERT INTO gwc(gid,username,gnum,price,total,title,img,kucun) VALUES ($gid,'$username','$gnum,'$price','$total','$title','$img','$kucun')";
$total = $data[0]['price'] * $gnum;
