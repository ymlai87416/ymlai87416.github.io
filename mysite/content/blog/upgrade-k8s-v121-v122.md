---
title: "Upgrade Kubernetes from 1.21 to 1.22"
date: 2022-04-11T15:04:19+01:00
draft: false
tags: ["computer science", "infrastructure"]
---

I am writing to document the upgrade process from Kubernetes 1.21 to 1.22.

[Kubernetes end of life schedule](https://endoflife.date/kubernetes)

The process is same as my previous post. [link]({{< ref "/blog/upgrade-k8s-v120" >}}).

But this time, it break many things.

## Current setup

I have installed some services on the cluster, and I don't have helm installed.

Because sometimes I need to edit the yaml before applying it.

Currently, I have the following software installed:

* ingress-nginx: v0.46
* cert-manager: v1.2

After upgrading the cluster to v1.22, some pods are not running and become `CrashLoopBackOff`.

```
ubuntu@k8s-master01:~/install/tatson-k8s$ kubectl get pods --namespace=ingress-nginx
NAME                                        READY   STATUS             RESTARTS       AGE
ingress-nginx-controller-6d5cfc9f7d-7jkrq   0/1     CrashLoopBackOff   11 (80s ago)   32m

ubuntu@k8s-master01:~/install/tatson-k8s$ kubectl get pods --namespace=cert-manager
NAME                                       READY   STATUS    RESTARTS         AGE
cert-manager-6588898cb4-w7hg8              1/1     Running   0                60m
cert-manager-cainjector-7bcbdbd99f-zflt5   0/1     Error     15 (5m41s ago)   60m
cert-manager-webhook-5fd9f9dd86-c4vv8      1/1     Running   0                60m
```
## Upgrading ingress-nginx

Should be fine by just applying the latest version of yaml file.

For bare metal: 

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.3/deploy/static/provider/baremetal/deploy.yaml

But applying these result in

```
Resource: "batch/v1, Resource=jobs", GroupVersionKind: "batch/v1, Kind=Job"
Name: "ingress-nginx-admission-create", Namespace: "ingress-nginx"
for: "https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml": Job.batch "ingress-nginx-admission-create" is invalid: spec.template: Invalid value: core.PodTemplateSpec{ObjectMeta:v1.ObjectMeta{Name:"ingress-nginx-admission-create", 
...
Resource: "batch/v1, Resource=jobs", GroupVersionKind: "batch/v1, Kind=Job"
Name: "ingress-nginx-admission-patch", Namespace: "ingress-nginx"
for: "https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml": Job.batch "ingress-nginx-admission-patch" is invalid: spec.template: Invalid value: 
```

To resolve these, just delete the job under ingress-nginx.

```
NAME                             COMPLETIONS   DURATION   AGE
ingress-nginx-admission-create   1/1           1s         3h37m
ingress-nginx-admission-patch    1/1           1s         3h37m
```

## Upgrading cert-manager

From the website, it advise to upgrade to the next minor version, so I have to upgrade from v1.2 to v1.3, and then v1.4, v1.5, v1.6 and finally v1.7

The upgrade returns no error, and seems everything is running fine.

## Final words

I totally do not aware of these software need to be updated also. I should have reviewed my Kubernetes cluster at least semi-yearly.

## Reference
[1] Ingress-nginx support version: https://github.com/kubernetes/ingress-nginx#support-versions-table

[2] Cert manager supported release: https://cert-manager.io/docs/installation/supported-releases/