# Data structures



## Union find

Shortcut: ds.uf

Time complexity: O(α(n))

Memory complexity: O(n)

```java
class UnionFind { // OOP style
    int[] p;
    int[] rank;
    int[] size;

    UnionFind(int N) {
        p = new int[N];
        rank = new int[N];
        size = new int[N];
        for (int i = 0; i < N; i++) p[i] = i;
    }

    void init(){
        for (int i = 0; i < p.length; i++) p[i] = i;
        Arrays.fill(rank, 0);
        Arrays.fill(size, 1);
    }
    int findSet(int i) { return (p[i] == i) ? i : (p[i] = findSet(p[i])); }

    boolean isSameSet(int i, int j) { return findSet(i) == findSet(j); }

    void unionSet(int i, int j) {
        if (!isSameSet(i, j)) { // if from different set
            int x = findSet(i), y = findSet(j);
            if (rank[x] > rank[y]) {
                p[y] = x; // rank keeps the tree short
                size[x] += size[y];
            }
            else {
                p[x] = y;
                size[y] += size[x];
                if (rank[x] == rank[y])
                    rank[y]++;
            }
        }
    }

    int getSetSize(int i){
        return size[i];
    }
};
```

Refer to: [UVA11503](https://github.com/ymlai87416/algorithm_practice/blob/master/java/src/main/java/DataStructure/UnionFind/UVA11503.java)

## Segment tree

Segment tree support online update and query
For range update, lazy propagation is needed

Shortcut: ds.st

Time complexity: 
- Build: O(nlogn)
- Query: O(log n)
- Update: O(log n)

Memory: O(n)

```java
class SegmentTree { // the segment tree is stored like a heap array
    private int[] st = new int[100001*4];
    private int[] A;
    private int n;

    private int left(int p) {
        return p << 1;
    } // same as binary heap operations

    private int right(int p) {
        return (p << 1) + 1;
    }

    private void build(int p, int L, int R) { // O(n)
        if (L == R) // as L == R, either one is fine
            st[p] = A[L];
        else { // recursively compute the values
            build(left(p), L, (L + R) / 2);
            build(right(p), (L + R) / 2 + 1, R);
            int p1 = st[left(p)], p2 = st[right(p)];
            st[p]= p1 * p2;
        }
    }

    /* This is individual update */
    public void update(int p, int val){
        update(1, p, val, 0, n-1);
    }

    public void update(int p, int idx, int val, int L, int R){
        if (L == R) // as L == R, either one is fine
            st[p] = val;
        else { // recursively compute the values
            if(L <= idx && idx <= (L+R)/2) update(left(p), idx, val, L, (L+R)/2);
            else if ((L+R)/2+1 <= idx && idx<= R)update(right(p), idx, val, (L+R)/2+1, R);
            int p1 = st[left(p)], p2 = st[right(p)];          //Never a node with only left or right child.
            st[p]= p1 * p2;
        }
    }

    /* Non optimized range update */
    public void updateRange(int i, int j, int val){
        updateRange(1, 0, n-1, i, j, val);
    }

    private void updateRange(int p, int L, int R, int i, int j, int val){
        if (L == R) // as L == R, either one is fine
            st[p] = val;
        else { // recursively compute the values
            if (L <= i && i <= (L + R) / 2)
                updateRange(left(p), L, (L + R) / 2, i, Math.min(j, (L + R) / 2), val);
            if ((L + R) / 2 + 1 <= j && j <= R)
                updateRange(right(p), (L + R) / 2 + 1, R, Math.max(i, (L + R) / 2 + 1), j, val);
            int p1 = st[left(p)], p2 = st[right(p)];          //Never a node with only left or right child.
            st[p] = p1 + p2;
        }
    }

    private int rmq(int p, int L, int R, int i, int j) { // O(log n)
        if (i > R || j < L) return Integer.MIN_VALUE; // current segment outside query range
        if (L >= i && R <= j) return st[p]; // inside query range
        // compute the min position in the left and right part of the interval
        int p1 = rmq(left(p), L, (L + R) / 2, i, j);
        int p2 = rmq(right(p), (L + R) / 2 + 1, R, i, j);
        if (p1 == Integer.MIN_VALUE) return p2; // if we try to access segment outside query
        if (p2 == Integer.MIN_VALUE) return p1; // same as above
        return p1 * p2; // as in build routine
    }

    public SegmentTree(int[] A, int size) {
        this.A = A;
        n = size;
        //Arrays.fill(st, 0);
        build(1, 0, n - 1); // recursive build
    }

    public int rmq(int i, int j) {
        return rmq(1, 0, n - 1, i, j);
    } // overloading
}

```

Refer to: []()

- Lazy operation: push()

Refer to: [UVA11402](https://github.com/ymlai87416/algorithm_practice/blob/master/java/src/main/java/DataStructure/TreeDataStructure/UVA11402.java)

- Segment tree on interval instead of update range of value.

## 2D Segment tree

Shortcut: ds.st2d

```java
class SegmentTree2D{
    int N;
    int M;
    int[][] A;
    SegmentTree[] st;
    final int INVALID = Integer.MIN_VALUE;
    
    public SegmentTree2D(int M, int N, int[][] A){
        this.N = N;
        this.M = M;
        this.A = A;
        st = new SegmentTree[M*4];
        
        build(1, 0, M-1);
    }
    
    private int left(int i){ return 2*i; }
    private int right(int i) { return 2*i+1; }
    
    private void mergeTree(SegmentTree dst, SegmentTree l, SegmentTree r){
        for(int i=0; i<4*N; ++i)
            dst.st[i] = l.st[i] + r.st[i];
    }
    
    public void build(int p, int L, int R){
        if(L == R){
            st[p] = new SegmentTree(N, A[L]);
        }
        else{
            int mid = (L+R)/2;
            build(left(p), L, mid);
            build(right(p), mid+1, R);
            st[p] = new SegmentTree(N);
            mergeTree(st[p], st[left(p)], st[right(p)]);
        }
    }
    
    public int rmq(int p, int Lx, int Rx, int Ly, int Ry, int lx, int rx, int ly, int ry){
        if(rx < Lx || lx > Rx){
            return INVALID;
        }
        else if(lx <= Lx && Rx <= rx){
            //now get the segment tree
            //System.out.println("D " + st[p].rmq(1, Ly, Ry, ly, ry));
            return st[p].rmq(1, Ly, Ry, ly, ry);
        }
        else{
            int mid = (Lx+Rx)/2;
            int l = rmq(left(p), Lx, mid, Ly, Ry, lx, rx, ly, ry);
            int r = rmq(right(p), mid+1, Rx, Ly, Ry, lx, rx, ly, ry);
            
            if(l == INVALID) return r;
            if(r == INVALID) return l;
            return l+r;
        }
    }
    
    public void update(int p, int Lx, int Rx, int Ly, int Ry, int ix, int iy, int v){
        if(Lx == Rx){
            st[p].update(1, Ly, Ry, iy, v);
        }
        else{
            int mid = (Lx+Rx)/2;
            if(Lx <=ix && ix <= mid)
                update(left(p), Lx, mid, Ly, Ry, ix, iy, v);
            else if(mid+1 <= ix && ix <= Rx)
                update(right(p), mid+1, Rx, Ly, Ry, ix, iy, v);
            
            mergeTree(st[p], st[left(p)], st[right(p)]);
        }
    }
    
    public String toString(){
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<4*M; ++i){
            if(st[i] != null)
                sb.append(i+ ": " + st[i] + "\n");
        }
        
        return sb.toString();
    }
}
```

Refer to: [308. Range Sum Query 2D - Mutable](https://leetcode.com/submissions/detail/780782444/)

Refer to: [UVA11297](https://github.com/ymlai87416/algorithm_practice/blob/master/java/src/main/java/DataStructure/TreeDataStructure/UVA11297.java)

## Fenwick tree

Shortcut: ds.ft

Time complexity: 
- Build: O(nlogn), but calling adjust on each element.
- Query: O(log n)
- Update: O(log n)

Memory: O(n) - less memory compare to segment tree

```java
class FenwickTree {
    private int[] ft; 
    private int[] nums;
    
    //0 is not used, please traslate index to 1-index
    public FenwickTree(int n) {
        ft = new int[n+1];
        this.nums = new int[n];
    } 
    public FenwickTree(int[] nums){
        ft = new int[nums.length+1];
        this.nums = nums;
        for(int i=0; i<nums.length; ++i)
            _adjust(i+1, nums[i]);
    }
    
    //0 base function
    void update(int k, int v){
        int diff = v - nums[k];
        _adjust(k+1, diff);
        nums[k] = v;
    }
    
    int rsq(int a, int b){
        return _rsq(a+1, b+1);
    }
    
    private int LSOne(int S){ return S & -S;}
    //1 base function
    int _rsq(int b) { 
        int sum = 0; for (; b != 0; b -= LSOne(b)) sum += ft[b];
        return sum; 
    }
    
    int _rsq(int a, int b) { 
        return _rsq(b) - (a == 1 ? 0 : _rsq(a - 1)); 
    }
    
    void _adjust(int k, int v) { 
        for (; k < ft.length; k += LSOne(k)) ft[k] += v; 
    }
};

```

Refer to [UVA12086](https://github.com/ymlai87416/algorithm_practice/blob/master/java/src/main/java/DataStructure/TreeDataStructure/UVA12086.java)

## 2D Fenwick tree

```java
class BIT2D{
    int M;
    int N;
    BIT[] ft;
    private int lsb(int x){return x & (-x); }
    
    public BIT2D(int M, int N, int[][] A){
        this.M = M;
        this.N = N;
        ft = new BIT[M+1];
        for(int i=0; i<=M; ++i)
            ft[i] = new BIT(N);
        
        for(int i=1; i<=M; ++i){
            for(int j=1; j<=N; ++j)
                adjust(i, j, A[i-1][j-1]);
        }
    }
    
    public void adjust(int i, int j, int v){
        for(; i<=M; i+=lsb(i)){
            ft[i].adjust(j, v);
        }
    }
    
    public int rsq(int ax, int ay, int bx, int by){
        return rsq(ay, bx, by) - rsq(ax-1, bx, by);
    }
    
    public int rsq(int a, int bx, int by){
        int sum = 0;
        for(; a>0; a-=lsb(a))
            sum += ft[a].rsq(bx, by);
        return sum;
    }
    
    public String toString(){
        StringBuilder sb = new StringBuilder();
        
        for(int i=1; i<=M; ++i)
            sb.append(i + ": " + ft[i] + "\n");
        return sb.toString();
    }
}
```

Refer to [Range Sum Query 2D - Mutable](https://leetcode.com/submissions/detail/781071691/)

## Heap

Not much used, can be replaced by PriorityQueue in most setting.

Update element in PriorityQueue replaced by either delete O(N) and insert again O(logN)
or being lazy and check if the element pop from PriorityQueue is the same as the latest record.

Application: 
It is inferor to linear scan if the scan is small.
Refer to [Longest Repeating Character Replacement](https://leetcode.com/submissions/detail/692559183/), which linear scan perform much faster.

TODO: There is currently no bubbleUp and bubbleDown implementation in my implementation of heap.

Refer: [Kth Largest Element in a Stream](https://leetcode.com/submissions/detail/627876806/)


### Quick select

Most Top K problem can also be solved by quick select, which have a better time complexity of O(N)

```java
int[] nums;
public int findKthLargest(int[] nums, int k) {
    this.nums = nums;
    return quickSelect(0, nums.length-1, nums.length-k);
}

Random r = new Random();

//k means position of desired element in sorted array.
int quickSelect(int left, int right, int k){
    //base case
    if(left == right) return nums[left];
    //choose a pivot index by random
    int pivotIndex = r.nextInt(right-left) + left;
    //call parititon
    pivotIndex = partition(left, right, pivotIndex);
    //from partition we know pivot is nth bigger
    //if n == k return pivot
    if(k == pivotIndex)
        return nums[k];
    //else if n < k => quickSelect(left, pivot-1, k)
    else if(k < pivotIndex)
        return quickSelect(left, pivotIndex-1, k);
    //else if n > k => quickSelect(pivot+1, right, k) 
    else
        return quickSelect(pivotIndex+1, right, k);
}

//left and right are inclusive
int partition(int left, int right, int pivotIndex){
    //create a variable call store index
    int storeIndex = left;
    int pivot = nums[pivotIndex];
    //move pivot to the rightmost
    swap(right, pivotIndex);
    //loop all the element and store the element smaller than pivot to left side (store index)
    for(int i=left; i<=right; ++i){
        if(nums[i] < pivot){
            swap(i, storeIndex);
            storeIndex++;
        }
        
    }
    //swap right with store index
    swap(storeIndex, right);
    //return store index
    return storeIndex;
}

void swap(int a, int b){
    int temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}
```

Refer: [Kth Largest Element in an Array](https://leetcode.com/submissions/detail/692620636/)


## Monotonic stack / heap

### Monotonic heap

Usually used for querying max/min in sliding windows

Refer: [Sliding Window Maximum](https://leetcode.com/submissions/detail/239296842/)
Refer: [Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/submissions/)

### Monotonic stack

Search for previous min or next min.

Refer: [Largest Rectangle in Histogram](https://leetcode.com/submissions/detail/237169540/)

Refer: [Maximal Rectangle](https://leetcode.com/submissions/detail/314810956/)

    Make use of Largest Rectange in Histogram

Refer: [Sum of Subarray Minimums](https://leetcode.com/submissions/detail/696897687/)
