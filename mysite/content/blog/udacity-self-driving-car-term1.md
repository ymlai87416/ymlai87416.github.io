---
title: "Udacity Self Driving Car Term1"
date: 2018-01-26T00:00:00+08:00
draft: false
tags: ["computer science", "artificial intelligence"]
---

I have recently finished the Udacity self-driving car course Term 1.
 
The course is great and out of my expectation. I joined the course because I want to consolidate my understanding of neural network an computer vision. The course does fulfill my wishes.
 
In term 1, the course teaches you the followings:
 
### Use computer vision to find the road
 
The driving computer needs to know where the road is in order to drive.
This is not a simple task, and if there are errors, the car can screw up heavily.

 
There are 2 projects about finding roads in videos.

Basic: [writeup](https://github.com/ymlai87416/CarND-LaneLines-P1/blob/master/writeup.md), 

result [(1)](https://youtu.be/BARdgu5D1SQ), result [(2)](https://youtu.be/bVmnqLaR464), result [challenge](https://youtu.be/FB0zN_IhRaU)

Advance: [writeup](https://github.com/ymlai87416/CarND-Advanced-Lane-Lines/blob/master/writeup.md), result [(1)](https://youtu.be/XRmveXo8ol4), result[(2)](https://youtu.be/DmU-U1-CZd0), result[(3)](https://youtu.be/aEijLKR8_pA)


### Use Neural network to detect traffic sign
 
The driving computer must be able to read traffic signs. There is a paper which explains how to read German traffic sign at an accuracy of 98%, which is must higher than human.
 
I cannot faithfully reproduce this paper and obtain a test set accuracy of 96.2%.

My network failed to recognize the “Pedestrians” sign, which I can say it is not desirable.
 
Here is my [write-up](https://github.com/ymlai87416/CarND-Traffic-Sign-Classifier-Project/blob/master/writeup.md?1524919546676)
 
### Use Neural network to mimic human driving
 
This is an interesting project, Nvidia team published a paper to train the driving computer to drive around using just videos of human driving around. This assignment is to reproduce the paper in a simulator.
 
I am quite satisfied with this project, I train the car to drive forward, but in the end, the car can drive backward, which implied that neural network is not just a memorizer, and it does learn something.

 
Here are my [write-up](https://github.com/ymlai87416/CarND-Behavioral-Cloning-P3/blob/master/writeup.md) and the results [(1)](https://youtu.be/dbqpbb1rGpE), [(2)](https://youtu.be/YW1kv3ep0TQ), [(3)](https://youtu.be/CM0xnTSwtg8), [(4)](https://youtu.be/Orc5_xOtqVc)
 
### Use HOG-SVM to detect vehicles on the road
 
The driving computer must be able to detect vehicles on the road. In the project, I have a thousand of car images and use it to train an SVM machine to decide if an image segment contains a vehicle.
 
When processing the video, I have to break up the video input into many segments and pass it to SVM, if SVM says it is a car, I mark it on the image and finally create an image where the car is highlighted.
 
Here is my [write-up](https://github.com/ymlai87416/CarND-Behavioral-Cloning-P3/blob/master/writeup.md) and [result](https://youtu.be/rEKE_fyPhqYs)
 
### Conclusion
 
It pretty much a taste of writing a driving computer. I can say if I load my program and use it to drive a car. The car crashes at no-time. I need to further enhance these components before I can move forward before I can invent my self-driving car (or a self-driving RC car).