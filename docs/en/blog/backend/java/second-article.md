---
title: second-article
author: HiCheer
createTime: 2024/05/24 17:29:19
permalink: /en/article/e54epbc2/
---
#### 进阶回顾

```
面向对象
	掌握:
		封装 继承 多态(接口类多态)  Person p = new Student();
		static final  
		抽象类 接口 规则  内部类(匿名内部类)
	了解:
		Lambda表达式
常见API
	掌握:
		Object Integer 时间类 异常的处理方式 
	了解:
		BigDecimal Arrays 递归 穷举 数组算法
集合
	掌握:
		List set Map集合特点及应用场景ArrayList HashSet HashMap TreeMap
	了解:
		LinkedList Stream流
IO流
	掌握:
		字节基本流 字符基本流 字符缓冲区流 properties轻量级读写文件 
		打印流 PrintStream字节打印流 PrintWriter字符打印流 
	了解:
		File类 转换流  对象操作流
多线程
	掌握:
		线程的3种创建方式 多行代码的线程安全问题 等待唤醒机制 线程池 
	了解:
		变量的线程安全问题(可见性 原子性) 并发工具包
网络编程
	掌握:
		网络编程三要素 UDP和TCP的实现原理
		使用场景 
			及时性高于可靠性 使用UDP
			可靠性高于及时性 使用TCP 
	了解:
		UDP和TCP的代码实现 服务器端优化(tomcat已经帮我们做好了)
XML
	掌握:
		掌握xml的语法 dtd和Schema的引入
	了解:
		xml的解析 dtd和Schema的编写
其他
	掌握:
		反射 反射的原理 invoke()
		注解 会使用
	了解:
		枚举 会用
		单元测试  会使用@Test
		日志技术  会看懂配置文件
```

#### 今日目标

```
知道git的作用
熟悉git的常用命令
会配置git的远程环境
能在idea中使用git
```

#### 简介

##### 1. 版本控制系统

```
分类
	Git(分布式)  SVN(集中式)
作用
	代码备份
	版本控制
	协同工作
	责任追溯
```

##### 2. Git

```
概念
	分布式的版本控制系统(没有中央服务器,每个人的电脑都是一个完整的版本库)
优势
	速度快
	简单的设计
	完全分布式
	对非线性开发模式的强力执行(允许上千个并行开发的分支)
```

#### 基本使用

##### 1. 工作流程

```
工作目录
	代码的存放位置
暂存区
	代码提交到仓库之前的临时存储空间
本地历史仓库
	用于存放不同版本的代码
	
暂存区存在的意义
	可以选择性的提交
	比如你在开发B功能的时候，发现A功能还存在Bug，这时候就需要先修复A中的Bug，然后先提交修复的A中的Bug,然后再提交B功能开发的文件。
```

##### 2. 常用命令

```
git init         			初始化 创建git仓库
git status       			查看git状态
git add 文件名    			  将本地文件添加到暂存区
git commit -m '提交信息'     提交,将暂存区的所有文件提交到历史仓库
git log 	     		    查看日志(历史提交记录)
```

##### 3. 版本切换

```
git reflog 							 可以查看所有分支的所有操作(更加精简的展示日志)
git reset --hard 版本唯一索引值   	    切换版本
```

#### 分支管理

##### 1. 好处

```
可以从开发主线上分离出来,在不影响主线的情况下,继续工作,一般用于周期较长的模块开发或者尝试性的模块开发
```

##### 2. 操作

```
创建分支
	git branch 分支名
切换分支
	git checkout 分支名
合并分支
    git merge 分支名
删除分支
    git branch -d 分支名
查看分支列表
	git branch
```

#### 远程仓库

##### 1. 本地推送到远程

```
创建远程仓库
	1,设置Git账号(自己注册)
	2,生成SSH公钥
		cd ~/.ssh（查看是否生成过SSH公钥）
		git config user.name（查看git账户）
		git config user.email（查看git邮箱）
		git config --global user.name “账户名”（设置全局账户名和邮箱）
		git config --global user.email “邮箱”
		ssh-keygen -t rsa -C “邮箱” (生成SSH公钥)
		cat ~/.ssh/id_rsa.pub  (查看生成的公钥)
	3,设置账户公钥(登录码云设置)
	4,公钥测试
		ssh -T git@gitee.com
		
推送到远程仓库
	1,为远程仓库地址起一个别名
		git remote add 远程名称 远程仓库地址
	2,推送
		git push -u 仓库名称 分支名
```

##### 2. 远程拉取到本地

```
1,如果是第一次,需要克隆到本地
	git clone 仓库地址
2,创建一个新的文件想推送远程仓库
	先git add 再git commit 最后 git push
3,另外一个同事想拉取你刚才推送的
	git pull 远程仓库名 分支名
```

##### 3. 代码冲突的解决

```javascript
确保每次push之前做一次pull拉取的操作,如果有冲突,处理完冲突之后再push
```

#### idea集成_实操

##### 1. 配置Git

##### 2. 版本切换

##### 3. 分支管理

##### 4. 远程仓库

```css
span {
 color: #999999;
}
```
