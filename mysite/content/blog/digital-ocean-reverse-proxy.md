---
title: "Digital Ocean Reverse Proxy"
date: 2016-10-02T00:00:00+08:00
draft: false
tags: ["computer science", "infrastructure"]
---

我用 Digital ocean VPS 來做以下的事：

* 建立一個 reverse proxy
* 建立一個 zabbix 來監察我家server 的情況 （遲些有機會再說）


什麼是reverse proxy
簡單來說是一個http server，將VPS 收到的request, 轉向我家的 server.
原來這樣做可以做到 load balancing. 我這樣做是我想將家hosting 的網站掛到互聯網上去。
例如我想掛2個servers，一個係blog，一個係Jenkins
原來2個server 的 Address 係 abc.no-ip.org:80 (blog) 同理 abc.no-ip.org:6000 (jenkins)
現在透過 reverse proxy 可以比個好名佢。例如
www.abc.com (blog) -> abc.no-ip.org:80
jenkins.abc.com (jenkins) -> jenkins.no-ip.org:6000
而且又可以做SSL（為 dynamic dns address 做 SSL，儍的嗎？），一石二鳥。

 
Wikipedia也有一篇文去解釋，看不明上面可以去這裹看看https://zh.wikipedia.org/wiki/反向代理
 

Digital ocean 的文檔很利害，所以我就直接介紹給你們看。用在自家server 也行。
https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-reverse-proxy-for-apache
最重要的是以下的 config, 紅色的是我的 DDNS 地址

```
location / {
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
        proxy_pass http://abc.ddns-provider.net:8080;
}
```