---
weight: 1
title: "Kafka"
date: "2022-08-21"
author: "Tom"
draft: false

lightgallery: false

toc:
  enable: true
  auto: true
---

# Kafka

## Producer

- [ ] [KafkaProducer](https://github.com/ymlai87416-oss/kafka/blob/150fd5b0b18c4761d8f7d7ba9a480aa9f622024f/clients/src/main/java/org/apache/kafka/clients/producer/KafkaProducer.java#L469)
- [ ] [Sender](https://github.com/ymlai87416-oss/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java)
- [ ] [NetworkClient](https://github.com/ymlai87416-oss/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/clients/NetworkClient.java)

## Consumer
- [ ] [KafkaConsumer](https://github.com/ymlai87416-oss/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/clients/consumer/KafkaConsumer.java)
- [ ] [Fetcher](https://github.com/ymlai87416-oss/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java)

## How Kafka keep things in kernel

[Kafka中Zero-Copy的相关总结](https://blog.csdn.net/funnyrand/article/details/125513774)
[Kafka零拷贝](https://zhuanlan.zhihu.com/p/78335525)

- [ ] [FileRecords](https://github.com/ymlai87416-oss/kafka/blob/150fd5b0b18c4761d8f7d7ba9a480aa9f622024f/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java#L294)

  The code finally reach a called ByteBuffer.allocateDirect()

  Direct vs. non-direct buffers
  A byte buffer is either direct or non-direct. Given a direct byte buffer, the Java virtual machine will make a best effort to perform native I/O operations directly upon it. That is, it will attempt to avoid copying the buffer's content to (or from) an intermediate buffer before (or after) each invocation of one of the underlying operating system's native I/O operations.

  A direct byte buffer may be created by invoking the allocateDirect factory method of this class. The buffers returned by this method typically have somewhat higher allocation and deallocation costs than non-direct buffers. The contents of direct buffers may reside outside of the normal garbage-collected heap, and so their impact upon the memory footprint of an application might not be obvious. It is therefore recommended that direct buffers be allocated primarily for large, long-lived buffers that are subject to the underlying system's native I/O operations. In general it is best to allocate direct buffers only when they yield a measureable gain in program performance.

  A direct byte buffer may also be created by mapping a region of a file directly into memory. An implementation of the Java platform may optionally support the creation of direct byte buffers from native code via JNI. If an instance of one of these kinds of buffers refers to an inaccessible region of memory then an attempt to access that region will not change the buffer's content and will cause an unspecified exception to be thrown either at the time of the access or at some later time.

  Whether a byte buffer is direct or non-direct may be determined by invoking its isDirect method. This method is provided so that explicit buffer management can be done in performance-critical code.
