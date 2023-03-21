---
title: "Upgrade Kubernetes from 1.22 to 1.25"
date: 2022-04-11T15:04:19+01:00
draft: false
tags: ["computer science", "infrastructure"]
---

Finally I am able to touch my K8s setup during Feb, but sadly after I leave, the machine stop working because of losen wire within the computer case...

I take the chance to upgrade from 1.22 to 1.25, here are the notes

- Promox multi-node setup takes time. Don't know why the UI does not work
- Buy a shelf for your home lab is a must. It is not difficult, just go to IKEA
- when NFS share is across subnet and become too slow, NFS-provisioning simply does not work
- Don't really understand ZFS multi-node setup, may setup a lab for this
- ZFS on K8s is a new idea for me, need to test it out
- Can K8s provision ZFS directly from Promox, seems there are efforts in creating node (pass thru disk with Promox) across cluster.
- Running Grafana stack almost eating me 16G ram, may need to find way to expand my cluster.
- A normal PC should be what I am aiming for. Aiming for at least 64GB ram and more core, with at least 3x disk bay. In another words, Intel NUC may not worth it.
- Instruction of building a new K8s cluster should have changed. still HAProxy and keepalived?