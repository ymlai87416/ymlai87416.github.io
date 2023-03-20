---
title: "Kubernetes move from docker to containerd"
date: 2022-04-10T13:06:20+01:00
draft: false
tags: ["computer science", "infrastructure"]
---

Some good resources.

1. https://www.youtube.com/watch?v=H7l48VQewmA

2. https://kruyt.org/migrate-docker-containerd-kubernetes/

But never remove docker from your machine!!.

In my cluster, I use it to host images to keep haproxy and keepalived running. Removing docker means you break things.