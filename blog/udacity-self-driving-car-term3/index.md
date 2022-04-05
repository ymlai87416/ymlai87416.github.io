# Udacity Self Driving Car Term3


Term 3, the final term is finished, and I want to share with you want I have learned in this term.

 

This term focuses on self-driving car brian:

 Behavior Planning: Write a drive computer to drive, while collecting data and predict using what you have learned in Term 2 (e.g. EKF, UKF, particle filter, PID, etc…)
Interlude: Lyft challenge on semantic segmentation
Semantic Segmentation: To let the car know what these point clouds are, e.g. Car, pedestrian, road, bike, etc…
Functional safety: It is a very interesting topic and introduces me International standard ASIL (Automotive Safety Integrity Level). This makes sure your system is resilient and don’t cross lines.
Final project: To drive a car around the yard and stop in front of a traffic light.

### Behavior Planning

The original project is lack of structure makes it complained by many students. But none the less, it is a very good opportunity for me to test my system design capability after working 5+ years as a software engineer.

[Baidu Appollo](http://apollo.auto/) is the project I look to while I try to come up with my design. I combine what I have learned in the course and cross check with Baidu Appollo to come up with my own design, you can see my write-up at here. There are still some bugs in the project, see if you can find it.
 
Baidu is lacking behind Tencent and Alibaba recently. I feel sad about it.


### Interlude: Lyft challenge

This challenge really let me realized that I just know a little bit about Tensorflow. The challenge is to create a Semantic Segmentation model and to locate car and road in the video prepared using CARLA

CARLA is a simulator and it creates a high-quality simulated environment for testing driving algorithms.

The competition was fierce, and I dug myself into reading research papers and thought that Google DeepLab v3 should be able to make me rank high enough. But I was wrong.

The winner used the simple network (FCN-VGG16) taught in the lesson and hack the evaluation metrics. This simple network runs fast (e.g. 16fps) and the winner had the patient to train it to perfect. While I was struggling which network should I use and how to improve Tensorflow performance (dead end).

My submission is 9 points lower than that of the winner and runs only at 7fps. Landing me at 57 over 155.

This really taught me a lesson. Simple is the best. I should have refined my basic model first before window shopping another stuff.
 
Another interesting observation is that UNet, a neural network proposed to extract pattern in medical images does help people rank high.


This is my result on judge test set
{{< youtube 4V2FuQ5dbQg >}}


Here is the winner writeup: https://www.linkedin.com/pulse/how-i-won-lyft-perception-challenge-asad-zia/

 

### Semantic Segmentation (Elective)

After the interlude, I took this project more seriously when working on it. My aim was to make my FCN-VGG16 model a perfect model.

I have uses both [Kitti dataset](http://www.cvlibs.net/datasets/kitti/) and [Cityscapes Dataset](https://www.cityscapes-dataset.com/)

You can see how I applied myself by checking out this [write-up](https://github.com/ymlai87416/CarND-Semantic-Segmentation)
 
The project just requires you to detect the road, but some other students push the FCN-VGG16 model further to detect all the object labels in Cityscapes Dataset. I am really impressed by their hard work.

Here are the results:

Images:
{{< figure src="/images/um_000004.png" title="result" >}}
{{< figure src="/images/berlin_000032_000019_leftImg8bit.png" title="result" >}}
{{< figure src="/images/uu_000095.png" title="result" >}}


Video:
{{< youtube pY_yx5fJctA >}}


### Functional safety (Elective)

I chose Semantic segmentation as my elective, so I don’t put much effort into this module. I go through the video and find that someday maybe I can apply it elsewhere, right? You cannot really depend on you hard-code logic to do everything, sometimes, you just have to hand over your problem to a black-box. (e.g. neural network) But this does not make it an excuse for system failure. Having ASIL or something like that really help you have the confidence to use those tools that may be unpredictable and make systems more useful to people without hurting people.


### Final Project

I am working on it right now, and I hope to finish it by the end of this year. (My first submission is failed, but I can graduate with this submission).

The final project makes use of [ROS](http://www.ros.org/) (Robot operating system) to drive Udacity car CARLA around a yard.



For the simulator part, that was easy. What I have to do is to work hard and make the car in simulator runs.

For the real testing. I really have no idea on how CARLA works, and so I have to go to the forum to ask for help from students who graduated or student living in the US.


 
For those who want to know what is my team (Robocar) progress, you can take a look at this [write-up](https://github.com/ymlai87416/CarND-Capstone)

 

### Final words

This project really makes me know more about the modern world today. I am very happy that talented people are really putting effort to make self-driving car a dream come true.

While I don’t know if I can get a job in this self-driving industry or should I, but I think that it is definitely worth paying for this course. You are being thrown with a great and meaningful challenge and you think about it, learn about it and practice about it.
