# Java Development kit



# JDK 

## Study material

Clone on 19 Aug
https://github.com/ymlai87416-oss/jdk
https://github.com/ymlai87416-oss/cglib

https://github.com/kangjianwei/LearningJDK/blob/master/%E5%B7%B2%E9%98%85%E4%BB%A3%E7%A0%81%E6%B8%85%E5%8D%95_%E6%8C%89%E5%8A%9F%E8%83%BD%E6%8E%92%E5%BA%8F.md


## Class loader

* How to load java class

## Compile and JIT

* How JIT is being done?

## Data structure

Java lib is java.util.*, and the code path is [Link](https://github.com/openjdk/jdk/tree/4b03e135e157cb6cc9ba5eebf4a1f1b6e9143f48/src/java.base/share/classes/java/util)

1. ArrayList, [LinkedLis](https://github.com/openjdk/jdk/blob/4b03e135e157cb6cc9ba5eebf4a1f1b6e9143f48/src/java.base/share/classes/java/util/LinkedList.java):

    * The class Node<E> is private, so it never return to outside. [Link](https://github.com/openjdk/jdk/blob/4b03e135e157cb6cc9ba5eebf4a1f1b6e9143f48/src/java.base/share/classes/java/util/LinkedList.java#L974)

2. [HashSet](https://github.com/openjdk/jdk/blob/4b03e135e157cb6cc9ba5eebf4a1f1b6e9143f48/src/java.base/share/classes/java/util/HashSet.java), [HashMap](https://github.com/openjdk/jdk/blob/4b03e135e157cb6cc9ba5eebf4a1f1b6e9143f48/src/java.base/share/classes/java/util/HashMap.java), [ConcurrentHashMap](https://github.com/openjdk/jdk/blob/4b03e135e157cb6cc9ba5eebf4a1f1b6e9143f48/src/java.base/share/classes/java/util/concurrent/ConcurrentHashMap.java#L763)

    * HashSet use HashMap to implement.
    * HashMap Internal parameter: load factor=0.75, max cap = 1024^3
    * HashMap if key list longer than 8, convert it to tree (Link)[https://github.com/openjdk/jdk/blob/4b03e135e157cb6cc9ba5eebf4a1f1b6e9143f48/src/java.base/share/classes/java/util/HashMap.java#L761]
    * before 1.7, it is front insert O(1), now it is back insert O(8), or O(log n)
    * ConcurrentHashMap use CAS to keep track of cell version and sychronized the rest.

3. TreeMap

5. Stack

6. [PriorityQueue](https://github.com/ymlai87416-oss/jdk/blob/master/src/java.base/share/classes/java/util/PriorityQueue.java)

    * A simple heap implements sift-up and sift-down

7. Queue and ArrayDeque

    * [ArrayDeque](https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/ArrayDeque.java) is just a circular array

### Concurrent


1. Thread: [Link](https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/lang/Thread.java)

    * locate at [java.lang](https://github.com/openjdk/jdk/tree/master/src/java.base/share/classes/java/lang)
    * Thread share the same classloader

2. CAS: 

    * locate at [java.util.concurrent.atomic](https://github.com/openjdk/jdk/tree/master/src/java.base/share/classes/java/util/concurrent/atomic)
    * There is a variable U of [Unsafe](https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/jdk/internal/misc/Unsafe.java). A lot of native method there include compareAndSetInt()
    * Seems take times when there is a lot of state.
    * Implement spinning lock by CAS thread id to internal variable.

4. Reentrant lock:

    * Source code at [java.util.concurrent.locks.ReentrantLock](https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/concurrent/locks/ReentrantLock.java)
    * Similiar to synchronized(lock)
    * have conditions so await = wait() and signal = notify() and signalAll = notifyAll()
    * Only 1 thread can enter the lock section

5. Semaphore

    * Source code at [java.util.concurrent](https://github.com/ymlai87416-oss/jdk/blob/master/src/java.base/share/classes/java/util/concurrent/Semaphore.java)
    * AbstractQueueSynchronizer -> Sync -> FairSync and NonFairSync.
    * Leetcode question Dinning philosopher seems not working

6. Barrier

    * Source code at [java.util.concurrent](https://github.com/ymlai87416-oss/jdk/blob/master/src/java.base/share/classes/java/util/concurrent/CyclicBarrier.java)   
    * Use to join a number of thread. Use spinning when wait.
    * Can also run some Runnable when it is tripped.

### Garbage collector

* The garbage collector is locate at jdk.
* The garbage collector code is locate at [Here](https://github.com/ymlai87416-oss/jdk/tree/master/src/hotspot/share/gc)
* Seems most of them have C1 and C2 folder (C1 for client and C2 for server)
* Need a long read

### Code injection

cglib / aspectJ / byteBuddy

