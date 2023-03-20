---
title: "Udacity Self Driving Car Term2"
date: 2018-04-30T00:00:00+08:00
draft: false
tags: ["computer science", "artificial intelligence"]
---

Term 2 is finished, and I want to share with you want I have learned in this term.
 
This term focus on control, I learn how to use Kalman filter, particle filter, PID controller and MPC controller. This term requires C++ to finish but I have used it before.
 
In term 2, the course teaches you the followings:
 
### Extended Kalman filter and Unscented Kalman filter
 
When you have both lidar and radar and you want to extract the good from both of them, Kalman filter is the tool to use. It combines the information together, predicts the current location and also tells you how sure the prediction is.
 
All you need is to tell the Kalman filter what your car model is. Kalman filter makes educated guesses based on the model, instead of blindly trust whatever data lidar and radar generated.

 
The project only requires me to track my car, but in the real setting, it can track many objects at the same time. (e.g. the car in front, the car behind, cars on the other lane, pedestrians, and dogs) So your car doesn’t run into these object even when the time lidar or radar or both generate silly data during some short interval.
 
Here is my write-up for [Extended Kalman filter](https://github.com/ymlai87416/CarND-Extended-Kalman-Filter-Project/blob/master/README.md) and [Unscented Kalman filter](https://github.com/ymlai87416/CarND-Unscented-Kalman-Filter-Project/blob/master/README.md)
 
### Particle filter
 
To track your own car, you may think this is just like track your iPhone app, which periodically get the GPS signal and send it to the server. (I don’t know if the guy in Apple really does this, the iPhone get accelerometer and gyroscope, and also it has a WiFi receiver)
 
But how about your car is in the tunnel, your car is in the area with inaccurate GPS. The particle filter is here to help you to improve the accuracy of the car location.


What you have to do is to tell the particle filter how your car moves and a map.
 
and your car continues to tell the particle filter what does your car sees on the map (poles, beacons, tree, etc.) and the particle filter uses a sophisticated formula deduced from Navie Bayes algorithm to tell you where your car is.
 
Want to see it in [action](https://youtu.be/NC7rm_UeQSs). You can read my [write-up](https://github.com/ymlai87416/CarND-Kidnapped-Vehicle-Project/blob/master/README.md) here.
 
### PID controller
 
I did PID in university and I am dealing with PID again. Recently, I want to buy a drone and seems drone also used PID controller too. Why? to make it stabilized. You have 3 parameters P, I and D, and what you do is to tune them, so that the drone weight, the inertia and the center of gravity, wind speed etc. are all considered. But there is no way to calculate P, I, D from drone physical properties, you have to use trial or error.
 
I am doing the same on this project. I use the twiddle algorithm the course teach me to tune the PID but it turns out that the car keeps driving off track. I have to force myself to use traditional way to tune PID first and make the car drives stable enough, I run the car a few laps to find more accurate PID values.

 
I make the PID controller works, but it is running at 50mph at most. Check out [how my car move](https://youtu.be/tF9NMcee8iA) and my [implementation](https://github.com/ymlai87416/CarND-PID-Control-Project).
 
### MPC controller
 
MPC controller is a new concept of controlling algorithm to me, and if I have time maybe I would like to try to implement one to a drone. (which is already done by someone on [youtube](https://www.youtube.com/watch?v=lPy7w-GUbw4))
 
MPC knows your car model, and the desired path (from driving computer, navigation component) and find out the best way to use the control input to make the car drives down the desired path.
 
For the model, there are the kinematic model and the dynamic model. The kinematic model considers how the car moves and tunes normally but not drifting or launching or other stunts. I use the kinematic model in this project.
 
MPC controller predicts a few seconds forward and use the first set of control input to drive the car, and do it again maybe 100 ms second later. By doing so, the car should be on track.  But how MPC predicts? MPC use optimization to find out the desired set of control input so that it can keep the car on-track for a few seconds.
 
I did convex optimization before but MPC problem is not a convex problem (i have sine and cosine in the model). When it is not convex, the implication is that the result may be just a local minimum instead of global minimum, but as long as it is not a [saddle point](https://en.wikipedia.org/wiki/Saddle_point) (which is not a minimum at all). It should be OK for the purpose.
 
No more tuning and my car can run at a higher speed. Please check out the [result](https://youtu.be/BAdrbRUI8NY) and also the [implementation](https://github.com/ymlai87416/CarND-MPC-Project/blob/master/README.md).
 
### Conclusion:
 
I now have more stuff in my arsenal to tackle the self-driving car problem. In the next term, I will make it works on a real car !! I don’t know what it will be end-up to.