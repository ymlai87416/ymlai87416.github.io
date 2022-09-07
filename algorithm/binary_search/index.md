# Binary search



## Finding mid

Wrong: mid = (high + low) / 2
Correct: mid = low + (high-low)/2

Consider case where high=-4 and low=-5, mid will be -4 which is high, so it will keep looping because you cannot reduce high value.

## Finding exact value

Where the exact value must be find
Inclusive version stop at low > high, while exclusive version stop at low == high.

```java
private int iterativeInclusive(){
    int low = 0, high = nums.length-1;
    while(low <= high){
        int mid = low + (high-low)/2;
    
        if(nums[mid] == target){
            return mid;
        }

        if(nums[mid] < target)
            low = mid+1;
        else
            high = mid-1;
    }
    
    return -1;
}

private int iterativeExclusive(){
    int low = 0, high = nums.length;
    while(low < high){
        int mid = low + (high-low)/2;
    
        if(nums[mid] == target){
            return mid;
        }

        if(nums[mid] < target)
            low = mid+1;
        else
            high = mid;
    }
    
    return -1;
}
```

Refer: [Binary Search](https://leetcode.com/submissions/detail/692206573/)


## Finding floor value or ceiling value

Better use inclusive high version.
For exclusive version, you have to search range says (0, 2),
then it can stucks with (0, 2) forever, because you can only assign end with mid+1, which is the end itself, no progress is made, so I have to handle arrays of length 2 also as base case.

```java
private int findK(long low, long high){
    if(low == high) return (int) low;
    long mid = low+(high-low)/2;  //fuck!! there introduce a bug, consider case -5, -4.
    int cnt = count(mid);
    
    if(cnt < k)
        return findK(mid+1, high);
    else
        return findK(low, mid);
}
```

Refer: [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/submissions/)

Refer: [Search Insert Position](https://leetcode.com/problems/search-insert-position/)

```java
//This is the example of finding higest value
int low, high, mid;
low = 0;
high = s.length()-1;
int lastGoodS = -1;

//low and high inclusive
while(low < high){
    mid = low + (high-low+1)/2;
    
    int spos = checkHaveDuplicate(mid);
    
    if(spos != -1){
        low = mid;
        lastGoodS = spos;
    }
    else{
        high = mid-1;
    }
}
```

Refer: [Longest Duplicate Substring](https://leetcode.com/submissions/detail/696974797/)

## Binary search using library function

```java
//exact value, just use the binarySearch and check for pos is positive.

private int searchGEq(long[] arr, int start, int end, long value){
    int pos = Arrays.binarySearch(arr, start, end, value);
    
    if(pos >=0){
        //ensure it is the leftmost  [value, ..)
        while(pos-1 >=start && arr[pos-1] == value) --pos;
        
        return pos;
    }
    else{
        //this is the insert position
        // 0 1 3, search for 2, I want to return 3
        //     ^
        return -(pos+1);
    }
}

private int searchLEq(long[] arr, int start, int end, long value){
    int pos = Arrays.binarySearch(arr, start, end, value);
    
    if(pos >=0){
        //ensure it is the rightmost  (... value]
        while(pos+1 < end && arr[pos+1] == value) ++pos;
        
        return pos;
    }
    else{
        // 0 1 3, search for 2, I want to return 1
        //     ^
        return -(pos+1)-1;
    }
}
```


## Searching in sorted 2D array

The top-right or left-bottom corner search approach is O(sqrt(K)) search algorithm on the linear version. 
Time complexity: O(M+N)

## Binary search tree

```java
//TODO: to be completed
```

## Searching on K-dimension

This is the extension of BST in higher dimension

```java
class KDTree{
    int[][] points;
    Node root;
    int dimension;
    int N;
    Random r;
    
    public KDTree(int dimension){
        this.dimension = dimension;
    }
    
    public void add(int[] point){
        root = addHelper(point, root, 0);
    }
    
    public Node addHelper(int[] point, Node cur, int lvl){
        if(cur == null)
            return new Node(point, lvl % dimension);
        if(point[cur.dim] < cur.value[cur.dim] ){
            cur.left = addHelper(point, cur.left, lvl+1);
        }
        else{
            cur.right = addHelper(point, cur.right, lvl+1);
        }
        
        return cur;
    }
    
    //how to find k nearest
    PriorityQueue<Tuple> pq;
    int k = -1;
    public int[][] kNearestPoint(int[] point, int k){
        pq = new PriorityQueue<>();
        this.k = k;
        
        kNearestPointHelper(point, root);
        
        int[][] result = new int[k][];
        for(int i=0; i<k; ++i)
            result[i] = pq.poll().point;
        
        return result;
    }
    
    public void kNearestPointHelper(int[] point, Node curr){
        
        if(curr == null) return;
        //System.out.println("T: " + curr.value[0] + "," + curr.value[1]);
        
        int cv = point[curr.dim];
        //find the dist between root.
        long curDist = dist(point, curr.value);
        if(pq.size() < k){
            pq.offer(new Tuple(curDist, curr.value) );
        }
        else if(pq.peek().dist > curDist){
            pq.poll();
            pq.offer(new Tuple(curDist, curr.value) );
        }
        
        if(cv >= curr.value[curr.dim]){
            kNearestPointHelper(point, curr.right);
            
            //traverse also left?
            long distBoundBoxOther = point[curr.dim] - curr.value[curr.dim];
            distBoundBoxOther = distBoundBoxOther * distBoundBoxOther;
            
            if(pq.size() < k || distBoundBoxOther < pq.peek().dist ){
                kNearestPointHelper(point, curr.left);
            }
        }
        else {
            kNearestPointHelper(point, curr.left);
            
            //traverse also left?
            long distBoundBoxOther = point[curr.dim] - curr.value[curr.dim];
            distBoundBoxOther = distBoundBoxOther * distBoundBoxOther;
            
            if(pq.size() < k || distBoundBoxOther < pq.peek().dist ){
                kNearestPointHelper(point, curr.right);
            }
        }
        
    }
    
    private long dist(int[] pt1, int[] pt2){
        long diffX = pt1[0] -pt2[0];
        long diffY = pt1[1] -pt2[1];
        return diffX * diffX + diffY * diffY;
    }

}

class Node{
    public int[] value;
    public int dim;
    public Node left;
    public Node right;
    
    public Node(int[] v, int d){
        value = v;
        dim = d;
    }
}

class Tuple implements Comparable<Tuple>{
    public long dist;
    public int[] point;
    
    public Tuple(long d, int[] p){
        dist = d;
        point = p;
    }
    
    public int compareTo(Tuple t){
        if(dist == t.dist)
            return 0;
        else if(dist < t.dist) return 1;
        else return -1;
    }
}

```

Reference:
[K Closest Points to Origin](https://leetcode.com/submissions/detail/790663659/)
[Queries on Number of Points Inside a Circle](https://leetcode.com/submissions/detail/790694277/)
