---
weight: 1
title: "Dynamic programming"
date: "2022-04-04"
author: "Tom"
draft: false

lightgallery: false

toc:
  enable: true
  auto: true
---

# Dynamic programming

## Type

* Get idea by recursion

* Get idea by growing




## Longest increasing subsequence

Very classic algorithm. 
Time complexity: O(nlog(n))
Space complexity: O(n)

Refer: [Longest Increasing Subsequence](https://leetcode.com/submissions/detail/690868527/)

In real life, it is much easier to fix the O(n^2) algorithm

```
L(i) = 1 + max( L(j) ) where 0 < j < i and arr[j] < arr[i]; or
L(i) = 1, if no such j exists.
```

Refer to: [2311. Longest Binary Subsequence Less Than or Equal to K](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/discuss/2168203/LIS-or-Longest-Increasing-Subsequence-Logic)

## Travelling salesman

Shortcut: dp.tsp

Time complexity: from O(2!) => O(2^n)
Space complexity: O(2^n)

```java
//this version use adj matrix
//please change to use adj list
static =11
static boolean[][] vis = new boolean[11][1 << MAX_NODE];

int travellingSalesman (int end, int mask)
{
    int bitSet = NumberOfSetBits(mask);
    if(bitSet == point-1){
        if((mask & 1) == 0)   //mask left only starting position not set.
            return 0;
        else
            return Integer.MAX_VALUE;
    }

    if((mask & (1 << end)) == 1) return Integer.MAX_VALUE;
    if(end == 0) return Integer.MAX_VALUE;      //end cannot be 0 as long as the size > 1

    if (vis[end][mask]) return val[end][mask];
    vis[end][mask] = true;

    int ans = Integer.MAX_VALUE;
    int cost;

    for ( int i = 0; i < point; i++ ) {
        if(i == end) continue;
        if ((mask & (1 << i)) == 0 ) {
            int temp = dp (i, mask | (1 << end));
            if(temp == Integer.MAX_VALUE) continue;
            cost = temp + dist[i][end];
            if ( ans > cost ) ans = cost;
        }
    }

    return val[end][mask] = ans;
}

static int NumberOfSetBits(int i)
{
    i = i - ((i >>> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    return (((i + (i >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24;
}
```