# Zookeeper



# Zookeeper

[ZooKeeper源码分析与实战](https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/ZooKeeper%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90%E4%B8%8E%E5%AE%9E%E6%88%98-%E5%AE%8C)

etcd is used by kubernetes for the same purpose
[etcd和Zookeeper孰优孰劣？](https://www.modb.pro/db/323785)


## Handle Request

- [ ] [Request](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/Request.java)

- [ ] [SyncRequestProcessor](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/SyncRequestProcessor.java)

    Snapshot decided by how big log count and log size.

- [ ] [PrepRequestProcessor](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/PrepRequestProcessor.java)

- [ ] [FinalRequestProcessor](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/FinalRequestProcessor.java)


## Data structure

(ZooKeeper （四） 源码剖析：数据模型和存储)[https://juejin.cn/post/6844904163646652430]

- [ ] [ZKDatabase](https://github.com/apache/zookeeper/tree/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/ZKDatabase.java)

- [ ] [DataTree](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/DataTree.java)

    This is where the data is stored.

- [ ] [FileTxnSnapLog](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/persistence/FileTxnSnapLog.java)

    Single thread block write?

## Network

(ZooKeeper （三）源码剖析: 服务端网络连接层 NIO)[https://juejin.cn/post/6844904159167283213]

NIO Mechanism: [NIOServerCnxnFactory.java](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/NIOServerCnxnFactory.java)


## Watch node

The actual implementation is at [ZKDatabase](https://github.com/apache/zookeeper/blob/2cd0c23454071faf0a16c58edb2414591ae5c5c3/zookeeper-server/src/main/java/org/apache/zookeeper/server/ZKDatabase.java#L526) with the help of the DataTree

## Election

[ZooKeeper（二） 源码剖析: 群首选举](https://juejin.cn/post/6844904152804360200)


## ZAB

[Zookeeper (五) 源码剖析: Zab 协议](https://juejin.cn/post/6844904191194824711)

Leader -> request -> get ack -> send commit -> done

- [ ] [ProposalRequestProcessor](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/quorum/ProposalRequestProcessor.java)

- [ ] [CommitRequest](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/quorum/CommitProcessor.java) (under quorum)
 
- [ ] [AckRequestProcessor](https://github.com/apache/zookeeper/blob/master/zookeeper-server/src/main/java/org/apache/zookeeper/server/quorum/AckRequestProcessor.java)


- [ ] FinalRequest
