# Web server


# Webserver

## Tomcat
[Java 全栈知识体系](https://pdai.tech/md/framework/tomcat/tomcat-x-container-pipline.html)

* Startup:
    - [ ] [Main() and Bootstrap](https://github.com/ymlai87416-oss/tomcat/blob/00c6bc21a05a387114d4f26002d251f5be9dab0b/java/org/apache/catalina/startup/Bootstrap.java#L438) Main function at tomcat/java/org/apache/catalina/startup/Bootstrap.java
    - [ ] [Catalina](https://github.com/ymlai87416-oss/tomcat/blob/main/java/org/apache/catalina/startup/Catalina.java) Now start the application.

* tomcat 首先是个http服务器，关注点有tcp连接的处理，http协议的解析等，

* 然后是个java servlet容器，关注点有应用的加载,classloader隔离等，同时tomcat支持jsp,关注点有jsp的语法解析,动态编译，动态加载等。

* 当然作为成熟的容器，还有许多管理功能监控功能等。


## Netty

* TBC


## Nginx

[Why does node.js scale? Libuv & epoll & fcntl](https://www.youtube.com/watch?v=vyPzHBKa88w)

[理解 Nginx 源码](https://www.kancloud.cn/digest/understandingnginx/202588)

- [ ] Init [nginx.c](https://github.com/ymlai87416-oss/nginx/blob/master/src/core/nginx.c)

