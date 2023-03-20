---
title: "2017 Facebook Hackercup"
date: 2017-01-14T00:00:00+08:00
draft: false
tags: ["computer science"]
---

Facebook hacker cup 2017 has come. and I am now sharpening my tools to join the fight.
Facebook hacker cup can allow you to submit only 1 time for each problem, and give you only 6 minutes to do the submission.
After trying several past year questions. I can conclude questions of the following type.

* Questions I can’t solve within the competition.
* Quick and swift by applying algorithm tricks, returning answer below 3 seconds.
* Long IO and hence make you nervous, returning answer in 3 minutes…
* Long processing time and hence make you nervous, returning answer in 3 minutes…

So what can you do about case 3 and 4?
I use Java to write my code, my default template is a single thread and reading input using Scanner.
My computer is i7-5820, and currently having 16GB RAM, can I utilize what I have to improve my odds scoring a correct submission?


JVM is Java 8, default using 1/4 of total computer memory for maximum heap size, which is 4GB RAM available.
The following I have tried to improve my template to use threading and also replace Scanner with BufferedReader, to see the performance gain.

Runtime analysis:

| Question  |  Original version | Thread version (8 threads)  |  Runtime reduced by | Fast IO version |  Runtime reduced by |
|---|---|---|---|---|---|
|  Facebook 2015 Round 1 |   |   |   |   |   |
| 25 Autocomplete  | 143,685ms  | 140,330ms  | 2.39%  | 1,669ms  | 98.8%  |
| 40 Corporate Gifting  |  45,085ms | 12,719ms*  | 71.79% |  41,814ms |  7.26% |
| Facebook 2016 Round 1  |   |   |   |   |   |
| 20 Laundro, Matt  |  3,945ms | 1,097ms  | 72.19%  | –  |  – |
| 40 Boomerang Tournament  |  9,412ms | 1,912ms  | 79.69%  | –  |  – |
| Facebook 2017 Qualification Round  |   |   |   |   |   |
| 20 Progress Pie  | 37ms  |  81ms | -118.92%  | –  | – |
| 30 Lazy Loading  | 65ms |  98ms |  -50.77% | –  | –  |


\* With IO improvement and reduced working set.
 

Why can I not achieve a runtime reduction by 87.5% (8 times as fast)?

* For a simple problem, you only add overhead to the program, which makes the program run slower.
* Some test cases run faster, some are not, make the load not distributed evenly. in another word, you can distribute load evenly among the 8 threads you created.

Conclusion:

* For a simple problem, you better go with a single thread. Adding thread make the program run slower, but acceptable.
* For input file of 10-20MB, changing from Scanner to BufferedReader can make the program 85 times faster (see 25 Autocomplete) than the original one. Don’t waste the precious 6 minutes on I/O.
* For tedious calculation problem like 20 Laundro, Matt, which uses priority queue extensively with the small working set. The improvement is of around 4 leaps.
* For dynamic programming problem, all work like a charm with at least 4 times boost. (e.g. Boomerang Tournament, which 5 times as fast)

Tomorrow is facebook hacker cup 2017 Round 1. Enjoy!