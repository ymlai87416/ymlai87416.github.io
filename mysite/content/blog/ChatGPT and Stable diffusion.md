---
title: "ChatGPT and Stable diffusion"
date: 20223-03-20T00:00:00+08:00
draft: true
tags: ["computer science", "artificial intelligence"]
---

## ChatGPT

Although I cannot download the model, the LLaMa model from Meta is available from torrent. 
Here is the video teaaching you how to set it up to re-train LLaMa as ChatGPT.

Paper:
GitHub:

### FAQ

### My experience

xxxxxx



## Stable diffusion

Read a lot of stuff, and confused by a lot of concept. It is like another Photoshop.

### Model and different approach in retraining

The base model is Standard diffusion SD-1.5

There are 2 effort to refine the model. 

GitHub: Stable Diffusion WebUI: xxxxxx
GitHub/Hugging face: Stable diffusion model?

#### Retrain the model
Because you train the whole model and refine the parameters:
- You need a high end graphic card
- The model is of 2GB, same as that of stable diffusion base model

#### LORA
You keep all the weighting in the base model and add additional layer in-between
- You only train the new layer
- 

#### ControlNet
Beside text input, I may want to enter additional information like skeleton or depth map. ControlNet solve it by adding a 
small network on top of 

### Workflow

### FAQ


### My experience

xxxxxxx