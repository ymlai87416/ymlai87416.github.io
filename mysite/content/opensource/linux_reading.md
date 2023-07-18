---
weight: 1
title: "Linux reading"
date: "2022-08-21"
author: "Tom"
draft: true

lightgallery: false

toc:
  enable: true
  auto: true
---

## Focus

- Focus on the strategy of study but not the details

## Useful command

```sh
# To compile

# To compile according to spec

```



## Folder

https://elixir.bootlin.com/linux/latest/source

- [ ] Documentations
- [ ] Licenses
    List of license
- [ ] arch
    Only interested in ia64 and arm, risc-v is a new area for recentl commit
- [ ] block
    What is the meaning of block layer here means?
- [ ] certs
    contains certs and blacklist hash
- [ ] crypto
    a list of crypto algorithm and the testing suit
- [ ] drivers
    So how the gpu driver is working?
- [ ] fs
    There is a lot of filesystem here
- [ ] include
    This is a list of include file, just mimic the root directory
- [ ] init
    This is where everything starts.
- [ ] io_uring
    New API for the I/O, for each operation, it does has *.c and *.h
    Efficient IO with io_uring: https://kernel.dk/io_uring.pdf 
    work by facebook?
- [ ] ipc
    Interprocess communication
- [ ] kernel
    a set of linux internal API, including famous printk
- [ ] lib
    a set of data structure and library
- [ ] mm
    a ilist of command related to memeory management
- [ ] net
    a set of net driver, tcp/udp ipv4/6
- [ ] rust
    only alloc is here, don't know why it is the case/ maybe use in making drvier in future
- [ ] samples
    a list of demo and sample
- [ ] scripts
    a list of script to speed up kernel development
- [ ] security
    selinux + appamour + whatever I seldom use
- [ ] sound
    a list of sound driver. x86=intel internal sound card
- [ ] tools 
    a set of tools
- [ ] usr
    what is initramfs actually?
- [ ] virt
    only contains kvm stuff, wonder how docker is implemented
- Kbuild
- Kconfig
- MAINTAINERS
- Makefile
- README

## Resources Books
- [ ] Linux Kernel Development 3rd Edition
- [ ] Understanding Linux Kernel
- [ ] Linux driver development
- [ ] M2 Linux development
- [ ] Quick walkthrough: https://www.youtube.com/watch?v=15-ZVimSHTs&list=PL6S9AqLQkFpongEA75M15_BlQBC9rTdd8&index=15


## Go through the following system
- [ ] memory
- [ ] driver
- [ ] scheduler and process
- [ ] modules
    - [linux/module.h](https://github.com/torvalds/linux/blob/master/include/linux/module.h)
    - [linux/init.h](https://github.com/torvalds/linux/blob/master/include/linux/init.h)
    - [kernel/module.c](https://elixir.bootlin.com/linux/latest/source/include/linux/syscalls.h#L647)
        This file still there until 5.18, but not anymore
    - [linux/errno.h](https://github.com/torvalds/linux/blob/master/include/linux/errno.h)
    - [linux/moduleparam.h](https://github.com/torvalds/linux/blob/master/include/linux/moduleparam.h)
    - [linux/stat.h](https://github.com/torvalds/linux/blob/master/include/linux/stat.h)
    - [linux/version.h](under include/generated/uapi/linux/version.h)
    - [linux/kernel.h](https://github.com/torvalds/linux/blob/master/include/linux/kernel.h)
    - [linux/fs.h](https://github.com/torvalds/linux/blob/master/include/linux/fs.h)
        The printk include file
    - https://kernelnewbies.org/FAQ/InitExitMacros for __init and __initdata function attributes
    - [linux/kdev_t.h](https://github.com/torvalds/linux/blob/master/include/linux/kdev_t.h)
    - [linux/cdev.h](https://github.com/torvalds/linux/blob/master/include/linux/cdev.h)
    - [linux/types.h](https://github.com/torvalds/linux/blob/master/include/linux/types.h)
    - [asm/uaccess.h](https://github.com/torvalds/linux/blob/master/include/asm-generic/uaccess.h)
- [ ] process
    - [asm/current.h](https://github.com/torvalds/linux/blob/master/include/asm-generic/current.h)
    - [linux/sched.h](https://github.com/torvalds/linux/blob/master/include/linux/sched.h)
- [ ] concurrency
    - [asm/semaphore.h] 
    - [linux/rwsem.h] read/write semaphores - allow multiple read
    - [linux/completion.h]
    - [linux/spinlock.h]
- [ ] char device
    - [linux/types.h]
- [ ] usb device
    - [linux/usb.h](https://github.com/torvalds/linux/blob/master/include/linux/usb.h)
- [ ] memory
    - [linux/mempool.h](https://github.com/torvalds/linux/blob/master/include/linux/mempool.h)
    - [asm/pgtable.h]

## Interesting term
BPF - A description is that BPF is a verified-to-be-safe, fast to switch-to, mechanism, for running code in Linux kernel space to react to events such as function calls, function returns, and trace points in kernel or user space.
Mach
ftrace
kernel-shark


https://marc.info/?q=about
https://bugzilla.kernel.org/show_bug.cgi?id=217342
https://hackfoldr.org/linux/https%253A%252F%252Fhackmd.io%252Fs%252FSJTuuG9a7
https://lwn.net/
https://kernelnewbies.org/