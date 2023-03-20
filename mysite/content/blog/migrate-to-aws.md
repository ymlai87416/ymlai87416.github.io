---
title: "Migrate my Kubernetes to AWS"
date: 2022-12-27T00:00:00+08:00
draft: true
tags: ["computer science", "cloud computing"]
---

# Background

In last year, I have setup a Kubernetes cluster and help me to run a lot of job, but saidly the network is broken and I cannot fix it because I cannot physically touch the hardware.

# Migrate to AWS

But this does not mean I gave up, I have a couple of good project and batch job, and I want them to run on AWS as cheap as possible.
The constraint is too make AWS bill me below 15$ per month.

## Architecture

### AWS Spot instance on t3.small

This machine provide 2 vCPU and 2G. it should provide more than enough. Compare machine across region, I think us-east-2 is a good region to host my work becaues it is cheap.

### ECS / ECR for batch job orchestration and hosting website

I have a docker image for my batch job and a docker image for my streamlit dashboard.

For example, I have a batch job to tell me how many QQQ I need to hedge my portfolio, and suggest me stop loss by ATR. This job runs every day, it is better to schedule it using docker instead of manually copying file to ec2 and set the cron job.

### Lambda for notification and execute ECS task

### Cloudwatch event for job triggering

### Nginx for reverse proxy

Using AWS SSL certification requires you to use Load balancer which add 16$ per month, which is not desirable.

### S3 as my data storage

Setup a bucket in Single IA to save cost.
I currently work in S3 because the data is not that large, and efficient is not my first priority.
Most of my working doc is in Google drive, so I have to write some Google app script to push data to S3.

### Date time series, on the fly vs storing.

I think it is better to use on the fly unless 

### Overall architecture diagram


## Actual implementation

### Security/IAM issue that I have encountered

### Quesiton I got when working with Lambda


## Conclusion

Because it is a side hustle, I try to make it as cheap as possible.

