# Cousera Deep Learning


A friend of mine told me about this course, and I cannot believe that I can actually complete it.

{{< figure src="/images/deep-learning.png" alt="Hello Friend" position="center" style="border-radius: 8px;"  >}}
 
For the price, It worths me 49 USD only for 5 courses. The pricing model is $49/month until your finish the specialization. I finish the course within a month.
 
I can say it is a steal, for $49, you can have a taste of reproducing some good papers in the deep learning fields. (One disappointment is that it does not cover Q-learning or reinforcement learning, which I have to turn to OpenAI gym).

 

 
Sorry I cannot publish my assignments because I will be accused of letting other to plagiarise my work. But I can briefly tell you how great this course is, and if you have time, go for it.
 

### Part 1. Neural network and deep learning

This course teaches you how to build your neural network from ground-up. You first learn linear regression and then write your own neural network. You will implement the forward-propagation and the backward-propagation and the logit function (cross entropy function).
 
What is the meaning to implement your own version of forward-propagation and backward-propagation? My opinion is that if you have this knowledge, you can work with TensorFlow with more confident. In later course, you study more NN layer like convolution layer, max pooling layer, LSTM cell and GRU cell, and they all have their own version of forward-propagation and backward-propagation.
 

### Part 2. Improving deep neural network

This part discusses how to initialize the neural network, how to apply regularisation and dropout to reduce variance, and the effect of applying difference optimization algorithm to the neural network. (e.g. gradient descent, stochastic gradient descent and Adam Optimiser)
 
In the final assignment, you also have a chance to use TensorFlow to run a neural network, which is much simpler compared to writing your own neural network from ground-up.
 

### Part 3. Structuring machine learning project
 
This part discusses how to structure your machine learning project so that you can consistently produce a good result within a reasonable time.
 
It is an experience talks from Andrew Ng, and if you have a machine learning project, I recommend you revisiting this course once again before coding, defining project schedule or defining your test cases.
 

### Part 4. Convolution neural network
 
This course is to introduce convolution neural network and it is a very informative course.
 
In this course, you first learn to how to write a forward propagation and a backward propagation through a CNN layer and a max pool layer (Ohhh wait, max pool layer is not differentiable, have I got this wrong?).
 
Next, you learn how to use convolution NN to recognized hand sign representing 1, 2, 3, 4, 5. (~78%)
Then you will learn Keras and use it to write a ResNet (over 150 layers) and recognized hand sign again with a higher accuracy. (~86%)
 
Then the course teaches you how to implement YOLO and use it to detect car. I must say it is much better than my HOG-SVM implementation in Udacity self-driving course.
 
In the final week, you implement yourself a face recognition NN which able to recognize people’s faces and a neural style transfer NN which changing the style of a picture while keeping most of the content in the picture.
 

### Part 5. Sequence model
 
During my study, this course is not yet well prepared, and the assignments somehow do not work. Maybe there will be improved later.
 
In this course, you will have the chance to write forward and backward propagation of an LSTM cell, which is very hard indeed.
Then, you generate some name for a dinosaur and jazz music. I don’t think these make sense but I now know the power of RNN network.
 
Afterward, there is a project try to place an emoji at the end of each sentence, and in this project, you know the power of attention mechanism in RNN network.
Without attention mechanism, the machine wrongly read “I am not happy” and think that it is a happy sentiment.
 
and you also have a chance to build the word2vec algorithm proposed by Google, which assigning similarity of a word according to the words appear next to a word. Obtaining such a similarity help machine learn a given text much better.
 
Next, we learn how to translate a date format from an unstructured format to a structured format. like 10.09.70 to 1970-09-10. and how to use trigger words to activate a device. In the case of Apple Siri, it is “Hey Siri”.
 

### Conclusion
 
I think the course provides a very solid corner-stone for the learner to continue their learning in deep learning. With these experience, I can have more confidence in reproducing the result of papers I read in the future or invent an innovative way to use neural network if the time comes. And it is quite cheap if you can schedule 3 days per week to work on this specialization. (I have a full-time job, but I do take the machine learning course by Andrew before, and I have experience on TensorFlow)
