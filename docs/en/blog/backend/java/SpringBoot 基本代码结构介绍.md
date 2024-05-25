---
title: SpringBoot 基本代码结构介绍
author: HiCheer
createTime: 2024/05/25 07:51:25
permalink: /article/1rdz1fdt/
---

### 1. 前言

已对SpootBoot基本代码结构理解的人不建议看，浪费时间，可以直接去 Blibili 搜索相关的讲师课程。

⚠️⚠️⚠️注意：如果你是一个互联网刚入行的同学，首先必须要知道程序是什么，它可以做什么，对程序开发有基本的概念，我建议你可以看这篇文章，一点不了解的不建议往下观看了。首先我想给

### 2. 正题

大家展示一个代码结构图（结合下面的故事来分析）

![723295fc733b4593ac74fd093c9da0e0](assets/723295fc733b4593ac74fd093c9da0e0.png)

这个结构图其实就是 SpringBoot标准的代码结构，也就是说你使用 IDEA（[java](https://so.csdn.net/so/search?q=java&spm=1001.2101.3001.7020) 语言的开发工具），通过页面“点点点”的方式，可视化就可以创建出这么一套的代码。

### 2.1 故事前的类比说明

有一天，小王（你）接到工厂（SpringBoot）的邀请来参观，小明负责迎接小王。

- 工厂在工作日状态正常开工

> 说明了程序正常的启动，也就是：Application.java

- 小明在门口迎接小王

> 说明请求来到了控制层（UserController.java）

