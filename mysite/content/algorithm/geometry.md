---
weight: 1
title: "Geometry"
date: "2022-04-04"
author: "Tom"
draft: true

lightgallery: false

toc:
  enable: true
  auto: true
---

# geometry

This is the library for the geometry

## Point

Operations include:

* Sorting
* Equal
* Distance
* Rotate

```java

```

Refer: []()

## Line

Operations include:
* 2 points to 1 line
* Parallel
* Intersection point
* line segment
* vector
* vector translation
* point to line distance
* point to line segment distance
* angle between two lines
* determine a point is on left/right side of a line


```java
class Line implements Comparable<Line>{
    public int dy;
    public int dx;
    public int c;

    public Line(int dx, int dy, int c){
        this.dx = dx;
        this.dy = dy;
        this.c = c;
    }

    @Override
    public int compareTo(Line o) {
        if(dx == o.dx){
            if(dy == o.dy){
                return c - o.c;
            }
            else
                return dy - o.dy;
        }
        else return dx-o.dx;
    }

    @Override
    public boolean equals(Object o){
        if(o instanceof Line){
            Line ol = (Line)o;
            return ol.dx == dx && ol.dy == dy && ol.c ==  c;
        }
        else
            return false;
    }

    @Override
    public int hashCode(){
        return Integer.hashCode(dx+dy+c);
    }
}
```

Refer: [Max Point on a Line](https://leetcode.com/submissions/detail/238430333/) 

## Circle

Operations:
* inside circle
* circle by 2 points and radius

```java
```

Refer: []() 

## triangle

Operations:
* Area by Heron's formula
* in-circle
* 3 points touching in-circle
* circumscribed circle
* center of circumscribed circle
* cosine law
* sin law
* Pythagorean theorem and tuples

# Quadrilaterals

Operations:
* Rectangle
* Square
* Trapezium
* Parallelogram
* Kite
* Rhombus

## polygon

Operations:

* Representation

```java
//a list of points counter-clockwise
// 6 points, entered in counter clockwise order, 0-based indexing
vector<point> P;
P.push_back(point(1, 1)); // P0
P.push_back(point(3, 3)); // P1
P.push_back(point(9, 1)); // P2
P.push_back(point(12, 4)); // P3
P.push_back(point(9, 7)); // P4
P.push_back(point(1, 7)); // P5
P.push_back(P[0]); // important: loop back
```

* Parameters of polygon

```java
// returns the perimeter, which is the sum of Euclidian distances
// of consecutive line segments (polygon edges)
double perimeter(const vector<point> &P) {
double result = 0.0;
for (int i = 0; i < (int)P.size()-1; i++) // remember that P[0] = P[n-1]
result += dist(P[i], P[i+1]);
return result; }
```

* Area of polygon

```java

```

* Checking a polygon is convex

```java

```

* A point is inside a polygon

```java
```

* Cutting polygon with a straight line

```java

```

* Finding covex hull

```java

```



## Transformation

The rotation matrix is ![image](http://planning.cs.uiuc.edu/img807.gif)

Refer: [Rotate Image](https://leetcode.com/submissions/detail/628337089/)