/*
Navicat MySQL Data Transfer

Source Server         : score
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : student_score

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-01-05 21:05:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `class`
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `cno` char(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '课程编号',
  `cname` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '课程名称',
  PRIMARY KEY (`cno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('ERDSAA', '人工智能');
INSERT INTO `class` VALUES ('QAZ123', '数据结构');
INSERT INTO `class` VALUES ('QES231', '计算方法');
INSERT INTO `class` VALUES ('TSG100', '大学物理');

-- ----------------------------
-- Table structure for `stu`
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `sno` char(16) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '学生学号',
  `sname` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '学生姓名',
  `sex` char(1) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '性别',
  `class` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '班级',
  `pro` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '专业',
  `tel` char(15) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '联系方式',
  `password` char(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '账号密码',
  `college` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '学院',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of stu
-- ----------------------------
INSERT INTO `stu` VALUES ('2017040284', '文一如', '女', '计科1702', '计算机科学与技术', '18304843222', '111111', '信息学院');
INSERT INTO `stu` VALUES ('2017040307', '周梦', '女', '计科1702', '计算机科学与技术', '18867432455', '000000', '信息学院');
INSERT INTO `stu` VALUES ('2017040308', '郑晓溪', '女', '计科1702', '计算机科学与技术', '18810922222', '123456', '信息学院');
INSERT INTO `stu` VALUES ('2017040320', '叶黎', '女', '计科1703', '计算机科学与技术', '18801222222', '123456', '信息学院');

-- ----------------------------
-- Table structure for `stu_classs`
-- ----------------------------
DROP TABLE IF EXISTS `stu_classs`;
CREATE TABLE `stu_classs` (
  `sno` char(16) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '学号',
  `cno` char(16) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '课程号',
  `year` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '学年：2019-2020学年',
  `term` smallint(2) NOT NULL COMMENT '学期',
  `grade` decimal(10,0) DEFAULT NULL COMMENT '分数',
  PRIMARY KEY (`sno`,`cno`,`year`,`term`),
  KEY `cno` (`cno`),
  CONSTRAINT `stu_classs_ibfk_1` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `stu_classs_ibfk_2` FOREIGN KEY (`cno`) REFERENCES `class` (`cno`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of stu_classs
-- ----------------------------
INSERT INTO `stu_classs` VALUES ('2017040307', 'QAZ123', '2019-2020', '1', '50');
INSERT INTO `stu_classs` VALUES ('2017040308', 'QAZ123', '2019-2020', '1', '95');
INSERT INTO `stu_classs` VALUES ('2017040320', 'ERDSAA', '2020-2021', '1', '90');

-- ----------------------------
-- Table structure for `teacher`
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `tno` char(16) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '教师工号',
  `tname` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '教师姓名',
  `password` char(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '账号密码',
  `tel` char(15) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '联系方式',
  PRIMARY KEY (`tno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('19980381729', '张伟', '123455', '18812321245');
INSERT INTO `teacher` VALUES ('19993727822', '陈婧婧', '536223', '19837362749');
INSERT INTO `teacher` VALUES ('20001231341', '胡欣欣', '123123', '18810927767');

-- ----------------------------
-- Table structure for `tea_classs`
-- ----------------------------
DROP TABLE IF EXISTS `tea_classs`;
CREATE TABLE `tea_classs` (
  `tno` char(16) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '工号',
  `cno` char(16) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '课程号',
  `year` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '学年：2019-2020学年',
  `term` smallint(2) NOT NULL COMMENT '学期',
  PRIMARY KEY (`tno`,`cno`,`year`,`term`),
  KEY `cno` (`cno`),
  CONSTRAINT `tea_classs_ibfk_1` FOREIGN KEY (`tno`) REFERENCES `teacher` (`tno`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tea_classs_ibfk_2` FOREIGN KEY (`cno`) REFERENCES `class` (`cno`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tea_classs
-- ----------------------------
INSERT INTO `tea_classs` VALUES ('19980381729', 'QAZ123', '2019-2020', '1');
INSERT INTO `tea_classs` VALUES ('20001231341', 'QAZ123', '2020-2021', '0');
