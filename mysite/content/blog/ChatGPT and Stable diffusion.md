---
title: "ChatGPT and Stable diffusion"
date: 2023-03-21T00:00:00+08:00
draft: false
tags: ["computer science", "artificial intelligence"]
---

This is a summary on what I have find in ChatGPT, Stable diffusion and colab.

## ChatGPT

Although I cannot download the model, the LLaMa model from Meta is available from torrent. 
Here is the video teaaching you how to set it up to re-train LLaMa as ChatGPT.

Paper:
- LLaMA: Open and Efficient Foundation Language Models https://arxiv.org/abs/2302.13971
- https://github.com/tloen/alpaca-lora
WebUI GitHub: https://github.com/cocktailpeanut/dalai
Python Github: https://github.com/VignoliniLab/PyLlama
LangChain Github: https://github.com/hwchase17/langchain

### LLaMa
- Facebook leak model, have 7B, 13B.
- My display card is 2080Ti, having 11GB, so both should be OK
- Successfully set it up on my computer and generate output

### Alpaca
- Train using LoRA, this is an external model to LLaMa. seems training by keeping weighting in LLaMa constant.

### LangChain
Github: https://github.com/hwchase17/langchain

To preserve the chat context, there are ways to save the previous conversation
- All chat history
- Previous chat summary
- Please aware that the number of token in input is fixed, so chat history may not work, or need to trim.

### My experience

#### Running pre-trained alpaca model on my machine
- Seems not work as expected using 7B model. I have install both llama and alpaca model...

```
prompt: write a program which print the first 10 fibonacci number
reply: Write a C++ Program to find sum of all even numbers between two given integers. (e.g., if int x =5 and y=7, then output should be: Sum(x+y) ) [end of text]
```

- There is an interesting test drive link at https://twitter.com/algo_diver/status/1637851640027041798

Seems this program does not understand context.

I also ask the program to write an program to solve optimization problem

```
prompt: write me a program to optimize the bet on each horse given the win rate and the payoff ratio

answer: 
import numpy as np

def optimize_bet(win_rate, payoff_ratio):
# Initialize the betting amount
bet_amount = 1
# Initialize the betting history
bet_history = []
# Initialize the win rate and payoff ratio
win_rate = win_rate
payoff_ratio = payoff_rat
```

## Stable diffusion

Read a lot of stuff, and confused by a lot of concept. It is like another Photoshop. 
It works OK on my 2080Ti (11G) machine and the download size is around 3GB, so I don't think it is a very big model.

### Model and different approach in retraining

The base model is Standard diffusion SD-1.5

GitHub: Stable Diffusion WebUI: https://github.com/AUTOMATIC1111/stable-diffusion-webui
Civit.AI: https://civitai.com/

Video to explain different approach of training to further enhance the result: [LoRA vs Dreambooth vs Textual Inversion vs Hypernetworks](https://www.youtube.com/watch?v=dVjMiJsuR5o)

#### Retrain the model
Because you train the whole model and refine the parameters:
- You need a high end graphic card
- The model is of 2GB, same as that of stable diffusion base model
- Famous models:
    - ChilloutMix

#### LoRA (Low-Rank Adaption)
You keep all the weighting in the base model and add additional layer in-between
- You only train the new layer
- [ULTIMATE FREE LORA Training In Stable Diffusion! Less Than 7GB VRAM!](https://www.youtube.com/watch?v=70H03cv57-o)

#### ControlNet
Beside text input, I may want to enter additional information like skeleton or depth map. ControlNet solve it by adding a 
small network on top of existing one and this network accept the new input

### Create prompt
[GPT-4 + Midjourney V5 = A New Era of Photography? - WOW!](https://www.youtube.com/watch?v=Asg1e_IYzR8)

### Workflow
- Workflow to generate a good photo: [ControlNet - Revealing my Workflow to Perfect Images.](https://www.youtube.com/watch?v=4u-Ytioi3DM&t=1s)
- How to create a realistic photo: [AI生成教學 如何生成專業攝影照？ - Stable Diffusion 教學](https://www.youtube.com/watch?v=4FQ8Mlolr0g)

## Colab

As my display card is 2080Ti only having 11GB ram, and I have like 4 cards on my hand now. 

These cards was fun and allow me to play games and training nerual network, but I think it is not powerful enough to deal with the crazy large model nowsaday.