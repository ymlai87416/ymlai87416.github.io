---
weight: 1
title: "Spring"
date: "2022-08-21"
author: "Tom"
draft: false

lightgallery: false

toc:
  enable: true
  auto: true
---

## Spring

Spring popular library:
* doFilterInternal
* HandlerMethodIvoker
* AnnotationMethodHandlerAdapter
* HttpMessageConverter


## Spring boot

Useful map: [Link](https://cloud.tencent.com/developer/article/1595466)

Spring boot popular library:

* When called SpringApplication.run(...), Here is the [code](https://github.com/ymlai87416-oss/spring-boot/blob/2cdaab59f6397764d4bcf2ab05d8a283d090433e/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/SpringApplication.java#L1302)


* Starter projects:

    Use to simplified the dependency.

    All located under the [spring-boot-starters](https://github.com/ymlai87416-oss/spring-boot/tree/main/spring-boot-project/spring-boot-starters)

* Autoconfig

    Locate at [org/springframework/boot/autoconfigure/](https://github.com/ymlai87416-oss/spring-boot/tree/main/spring-boot-project/spring-boot-autoconfigure/src/main/java/org/springframework/boot/autoconfigure)

    Simplify so that you can use YAML and ride on default value.

* Run once [CommandLineRunner](https://github.com/ymlai87416-oss/spring-boot/blob/main/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/CommandLineRunner.java) or [ApplicationRunner](https://github.com/ymlai87416-oss/spring-boot/blob/main/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/ApplicationRunner.java)

    Can also be handled by event @EventListener(ApplicationReadyEvent.class)

### AutoConfiguration 


## Spring cloud