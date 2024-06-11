---
title: 单体服务到微服务
author: HiCheer
createTime: 2024/05/30 01:27:03
permalink: /article/bwowysm9/
---
### 前言
OK 朋友们在开始之前问一下问题，当然也给了一定答案！！
- 单体项目为什么要转成微服务？

  大多人应该都是抱着学习的态度来学习的，我们工作生涯中可能听说过微服务是为了提高项目的稳定性，防止一个模块有问题影响到其他的模块，便于大型项目的更新维护。
- 转成微服务给我带来了那些问题？

  一般从单体项目升级到微服务，其实会有一系列的问题会出现。例如：各个服务间如何通信，多个服务 token 如何共享，一个代码块中调用了多个服务间的接口，如何保证事务等等。这些问题在单体架构中是不存在或者解决是很简单的，毕竟都在一起。如果你在单体项目中没有思考过这些问题的话，在微服务中不得不考虑这些问题。
- 如何解决这些问题？

  目前这些微服务问题市面上已经有人给了我们解决方案，无非就是项目中引入相关依赖，写一些代码配置类，可能有些解决方案用到外置的程序，配合我们的代码实现来解决这些问题的。
- 确定有必要转微服务？

  微服务架构有很多注意的点其实有很多的。那些小团队业务量小的真心没必要升级微服务，因为微服务是了提高项目的稳定性，和大型团队的项目维护管理，为以后用户量增大做分布式做准备的。单体项目的不需要考虑太多问题，而且相同请求下，单体是比微服务效率要高的，因为少了很多中间的组件，不会有服务间的网络通信延迟。

### 微服务中一个请求过来
```flow
st=>start: 开始
e=>end: 结束
getway=>subroutine: 网关
isLogin=>condition: 是否登录
auth=>subroutine: 登录鉴权

st->getway(left)
```

1. 

| 微服务类型   | 相关组件                                                     | 作用                                                   |
| :----------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| 服务注册发现 | Eureka, Consul, ZooKeeper, etcd                              | 用于服务注册和发现，提供了高可用的服务注册中心         |
| 负载均衡     | Ribbon, Spring Cloud LoadBalancer                            | 用于将请求分发到不同的服务实例，提高系统的性能和可用性 |
| 服务调用     | Feign, WebClient, RestTemplate                               | 用于在服务之间进行通信，实现服务之间的调用和交互       |
| 断路器       | Hystrix, Resilience4j、Sentinel                              | 用于在服务之间进行通信时，处理潜在的故障和延迟         |
| 配置管理     | Spring Cloud Config, Consul, etcd, ZooKeeper                 | 用于集中管理微服务的配置信息，并实现配置的动态更新     |
| 服务监控     | Spring Boot Actuator, Spring Cloud Sleuth, Micrometer        | 用于监控微服务的运行状态、性能指标和调用链分析         |
| 日志管理     | ELK Stack, Fluentd, Logstash, Log4j2                         | 用于收集、存储和分析微服务产生的日志信息               |
| 安全认证     | Spring Security, OAuth2, JWT                                 | 用于保护微服务的安全性，实现身份验证和授权             |
| 服务网格     | Zuul、Istio, Spring Cloud Gateway, Spring Cloud Circuit Breaker | 提供了微服务之间的可靠通信、安全性和流量控制等功能     |
| 任务调度     | Spring Cloud Data Flow, Spring Batch                         | 用于调度和管理微服务的作业和任务执行                   |
| 事务         | Seatal                                                       |                                                        |
| 消息队列     | Kafka、RabbitMQ                                              |                                                        |
|              |                                                              |                                                        |



---

**Professional Skills**

**Programming Languages**

- Backend: Java
- Frontend: Html, CSS, JavaScript

**Frameworks**

- Backend: Spring, SpringBoot, SpringCloud, Sa-Token
- Frontend: Vue

**Components**

- Backend: Mybatis, Mybatis-Plus, RocketMQ, Xxl-Job, Nacos, Sentinel, OpenFeign, SpringCloudGateway, SpringCloudLoadBalancer, Seata, ELK
- Frontend: Ajax, Axios, Element-UI, Ant-Design

**Auxiliary Tools**

- Backend: Swagger+Knife, FastJson, HuTool, EasyPOI, Log4j, etc.

**Operations and Deployment**

- Docker, MySQL, Redis, K8s, Elasticsearch, Minio, Oss, Nginx

**Development Tools**

- IDEA, VsCode, WebStorm, PostMan, ApiPost, Arthas, Git, Svn, Navicat, DataGrip

**Third-Party APIs**

- WeChat Mini Program, Enterprise WeChat Mini Program, Alipay WeChat Pay, Mobile SMS, JuLian Engine, GuangDianTong

**Search Tools**

- ChatGPT, GitHub, Stack Overflow, CSDN, etc.

**Note**: Besides frontend skills being relatively weaker (though capable of writing basic management pages), all other skills are proficiently used in projects.

------

**Work Experience**

**Hangzhou Three-Body Technology Co., Ltd.**

