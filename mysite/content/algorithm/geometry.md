---
weight: 1
title: "Geometry"
date: "2022-04-04"
author: "Tom"
draft: false

lightgallery: false

toc:
  enable: true
  auto: true
---

# geometry

This is the library for the geometry

If integer is available, do integer operation, or just BigDouble
If double is available, compare them by 1e-9.

## Point
Operations include:

* Sorting
* Equal

Double version 

```java
class Point implements Comparable<Point>{
    double x;
    double y;
    public Point(double x, double y){
        this.x = x; this.y = y;
    }

    public int compareTo(Point p){
        if(Math.abs(x - p.x) > EPS)
            return x < p.x ? -1 : 1;
        return y < p.y ? -1 : 1;
    }

    public boolean equals(Point p){
        return Math.abs(x - p.x) < EPS && Math.abs(y - p.y) < EPS;
    }
}

class Point_I implements Comparable<Point_I>{
    int x;
    int y;
    public Point_I(int x, int y){
        this.x = x; this.y = y;
    }

    public int compareTo(Point_I p){
        if(Math.abs(x - p.x) > EPS)
            return x < p.x ? -1 : 1;
        return y < p.y ? -1 : 1;
    }

    public boolean equals(Point_I p){
        return (x - p.x) == 0 && (y - p.y) == 0;
    }
}
```

* Distance

```java
double distance(Point p1, Point p2){
    double dx = p1.x - p2.x;
    double dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
```

* Rotate

```java
// rotate p by theta degrees CCW w.r.t origin (0, 0)
Point rotate(Point p, double theta){
    double rad = theta * PI / 180.0; // multiply theta with PI / 180.0
    double x = p.x * cos(rad) - p.y * sin(rad);
    double y = p.x * sin(rad) + p.y * cos(rad);
    return point(x, y);
}
```

## Line

There are multiple way to define a line.
Define a line by slope and y-intercept or by ax+by+c = 0

Additional b make the comparison complicated so we try to fix it at 1.0
If we use slope and y-intercept, we need to deal with infinity slope.

```java
class Line {
    double a;
    double b; 
    double c;

    static Line pointsToLine(Point p1, Point p2){
        if(Math.abs(p1.x - p2.x) < EPS){
            return new Line(1.0, 0.0, -p1.x);
        }
        else{
            double a = -(p2.y - p1.y) / (p2.x - p1.x);
            double b = 1.0;
            double c = -(a * p1.x + b * p1.y);
            return new Line(a, b, c);
        }
    }

    Line(double a, double b, double c){
        this.a = a; this.b = b; this.c = c;
    }

    static boolean areParallel(Line l1, Line l2){
        return Math.abs(l1.a - l2.a) < EPS && Math.abs(l1.b - l2.b) < EPS;
    }

    static boolean areSame(Line l1, Line l2){
        return areParallel(l1, l2) && Math.abs(l1.c - l2.c) < EPS;
    }

    static Point areIntersect(Line l1, Line l2){
        if(areParallel(l1, l2)) return null;
        
        double x = (l2.b * l1.c - l1.b * l2.c) / (l2.a * l1.b - l1.a * l2.b);
        if(Math.abs(l1.b) > EPS)
            return new Point(x, -(l1.a * x + l1.c));
        else
            return new Point(x, -(l2.a * x + l2.c));
    }
}
```

### Line segment

Line segment = line with 2 end points.

### Vector

```java
class Vector{
    double x;
    double y;
    public Vector(double x, double y){
        this.x = x; this.y = y;
    }

    public Vector toVector(Point a, Point b){
        return new Vector(b.x - a.x, b.y - a.y);
    }

    public Vector scale(double s){
        return new Vector(x * s, y * s);
    }

    public Point translate(Point p){
        return new Point(p.x + x, p.y+y);
    }

    static double dot(Vector b){
        //projection of this vector on b
        return x * b.x + y * b.y;
    }

    public double normSq(){
        return x * x + y * y;
    }

    public double cross(Vector b){
        //cross product
        return x * b.y - y * b.x;
    }
}
```

* Distance to line

```java
double distanceToLine(Point p, Point a, Point b){
    Vector ap = new Vector(a, p);
    Vector ab = new Vector(a, b);
    double u = ap.dot(ab) / ab.normSq();
    Point c = ab.scale(u).translate(a);
    return distance(p, c);
}
```

* Distance to line segment

```java
double distanceToLineSegment(Point p, Point a, Point b){
    Vector ap = new Vector(a, p);
    Vector ab = new Vector(a, b);
    double u = ap.dot(ab) / ab.normSq();
    if(u < 0.0) return distance(p, a);
    if(u > 1.0) return distance(p, b);
    return distanceToLine(p, a, b);
}
```

* Angle AOB

```java
double angle(Point a, Point o, Point b){
    Vector oa = new Vector(o, a);
    Vector ob = new Vector(o, b);
    return acos(oa.dot(ob) / sqrt(oa.normSq() * ob.normSq()));
}
```

* Counter clockwise test, collinear test

```java
// note: to accept collinear points, we have to change the ‘> 0’
// returns true if point r is on the left side of line pq
boolean ccw(Point p, Point q, Point r){
    Vector pq = new Vector(p, q);
    Vector pr = new Vector(p, r);
    return pq.cross(pr) > 0;
}

boolean collinear(Point p, Point q, Point r){
    Vector pq = new Vector(p, q);
    Vector pr = new Vector(p, r);
    return Math.abs(pq.cross(pr)) < EPS;
}
```

Integer version of Line

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

```java
class Circle{
    Point center;
    double radius;
    public Circle(Point center, double radius){
        this.center = center;
        this.radius = radius;
    }

    static Circle circle2PtsRad(Point p1, Point p2, double radius){
        double d2 = (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
        double det = radius * radius / d2 - 0.25;
        if(det < 0.0) return null;
        double h = sqrt(det);
        double cx = (p1.x + p2.x) * 0.5 + (p1.y - p2.y) * h;
        double cy = (p1.y + p2.y) * 0.5 + (p2.x - p1.x) * h;
        Circle c = new Circle(new Point(cx, cy), radius);
    }

}
```


Operations:
* inside circle integer version

```java
int insideCircle(Point_I p, Point_I c, int r){
    // all integer version
    int dx = p.x - c.x, dy = p.y - c.y;
    int Euc = dx * dx + dy * dy, rSq = r * r; // all integer
    return Euc < rSq ? 0 : Euc == rSq ? 1 : 2; } //inside/border/outside
```


## Triangle

Operations:

* Area by Heron's formula

```java
double area(double ab, double bc, double ca){
    double s = 0.5 * (ab + bc + ca);
    return sqrt(s * (s - ab) * (s - bc) * (s - ca));
}
```

* n-circle radisu

```java
double rInCircle(double ab, double bc, double ca){
    double A = area(ab, bc, ca);
    return A / (0.5 * (ab + bc + ca));
}

double rInCircle(Point a, Point b, Point c){
    double ab = distance(a, b);
    double bc = distance(b, c);
    double ca = distance(c, a);
    return rInCircle(ab, bc, ca);
}
```

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