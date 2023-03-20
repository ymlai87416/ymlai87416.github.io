---
title: "Tensorflow Tutorial Udacity"
date: 2017-07-03T00:00:00+08:00
draft: false
tags: ["computer science", "artificial intelligence"]
---

Google hosts a Tensorflow course on Udacity, which is quite fun actually.
 
Tensorflow makes creating a neural network like a breeze. If you went through the course “Machine learning by Andrew Ng” before, you will wonder where should you put the derivatives of a objective function.
 
The answer is you don’t have to, Tensorflow computes the gradient numerically for you, you don’t have to differentiate any equations. Slow it is to compute gradient numerically, isn’t it? Maybe, but by harnessing the power of GPU, you can run even faster. Tensorflow compiles my Python code to CUDA and runs it on my GTX 980ti automatically.

 
Deep learning is not new at all, it is a buzzword in 2015 because of the power of GPU. Neural network has been there for decades.
 
Neural network (NN) does not scale well by nature, different layers in NN learns at a different rate. Sometimes, the value of backward propagation go to infinity (Exploding gradient) or go to zero (Vanishing gradient), which destroy the NN. There are techniques like gradient clipping and LSTM to deal with these problems.
 
The course is a little bit too rush and requires you to read other material in order to finish the assignment, but still, it is a good introduction to deep learning.

 
Here is the assignment completed by me, when you in doubt finding a working solution or want to compare your answer with someone. I think it is gonna to help.
 
Assignment 1:  1_notmnist.ipynb

Play with notMNIST dataset with Python library scikit-learn to get familiarized.

[My solution](https://github.com/ymlai87416/PythonPlayground/blob/master/Python%20notebook/Google%20Tensorflow%20tutorial/1_notmnist.ipynb)
 
Assignment 2: 2_fullyconnected.ipynb

Design a 1 layer NN to classify alphabets in notMNIST dataset

[My solution](https://github.com/ymlai87416/PythonPlayground/blob/master/Python%20notebook/Google%20Tensorflow%20tutorial/2_fullyconnected.ipynb)
 
Assignment 3: 3_regularization.ipynb

Here you learn L2 regularization. (I have done the same already in Andrew Ng course). you also implement a 4 layers NN classifying alphabets at (95.9%), The best reported is 97.1%, so powerful !!!

[My solution](https://github.com/ymlai87416/PythonPlayground/blob/master/Python%20notebook/Google%20Tensorflow%20tutorial/3_regularization.ipynb)
 
Assignment 4: 4_convolutions.ipynb

Assignments become more difficult onward, require you to do some readings. I implemented a LeNets-alike to classify alphabets (95.5%)

[My solution](https://github.com/ymlai87416/PythonPlayground/blob/master/Python%20notebook/Google%20Tensorflow%20tutorial/4_convolutions.ipynb)
 
Assignment 5: 5_word2vec.ipynb

Converting one-hot-vector to embedding and discover an interesting relationship between words, I have also try TSNE mapping.

[My solution](https://github.com/ymlai87416/PythonPlayground/blob/master/Python%20notebook/Google%20Tensorflow%20tutorial/5_word2vec.ipynb)
 
Assignment 6: 6_lstm.ipynb

The first part is quite boring, train an NN to output non-sense. The second part is very challenging, it asks you to train an NN to reverse every word in the sentence. Not many I have found conquer this problem and post the solution on Github.

[My solution](https://github.com/ymlai87416/PythonPlayground/blob/master/Python%20notebook/Google%20Tensorflow%20tutorial/6_lstm.ipynb)


