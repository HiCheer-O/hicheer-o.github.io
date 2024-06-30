import{_ as d,r as l,o as a,c as i,b as r,d as t}from"./app-CR8Egssm.js";const n={},o=t('<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h3><p>OK 朋友们在开始之前问一下问题，当然也给了一定答案！！</p><ul><li><p>单体项目为什么要转成微服务？</p><p>大多人应该都是抱着学习的态度来学习的，我们工作生涯中可能听说过微服务是为了提高项目的稳定性，防止一个模块有问题影响到其他的模块，便于大型项目的更新维护。</p></li><li><p>转成微服务给我带来了那些问题？</p><p>一般从单体项目升级到微服务，其实会有一系列的问题会出现。例如：各个服务间如何通信，多个服务 token 如何共享，一个代码块中调用了多个服务间的接口，如何保证事务等等。这些问题在单体架构中是不存在或者解决是很简单的，毕竟都在一起。如果你在单体项目中没有思考过这些问题的话，在微服务中不得不考虑这些问题。</p></li><li><p>如何解决这些问题？</p><p>目前这些微服务问题市面上已经有人给了我们解决方案，无非就是项目中引入相关依赖，写一些代码配置类，可能有些解决方案用到外置的程序，配合我们的代码实现来解决这些问题的。</p></li><li><p>确定有必要转微服务？</p><p>微服务架构有很多注意的点其实有很多的。那些小团队业务量小的真心没必要升级微服务，因为微服务是了提高项目的稳定性，和大型团队的项目维护管理，为以后用户量增大做分布式做准备的。单体项目的不需要考虑太多问题，而且相同请求下，单体是比微服务效率要高的，因为少了很多中间的组件，不会有服务间的网络通信延迟。</p></li></ul><h3 id="微服务中一个请求过来" tabindex="-1"><a class="header-anchor" href="#微服务中一个请求过来"><span>微服务中一个请求过来</span></a></h3>',4),s=t('<ol><li></li></ol><table><thead><tr><th style="text-align:left;">微服务类型</th><th>相关组件</th><th>作用</th></tr></thead><tbody><tr><td style="text-align:left;">服务注册发现</td><td>Eureka, Consul, ZooKeeper, etcd</td><td>用于服务注册和发现，提供了高可用的服务注册中心</td></tr><tr><td style="text-align:left;">负载均衡</td><td>Ribbon, Spring Cloud LoadBalancer</td><td>用于将请求分发到不同的服务实例，提高系统的性能和可用性</td></tr><tr><td style="text-align:left;">服务调用</td><td>Feign, WebClient, RestTemplate</td><td>用于在服务之间进行通信，实现服务之间的调用和交互</td></tr><tr><td style="text-align:left;">断路器</td><td>Hystrix, Resilience4j、Sentinel</td><td>用于在服务之间进行通信时，处理潜在的故障和延迟</td></tr><tr><td style="text-align:left;">配置管理</td><td>Spring Cloud Config, Consul, etcd, ZooKeeper</td><td>用于集中管理微服务的配置信息，并实现配置的动态更新</td></tr><tr><td style="text-align:left;">服务监控</td><td>Spring Boot Actuator, Spring Cloud Sleuth, Micrometer</td><td>用于监控微服务的运行状态、性能指标和调用链分析</td></tr><tr><td style="text-align:left;">日志管理</td><td>ELK Stack, Fluentd, Logstash, Log4j2</td><td>用于收集、存储和分析微服务产生的日志信息</td></tr><tr><td style="text-align:left;">安全认证</td><td>Spring Security, OAuth2, JWT</td><td>用于保护微服务的安全性，实现身份验证和授权</td></tr><tr><td style="text-align:left;">服务网格</td><td>Zuul、Istio, Spring Cloud Gateway, Spring Cloud Circuit Breaker</td><td>提供了微服务之间的可靠通信、安全性和流量控制等功能</td></tr><tr><td style="text-align:left;">任务调度</td><td>Spring Cloud Data Flow, Spring Batch</td><td>用于调度和管理微服务的作业和任务执行</td></tr><tr><td style="text-align:left;">事务</td><td>Seatal</td><td></td></tr><tr><td style="text-align:left;">消息队列</td><td>Kafka、RabbitMQ</td><td></td></tr><tr><td style="text-align:left;"></td><td></td><td></td></tr></tbody></table><h3 id="未完成" tabindex="-1"><a class="header-anchor" href="#未完成"><span>未完成</span></a></h3>',3);function c(p,h){const e=l("FlowChart");return a(),i("div",null,[o,r(e,{id:"flowchart-43",code:"eJwrLrG1Ky5JLCqxUni6p+Hp8m6uVFu71LwUK4Xnuyc/mzufKz21pDyxEqioNKkov7QkMy8VKLV34tPWzVyZxT756Zl5tnbJ+XkpmSWZ+XlWCs9mrH86Ydnzmbuf7p3KlVhakoGmEyzxsnPLs7nNXFzFJbp2EPM1clLTSjS5ABFdQLg=",preset:"vue"}),s])}const u=d(n,[["render",c],["__file","index.html.vue"]]),g=JSON.parse(`{"path":"/article/bwowysm9/","title":"单体服务到微服务","lang":"zh-CN","frontmatter":{"title":"单体服务到微服务","author":"HiCheer","createTime":"2024/05/30 01:27:03","permalink":"/article/bwowysm9/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"微服务中一个请求过来","slug":"微服务中一个请求过来","link":"#微服务中一个请求过来","children":[]},{"level":3,"title":"未完成","slug":"未完成","link":"#未完成","children":[]}],"isBlogPost":true,"readingTime":{"minutes":2.94,"words":882},"git":{"updatedTime":1718916878000,"contributors":[{"name":"HiCheer-O","email":"chendangdang1998@gmail.com","commits":2}]},"filePathRelative":"博客/后端/java/SpringCloud.md","categoryList":[{"type":10002,"name":"博客"},{"type":10003,"name":"后端"},{"type":10012,"name":"java"}]}`);export{u as comp,g as data};
