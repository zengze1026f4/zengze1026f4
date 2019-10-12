/*
Navicat MySQL Data Transfer

Source Server         : h5-1909
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : prodata

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-10-12 22:29:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gwc
-- ----------------------------
DROP TABLE IF EXISTS `gwc`;
CREATE TABLE `gwc` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `gid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `gnum` int(11) DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `kucun` int(255) DEFAULT NULL,
  PRIMARY KEY (`username`,`id`,`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gwc
-- ----------------------------
INSERT INTO `gwc` VALUES ('0000000001', '1', '3', 'fffffffffff', '7', '1799', '12593', '华为 畅享10 Plus 全网通版 幻夜黑 6GB+128GB  ', '../img/listbig3.jpg', '10');
INSERT INTO `gwc` VALUES ('0000000002', '2', '1', 'fffffffffff', '2', '3999', '7998', '华为 Mate 30 全网通4G版 翡冷翠 8GB+128GB ', '../img/listbig1.jpg', '2');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `gid` int(11) NOT NULL,
  `id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `erprice` decimal(10,2) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `bigimg` varchar(255) DEFAULT NULL,
  `imgs` varchar(255) DEFAULT NULL,
  `colorimg` varchar(255) DEFAULT NULL,
  `paiming` varchar(255) DEFAULT NULL,
  `haoping` varchar(255) DEFAULT NULL,
  `zixun` varchar(255) DEFAULT NULL,
  `kucun` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '1', '华为 Mate 30 全网通4G版 翡冷翠 8GB+128GB ', '亮黑色,翡冷翠,罗兰紫,星河银', '7', '1000.00', '3999.00', '../img/listbig1.jpg', '../img/listbig1.jpg,../img/list1jpg.jpg,../img/list2.jpg,../img/list3.jpg,../img/list4jpg.jpg', '../img/list1jpg.jpg,../img/list2.jpg,../img/list3.jpg,../img/list4jpg.jpg', '手机单品当日销量第2名', '93.33%', '0', '2', '1');
INSERT INTO `list` VALUES ('2', '2', 'Apple iPhone 11 Pro 全网通 银色 512GB  ', '金色,银色,深空灰色,暗夜绿色', '12', '3000.00', '9599.00', '../img/listbig2.jpg', '../img/listbig2.jpg,../img/list21.jpg,../img/list22.jpg,../img/list23.jpg,../img/list24.jpg', '../img/list21.jpg,../img/list22.jpg,../img/list23.jpg,../img/list24.jpg', '手机单品当日销量第1名', '90%', '0', '3', '1');
INSERT INTO `list` VALUES ('3', '3', '华为 畅享10 Plus 全网通版 幻夜黑 6GB+128GB  ', '幻夜黑,翡翠绿,天空之境', '3', '500.00', '1799.00', '../img/listbig3.jpg', '../img/listbig3.jpg,../img/list31.jpg,../img/list32.jpg', '../img/list31.jpg,../img/list32.jpg,../img/list33.jpg', ' 手机单品当日销量第5名', '50%', '1', '10', '1');
INSERT INTO `list` VALUES ('4', '4', '三星 Galaxy Note 10+ 5G版 密斯白 12GB+256GB  ', '麦昆黑,莫奈彩,密斯白', '9', '5000.00', '7999.00', '../img/listbig4.jpg', '../img/listbig4.jpg,../img/list41.jpg,../img/list42.jpg,../img/list44.jpg', '../img/list41.jpg,../img/list42.jpg,../img/list44.jpg', '手机单品当日销量第3名', '99.99%', '2', '8', '1');
INSERT INTO `list` VALUES ('5', '5', '华为 P30 Pro 全网通版 珠光贝母 8GB+128GB  ', '亮黑色,机光色,珠光贝母,天空之境,赤茶橘', '50', '2000.00', '4988.00', '../img/listbig5.jpg', '../img/listbig5.jpg,../img/list51.jpg,../img/list52.jpg,../img/list53.jpg,../img/list54.jpg', '../img/list51.jpg,../img/list52.jpg,../img/list53.jpg,../img/list54.jpg', '手机单品当日销量第4名', '0.00%', '10', '7', '1');
INSERT INTO `list` VALUES ('7', '7', '8', null, '34', '4444.00', null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `psw` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`uid`,`username`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES ('0000000001', '1', 'zzzzzz', 'z1234567');
INSERT INTO `manager` VALUES ('0000000002', '2', 'eeeeeee', 'x1234567');

-- ----------------------------
-- Table structure for usertable
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `psw` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('1', 'zzzzzz', 'z123456', '17865783456', 'lll3@qq.com', '1');
INSERT INTO `usertable` VALUES ('1', 'cccccc', 'c123456', '18980809976', '569@qq.com', '2');
INSERT INTO `usertable` VALUES ('1', 'ffffff', 'f123456', '16766812345', '1230@qq.com', '3');
INSERT INTO `usertable` VALUES ('1', 'lllllll', 'z123456', '19078785654', 'qqq@qq.com', '4');
INSERT INTO `usertable` VALUES ('1', 'hhhh2345', 'z123456', '19089897668', '123@qq.com', '5');

-- ----------------------------
-- Table structure for zuji
-- ----------------------------
DROP TABLE IF EXISTS `zuji`;
CREATE TABLE `zuji` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`,`username`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zuji
-- ----------------------------
INSERT INTO `zuji` VALUES ('0000000001', '3', 'lllllll', '华为 畅享10 Plus 全网通版 幻夜黑 6GB+128GB  ', '1799', '../img/listbig3.jpg');
INSERT INTO `zuji` VALUES ('0000000001', '2', 'lllllll', 'Apple iPhone 11 Pro 全网通 银色 512GB  ', '9599', '../img/listbig2.jpg');
INSERT INTO `zuji` VALUES ('0000000001', '3', 'fffffffffff', '华为 畅享10 Plus 全网通版 幻夜黑 6GB+128GB  ', '1799', '../img/listbig3.jpg');
INSERT INTO `zuji` VALUES ('0000000001', '1', 'zzzzzz', '华为 Mate 30 全网通4G版 翡冷翠 8GB+128GB ', '3999', '../img/listbig1.jpg');
INSERT INTO `zuji` VALUES ('0000000001', '3', 'zzzzzz', '华为 畅享10 Plus 全网通版 幻夜黑 6GB+128GB  ', '1799', '../img/listbig3.jpg');
INSERT INTO `zuji` VALUES ('0000000001', '1', 'fffffffffff', '华为 Mate 30 全网通4G版 翡冷翠 8GB+128GB ', '3999', '../img/listbig1.jpg');
SET FOREIGN_KEY_CHECKS=1;