- Java Development Engineer, R&D Department
- February 2022 - February 2024
- Hangzhou

Involved in collaborative development of medium-sized government projects:

- ZheNongJi [ZheLiBan Mini Program]
- Advertising Platform [https://aladdin.zj.chinamobile.com/Internet-advert-ssp/ad-td/#/login]

Developed small projects:

- Anhui Heke Rights Platform [https://coupon.heke100.com/platform/#/login]
- Public and Private Domain Marketing Conversion Platform [http://ppmk.santiyun.com/admin/#/login?redirect=/]

**Guangdong WanRenHui Network Technology Co., Ltd.**

- Java Development Engineer, R&D Department
- March 2021 - November 2021
- Zhanjiang

Involved in collaborative development of small community group purchase projects:

- Hengxing Hengxian [WeChat Mini Program]

**Personal Information**

- Name: 陈党党 (Dangdang Chen)
- Phone: 13357146575
- Email: 188600223@qq.com
- Location: Nanjing
- GitHub: https://hicheer-o.github.io/
- Age: 26
- Status: Resigned, Full Stack Developer

------

**Project Experience (Three-Body Technology Co., Ltd.)**

**Anhui Rights Platform**

- Team Leader
- October 2023 - February 2024
- Hangzhou
- Project Address: https://coupon.heke100.com/platform/#/login

**Project Description**: [Anhui Chizhou Agent] attracts traffic to service providers through [Anhui Mobile APP Rights], increasing their exposure and achieving consumption. [Anhui Chizhou Agent] connects with [Anhui Mobile Rights Platform] to upload merchant information, and create and manage self-made coupons and WeChat vouchers on the Anhui Rights Platform. Real-time settlement to merchants is achieved through the [WeChat transfer to wallet] function. Built [web management platform], [h5 sales management backend], [h5 merchant management backend], and [WeChat mini-program merchant verification platform].

**Technologies Used**: Springboot, Sa-token, Mybatis-plus, Redis, MySQL, Minio, xxl-job

**Technical Description**: This project is a Springboot monolithic project using Springboot and Sa-token for the basic framework, Mybatis-plus for the persistence layer, Redis for caching, MySQL for data storage, Minio for OSS resource storage, and xxl-job for daily task scheduling.

**Main Modules**:

- H5 Sales Management Backend:
  - New Customer: Enter merchant information (qualification certificates, store information, rights information)
  - My Performance: Daily performance bonuses from customer expansion
- Web Management Platform:
  - Merchant Review: Review of merchant information, store review, and rights review. All reviews need to be submitted to the mobile side, and rights (WeChat coupons) require the creation of WeChat vouchers.
  - Business Hall Management: Adding, reviewing business halls, and managing gift inventory.
  - Reconciliation Management: Statistics of merchant and business hall performance.
  - System User Role Management: Add, edit, delete users/roles.
- H5 Sales Management Backend:
  - Store Management: Merchants independently add/edit store information applications, and list queries.
  - My Performance: Daily performance statistics and totals.
  - Coupon Management: Merchants independently apply for adding coupons.
  - Employee Management: Merchants independently manage employee accounts (user verification platform on the mini program end).
- WeChat Mini Program Merchant Verification Platform:
  - Verification: Verification of non-physical goods out of stock for ordinary merchants and physical goods out of stock for business halls.

**Responsibilities**:

- Participated in requirement analysis and review, and table design.
- Organized functional requirements, task allocation, and scheduling.
- Adjusted basic project modules, interfaced with the mobile side and WeChat side, and developed performance data functions.
- Deployed test and production environments.

**Advertising Platform**

- Java Development Engineer
- January 2023 - October 2023
- Hangzhou
- Project Address: https://aladdin.zj.chinamobile.com/Internet-advert-ssp/ad-td/#/login

**Project Description**: [Advertising Platform] integrates [GuangDianTong] and [JuLian Engine], combining two major advertising platforms to create, delete, edit, and upload projects (or plans), ads (or ad groups), creatives, materials, landing pages, etc., and retrieve daily data reports.

**Technology Selection**: Springboot, Sa-token, Mybatis-plus, Redis, MySQL, OSS, xxl-job, Docker

**Technical Description**: This project is a Springboot monolithic project using Springboot and Sa-token for the basic framework, Mybatis-plus for the persistence layer, Redis for caching, MySQL for data storage, OSS for resource storage, xxl-job for daily task scheduling, and Docker for container deployment.

**Main Modules**:

- Promotion Management: Tencent Ads, Toutiao Media Account, Promotion Plan, Ad CRUD.
- Data Reports: Querying multi-dimensional data of planned ads.
- Asset Management: Upload and query of materials, copywriting, etc.
- Management Center: System personnel, permissions management.

**Responsible Modules**:

- Account authorization for [GuangDianTong] and [JuLian Engine].
- Daily report data retrieval for each dimension of account advertising.
- Data calculation, query, and export of multi-dimensional report data.

**ZheNongJi**

- Java Development Engineer
- March 2022 - January 2023
- Hangzhou
- Project Address: [ZheLiBan Mini Program]
