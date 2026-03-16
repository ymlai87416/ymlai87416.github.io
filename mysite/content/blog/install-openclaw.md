---
title: "Building a LLM Powerhouse: RTX 4090 + Ollama + OpenClaw"
date: 2026-03-16T00:00:00+08:00
draft: false
tags: ["computer science", "artificial intelligence", "openclaw"]
---

# Building a LLM Powerhouse: RTX 4090 + Ollama + OpenClaw

In this post, I’ll walk through my weekend project: 
- setting up a dedicated openclaw server using my old intel macbook pro (2015 version)
- setting up a dedicated local LLM server using an RTX 4090
- configure openclaw to use my dedicated LLM server

## The Strategy: Compute where it counts

The core philosophy of this setup is hardware efficiency.

* **The Workhorse:** A Windows machine with an **RTX 4090 (24GB VRAM)**. This stays on 24/7 to handle the heavy lifting.
* **The Clients:** An older **Intel Mac** repurposed as a dedicated terminal/gateway, this allow openclaw to use UI interface.

---

## 1. Setting up the Windows Server (RTX 4090)

The goal was to run **GLM flash 4.7** (which supports images) via Ollama. Recommended by Ollama [Ref](https://docs.ollama.com/integrations/openclaw)

### The Memory Challenge

Running `ollama run glm-flash-4.7` requires about 17GB of VRAM. However, I encountered an issue where the KV Cache exploded from **5GB to 19.7GB**, hitting a "model request too large for system" error. I resolved this by setting context window to 64000, which consume ~93% of the VRAM.

* **Lesson learned:** You must tune your context window to avoid VRAM blow-ups. If the KV cache + model weights exceed VRAM size (24GB in my case), Ollama will return error.

### Configuration for Remote Access

To make the Windows machine accessible over the network:

1. **Set Environment Variables:**
```cmd
setx OLLAMA_ORIGINS "*" /m 
setx OLLAMA_HOST "0.0.0.0" /m

```


2. **Run as a Service:** I used `nssm` (Non-Sucking Service Manager) to ensure Ollama starts automatically with Windows.
```cmd
nssm install OllamaService "C:\Users\xxxxx\AppData\Local\Programs\Ollama\ollama.exe" serve
```



---

## 2. Repurposing the Intel Mac

I decided to give my old Intel Mac a second life as an "Always-On" bridge.

* **OS Prep:** Factory reset and disabled sleep so it remains reachable.

```bash
sudo pmset -a disablesleep 1

```


* **Networking:** Installed **ZeroTier** to create a secure virtual private network between my Windows machine and the Mac. It also keeps internal IP addresses stable.

---

## 3. Troubleshooting & Testing

### How to verify your remote connection:

From the Mac (client), run a simple curl command to the Windows IP:

```bash
curl http://<windows-machine-ip>:11434/api/version

```

If it returns a version number (e.g., `0.1.8`), your firewall and host bindings are correct.

### GPU Utilization

If you're on Windows and Ollama isn't hitting your GPU, check your logs. You should see `offloading 65/65 layers to GPU`. If you see layers being offloaded to `CPU`, check your VRAM overhead.

## Summary

This setup serves as a cornerstone for me to learn more about openclaw without spending money on LLM API. I am going to expand this setup and offload some dirty works to openclaw and see where are the limits.