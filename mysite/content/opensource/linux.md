---
weight: 1
title: "Linux"
date: "2022-08-21"
author: "Tom"
draft: false

lightgallery: false

toc:
  enable: true
  auto: true
---

# Linux

[Linux System Programming 6 Hours Course](https://www.youtube.com/watch?v=6OSeJFo6GOc&list=PLGCybmGfHKDM6QvZ5cB4uWL-t3ACHJ7wN)


## Compiling on Fedora

Run the following commands

```sh
## cloning project
cd ~/GitProject
git clone https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/

## installing dependencies
sudo dnf install fedpkg fedora-packager rpmdevtools ncurses-devel pesign grubby
sudo dnf install qt5-qtbase-devel libXi-devel gcc-c++


```

## Study resources



## Network

### OSI model

1. Physical
2. Data link -> This is the driver
3. Network -> This is IP layer
4. Transport -> This is TCP/UDP layer
5. Session -> Socket.accept() layer
6. Presentation -> GSON library
7. Application

* TCP on IP [Code](https://github.com/ymlai87416-oss/linux/blob/master/net/ipv4/tcp.c)

    * 3 ways for establish connection
    * 4 ways for closing connection, because both client and server may have data left for sending.

* UDP on IP [Code](https://github.com/ymlai87416-oss/linux/blob/master/net/ipv4/udp.c)

* epoll (https://www.youtube.com/watch?v=WfJodwornTM)
    Efficient as it only returned socket/file which have changes.


### Mail list and bug 

* https://bugzilla.kernel.org/
