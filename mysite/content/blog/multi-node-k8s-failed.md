---
title: "3 nodes Kubernetes cluster failed due to cert error"
date: 2022-04-09T00:00:00+08:00
draft: false
tags: ["computer science", "infrastructure"]
---

1 year before I setup a Kubernetes cluster with 3 master nodes and 1 worker node, and today I got the following error

I don't know that all the certs generated only have 1 year lifespan. Document says during update of cluster version should automatically update all the certs, but I don't have the time...

```
kubectl get pods --all-namespaces
kubectl: Unable to connect to the server: x509: certificate has expired or is not yet valid
```

## Update process

I found the following article. Solve the certificate error, but...

Please follow this [link](https://github.com/toracigno/kb/wiki/K8s-API-server-certificate-renewal) to complete the setup.

## After update

I do a health check and I saw this

```
ubuntu@k8s-master02:/etc/kubernetes$ kubectl get nodes
NAME           STATUS   ROLES                  AGE    VERSION
k8s-master01   Ready    control-plane,master   367d   v1.20.5
k8s-master02   NotReady    control-plane,master   367d   v1.20.5
k8s-master03   Ready    control-plane,master   367d   v1.20.5
k8s-node01     Ready    <none>                 367d   v1.20.5
```

I login to k8s-master02.

run `journalctl -u kubelet` shows the following error

Attempting to register node k8s-master02
Apr 09 05:25:17 k8s-master02 kubelet[744]: E0409 05:25:17.570172     744 kubelet_node_status.go:93] Unable to register node  with API server: nodes is forbidden: User "system:anonymous" cannot create resource "nodes" in API group "" at the cluster scope


## Re-add master node

I search Google, seems no one have the same error, so I have to delete the k8s-master02 node and re-add.

### On k8s-master01

Before removing k8s-master02, I need to find a way to add k8s-master02 back

This stackoverflow page is helpful 
https://stackoverflow.com/questions/63936268/how-to-generate-kubeadm-token-for-secondary-control-plane-nodes

```bash
# temporary add a upload certs for joining new control plane. (Valid only for 2 hours)
kubeadm init phase upload-certs --upload-certs
# ask k8s to generate the join command
kubeadm token create --print-join-command
```

remove k8s-master02

```bash
kubectl drain k8s-master02
kubectl delete node k8s-master02
```

### On k8s-master02

Now, I have the join command, I run the following commands

```bash
kubeadm reset

kubeadm join 192.168.100.20:6444 --token pel8cz.mtvnu0n7q8aj6lx6     --discovery-token-ca-cert-hash sha256:xxxxxxx --control-plane --certificate-key xxxxxxxx
```

another error come out....

```
1006 18:54:08.820819    2954 manifests.go:135] [control-plane] wrote static Pod manifest for component "kube-scheduler" to "/etc/kubernetes/manifests/kube-scheduler.yaml"
[check-etcd] Checking that the etcd cluster is healthy
failed to dial endpoint https://192.168.100.22:2379 with maintenance client
```

### Clear etc

This page helps me to troubleshoot. https://stackoverflow.com/questions/67921552/re-installed-node-cannot-join-kubernetes-cluster

Back to k8s-master01

```bash
# have to install etc-client on ubuntu
ETCDCTL_API=3 etcdctl --endpoints 127.0.0.1:2379 --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key member list

# list of etcd member
5a4945140f0b39d9, started, sbg2-k8s001, https://192.168.208.12:2380, https://192.168.208.12:2379
740381e3c57ef823, started, gra3-k8s001, https://192.168.208.13:2380, https://192.168.208.13:2379
77a8fbb530b10f4a, started, rbx4-k8s001, https://192.168.208.14:2380, https://192.168.208.14:2379

# remove k8s-master02 from the above list
ETCDCTL_API=3 etcdctl --endpoints 127.0.0.1:2379 --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key member remove e073aa5a204b727d
```

### Finally

I am able to re-join k8s-master02 now and all nodes are healthy.

```
NAME           STATUS   ROLES                  AGE    VERSION
k8s-master01   Ready    control-plane,master   367d   v1.20.5
k8s-master02   Ready    control-plane,master   31s    v1.20.5
k8s-master03   Ready    control-plane,master   367d   v1.20.5
k8s-node01     Ready    <none>                 367d   v1.20.5
```

