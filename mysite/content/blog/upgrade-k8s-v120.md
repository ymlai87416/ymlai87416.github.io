---
title: "Upgrade Kubernetes from 1.20 to 1.21"
date: 2022-04-10T08:36:47+01:00
draft: false
tags: ["computer science", "infrastructure"]
---

I am writing to document the upgrade process from Kubernetes 1.20 to 1.21.

Seems I am expected to upgrade Kubernetes at least semi-annually, in order to play catch up with the fast evolving versions...

[Kubernetes end of life schedule](https://endoflife.date/kubernetes)

## Current setup

* 3 Raspberry pi as master node. use Keepalived for HA.

    Ubuntu 20.04 LTS (arm), docker version 1.4.4-1, kubernetes version 1.20.5

* 1 x86_64 VM node as worker node.

    Ubuntu 20.04 LTS (x86_64), docker version 1.4.4-1, kubernetes version 1.20.5

All machines hold the following packages: kubeadm, kubelet, kubectl, containerd.io

## Target

Upgrade all nodes to

* Kubernetes version 1.21.11-0
* Docker version 1.5.11-1

## Upgrade process

Time taken: 1 hour.

### Upgrade first master node

1. Upgrade kubeadm to 1.21.11-0

```
apt-get update && apt-get install -y kubeadm=1.21.11-00 && apt-mark hold kubeadm

# output
$ apt-mark unhold kubeadm
$ apt-get update && apt-get install -y kubeadm=1.21.11-00 && apt-mark hold kubeadm
Hit:1 https://download.docker.com/linux/ubuntu focal InRelease
Hit:3 http://ports.ubuntu.com/ubuntu-ports focal InRelease                       
Hit:2 https://packages.cloud.google.com/apt kubernetes-xenial InRelease          
Hit:4 http://ports.ubuntu.com/ubuntu-ports focal-updates InRelease
Hit:5 http://ports.ubuntu.com/ubuntu-ports focal-backports InRelease
Hit:6 http://ports.ubuntu.com/ubuntu-ports focal-security InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages were automatically installed and are no longer required:
… Use 'sudo apt autoremove' to remove them.
The following packages will be upgraded:
  kubeadm
1 upgraded, 0 newly installed, 0 to remove and 4 not upgraded.
Need to get 7303 kB of archives.
After this operation, 5308 kB of additional disk space will be used.
Get:1 https://packages.cloud.google.com/apt kubernetes-xenial/main arm64 kubeadm arm64 1.21.11-00 [7303 kB]
Fetched 7303 kB in 1s (4933 kB/s)  
(Reading database ... 150653 files and directories currently installed.)
Preparing to unpack .../kubeadm_1.21.11-00_arm64.deb ...
Unpacking kubeadm (1.21.11-00) over (1.20.5-00) ...
Setting up kubeadm (1.21.11-00) ...
kubeadm set on hold.
```

2. Derive update plan

```
kubeadm upgrade plan

# output
[upgrade/config] Making sure the configuration is correct:
[upgrade/config] Reading configuration from the cluster...
[upgrade/config] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
[preflight] Running pre-flight checks.
[upgrade] Running cluster health checks
[upgrade] Fetching available versions to upgrade to
[upgrade/versions] Cluster version: v1.20.0
[upgrade/versions] kubeadm version: v1.21.11
I0410 14:21:06.582792    7078 version.go:254] remote version is much newer: v1.23.5; falling back to: stable-1.21
[upgrade/versions] Target version: v1.21.11
[upgrade/versions] Latest version in the v1.20 series: v1.20.15

Components that must be upgraded manually after you have upgraded the control plane with 'kubeadm upgrade apply':
COMPONENT   CURRENT       TARGET
kubelet     4 x v1.20.5   v1.20.15

Upgrade to the latest version in the v1.20 series:

COMPONENT                 CURRENT    TARGET
kube-apiserver            v1.20.0    v1.20.15
kube-controller-manager   v1.20.0    v1.20.15
kube-scheduler            v1.20.0    v1.20.15
kube-proxy                v1.20.0    v1.20.15
CoreDNS                   1.7.0      v1.8.0
etcd                      3.4.13-0   3.4.13-0

You can now apply the upgrade by executing the following command:

	kubeadm upgrade apply v1.20.15

_____________________________________________________________________

Components that must be upgraded manually after you have upgraded the control plane with 'kubeadm upgrade apply':
COMPONENT   CURRENT       TARGET
kubelet     4 x v1.20.5   v1.21.11

Upgrade to the latest stable version:

COMPONENT                 CURRENT    TARGET
kube-apiserver            v1.20.0    v1.21.11
kube-controller-manager   v1.20.0    v1.21.11
kube-scheduler            v1.20.0    v1.21.11
kube-proxy                v1.20.0    v1.21.11
CoreDNS                   1.7.0      v1.8.0
etcd                      3.4.13-0   3.4.13-0

You can now apply the upgrade by executing the following command:

	kubeadm upgrade apply v1.21.11

_____________________________________________________________________


The table below shows the current state of component configs as understood by this version of kubeadm.
Configs that have a "yes" mark in the "MANUAL UPGRADE REQUIRED" column require manual config upgrade or
resetting to kubeadm defaults before a successful upgrade can be performed. The version to manually
upgrade to is denoted in the "PREFERRED VERSION" column.

API GROUP                 CURRENT VERSION   PREFERRED VERSION   MANUAL UPGRADE REQUIRED
kubeproxy.config.k8s.io   v1alpha1          v1alpha1            no
kubelet.config.k8s.io     v1beta1           v1beta1             no
_____________________________________________________________________
```

3. Apply update plan 1.21.11 to the first node

Did take some time to fetch docker image from web.

```
kubeadm upgrade apply v1.21.11

#output
[upgrade/config] Making sure the configuration is correct:
[upgrade/config] Reading configuration from the cluster...
[upgrade/config] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
[preflight] Running pre-flight checks.
[upgrade] Running cluster health checks
[upgrade/version] You have chosen to change the cluster version to "v1.21.11"
[upgrade/versions] Cluster version: v1.20.0
[upgrade/versions] kubeadm version: v1.21.11
[upgrade/confirm] Are you sure you want to proceed with the upgrade? [y/N]: y 
[upgrade/prepull] Pulling images required for setting up a Kubernetes cluster
[upgrade/prepull] This might take a minute or two, depending on the speed of your internet connection
[upgrade/prepull] You can also perform this action in beforehand using 'kubeadm config images pull'
[upgrade/apply] Upgrading your Static Pod-hosted control plane to version "v1.21.11"...
Static pod: kube-apiserver-k8s-master01 hash: 5fde095b33443ffc5b8cf050db39cf4b
Static pod: kube-controller-manager-k8s-master01 hash: 14bd5e3b420dd28be544748ab422fb6a
Static pod: kube-scheduler-k8s-master01 hash: 81d2d21449d64d5e6d5e9069a7ca99ed
[upgrade/etcd] Upgrading to TLS for etcd
Static pod: etcd-k8s-master01 hash: 7bcedb4b737338eb6a1b2b77e74c4ed9
[upgrade/staticpods] Preparing for "etcd" upgrade
[upgrade/staticpods] Renewing etcd-server certificate
[upgrade/staticpods] Renewing etcd-peer certificate
[upgrade/staticpods] Renewing etcd-healthcheck-client certificate
[upgrade/staticpods] Moved new manifest to "/etc/kubernetes/manifests/etcd.yaml" and backed up old manifest to "/etc/kubernetes/tmp/kubeadm-backup-manifests-2022-04-10-14-28-50/etcd.yaml"
[upgrade/staticpods] Waiting for the kubelet to restart the component
[upgrade/staticpods] This might take a minute or longer depending on the component/version gap (timeout 5m0s)
Static pod: etcd-k8s-master01 hash: 7bcedb4b737338eb6a1b2b77e74c4ed9
…Static pod: etcd-k8s-master01 hash: cc00f6511d31760c7ffa84ade5d22764
[apiclient] Found 3 Pods for label selector component=etcd
[upgrade/staticpods] Component "etcd" upgraded successfully!
[upgrade/etcd] Waiting for etcd to become available
[upgrade/staticpods] Writing new Static Pod manifests to "/etc/kubernetes/tmp/kubeadm-upgraded-manifests641878118"
[upgrade/staticpods] Preparing for "kube-apiserver" upgrade
[upgrade/staticpods] Renewing apiserver certificate
[upgrade/staticpods] Renewing apiserver-kubelet-client certificate
[upgrade/staticpods] Renewing front-proxy-client certificate
[upgrade/staticpods] Renewing apiserver-etcd-client certificate
[upgrade/staticpods] Moved new manifest to "/etc/kubernetes/manifests/kube-apiserver.yaml" and backed up old manifest to "/etc/kubernetes/tmp/kubeadm-backup-manifests-2022-04-10-14-28-50/kube-apiserver.yaml"
[upgrade/staticpods] Waiting for the kubelet to restart the component
[upgrade/staticpods] This might take a minute or longer depending on the component/version gap (timeout 5m0s)
Static pod: kube-apiserver-k8s-master01 hash: 5fde095b33443ffc5b8cf050db39cf4b
…
Static pod: kube-apiserver-k8s-master01 hash: a940072fa30c12aeebd1efe6dfcdcc1c
[apiclient] Found 3 Pods for label selector component=kube-apiserver
[upgrade/staticpods] Component "kube-apiserver" upgraded successfully!
[upgrade/staticpods] Preparing for "kube-controller-manager" upgrade
[upgrade/staticpods] Renewing controller-manager.conf certificate
[upgrade/staticpods] Moved new manifest to "/etc/kubernetes/manifests/kube-controller-manager.yaml" and backed up old manifest to "/etc/kubernetes/tmp/kubeadm-backup-manifests-2022-04-10-14-28-50/kube-controller-manager.yaml"
[upgrade/staticpods] Waiting for the kubelet to restart the component
[upgrade/staticpods] This might take a minute or longer depending on the component/version gap (timeout 5m0s)
Static pod: kube-controller-manager-k8s-master01 hash: 14bd5e3b420dd28be544748ab422fb6a
[apiclient] Found 3 Pods for label selector component=kube-controller-manager
[upgrade/staticpods] Component "kube-controller-manager" upgraded successfully!
[upgrade/staticpods] Preparing for "kube-scheduler" upgrade
[upgrade/staticpods] Renewing scheduler.conf certificate
[upgrade/staticpods] Moved new manifest to "/etc/kubernetes/manifests/kube-scheduler.yaml" and backed up old manifest to "/etc/kubernetes/tmp/kubeadm-backup-manifests-2022-04-10-14-28-50/kube-scheduler.yaml"
[upgrade/staticpods] Waiting for the kubelet to restart the component
[upgrade/staticpods] This might take a minute or longer depending on the component/version gap (timeout 5m0s)
Static pod: kube-scheduler-k8s-master01 hash: 81d2d21449d64d5e6d5e9069a7ca99ed
…
Static pod: kube-scheduler-k8s-master01 hash: 93632060532583bc6e1b6f38dd64f10e
[apiclient] Found 3 Pods for label selector component=kube-scheduler
[upgrade/staticpods] Component "kube-scheduler" upgraded successfully!
[upgrade/postupgrade] Applying label node-role.kubernetes.io/control-plane='' to Nodes with label node-role.kubernetes.io/master='' (deprecated)
[upgrade/postupgrade] Applying label node.kubernetes.io/exclude-from-external-load-balancers='' to control plane Nodes
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config-1.21" in namespace kube-system with the configuration for the kubelets in the cluster
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to get nodes
[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[addons] Applied essential addon: CoreDNS
[endpoint] WARNING: port specified in controlPlaneEndpoint overrides bindPort in the controlplane address
[addons] Applied essential addon: kube-proxy

[upgrade/successful] SUCCESS! Your cluster was upgraded to "v1.21.11". Enjoy!

[upgrade/kubelet] Now that your control plane is upgraded, please proceed with upgrading your kubelets if you haven't already done so.
```


4. Update kubelet on the first master node

```
apt-mark unhold kubelet && apt-get update && apt-get install -y kubelet=1.21.11-00 && apt-mark hold kubelet

#output
Canceled hold on kubelet.
Hit:1 https://download.docker.com/linux/ubuntu focal InRelease
Hit:3 http://ports.ubuntu.com/ubuntu-ports focal InRelease                
Hit:2 https://packages.cloud.google.com/apt kubernetes-xenial InRelease
Get:4 http://ports.ubuntu.com/ubuntu-ports focal-updates InRelease [114 kB]
Get:5 http://ports.ubuntu.com/ubuntu-ports focal-backports InRelease [108 kB]
Get:6 http://ports.ubuntu.com/ubuntu-ports focal-security InRelease [114 kB]
Fetched 336 kB in 2s (146 kB/s)  
Reading package lists... Done
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages will be upgraded:
  kubelet
1 upgraded, 0 newly installed, 0 to remove and 4 not upgraded.
Need to get 16.4 MB of archives.
After this operation, 4346 kB of additional disk space will be used.
Get:1 https://packages.cloud.google.com/apt kubernetes-xenial/main arm64 kubelet arm64 1.21.11-00 [16.4 MB]
Fetched 16.4 MB in 3s (6562 kB/s)  
(Reading database ... 133897 files and directories currently installed.)
Preparing to unpack .../kubelet_1.21.11-00_arm64.deb ...
Unpacking kubelet (1.21.11-00) over (1.20.5-00) ...
Setting up kubelet (1.21.11-00) ...
kubelet set on hold.
```

5. Restart kubelet

`systemctl restart kubelet`

Now when you run `kubectl get nodes`, you should see only 1 master node with v1.21.11

### Upgrade other master nodes

Repeat step 6-8 on other master nodes

6. Update kubeadm on other master nodes

```
apt-mark unhold kubeadm &&
apt-get update && apt-get install -y kubeadm=1.21.11-00 && apt-mark hold kubeadm

#output
Canceled hold on kubeadm.
Hit:1 https://download.docker.com/linux/ubuntu focal InRelease
Hit:3 http://ports.ubuntu.com/ubuntu-ports focal InRelease                       
Hit:2 https://packages.cloud.google.com/apt kubernetes-xenial InRelease          
Get:4 http://ports.ubuntu.com/ubuntu-ports focal-updates InRelease [114 kB]
Get:5 http://ports.ubuntu.com/ubuntu-ports focal-backports InRelease [108 kB]
Get:6 http://ports.ubuntu.com/ubuntu-ports focal-security InRelease [114 kB]
Get:7 http://ports.ubuntu.com/ubuntu-ports focal-updates/main arm64 Packages [1177 kB]
Get:8 http://ports.ubuntu.com/ubuntu-ports focal-updates/universe arm64 Packages [863 kB]
Fetched 2376 kB in 3s (682 kB/s)                         
Reading package lists... Done
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages were automatically installed and are no longer required:
  …
Use 'sudo apt autoremove' to remove them.
The following packages will be upgraded:
  kubeadm
1 upgraded, 0 newly installed, 0 to remove and 4 not upgraded.
Need to get 7303 kB of archives.
After this operation, 5308 kB of additional disk space will be used.
Get:1 https://packages.cloud.google.com/apt kubernetes-xenial/main arm64 kubeadm arm64 1.21.11-00 [7303 kB]
Fetched 7303 kB in 1s (8953 kB/s)
(Reading database ... 150581 files and directories currently installed.)
Preparing to unpack .../kubeadm_1.21.11-00_arm64.deb ...
Unpacking kubeadm (1.21.11-00) over (1.20.5-00) ...
Setting up kubeadm (1.21.11-00) ...
kubeadm set on hold.
```

7. Apply update plan

```
kubeadm upgrade node 

#output
[upgrade] Reading configuration from the cluster...
[upgrade] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
[upgrade] Upgrading your Static Pod-hosted control plane instance to version "v1.21.11"...
Static pod: kube-apiserver-k8s-master02 hash: bbdf76d8ed7bbfbefa3eb630aa51b714
Static pod: kube-controller-manager-k8s-master02 hash: 96d194097d7a0962788e7017657e9408
Static pod: kube-scheduler-k8s-master02 hash: 81d2d21449d64d5e6d5e9069a7ca99ed
[upgrade/etcd] Upgrading to TLS for etcd
Static pod: etcd-k8s-master02 hash: dbba304816e4096538130e05d56ce432
[upgrade/staticpods] Preparing for "etcd" upgrade
[upgrade/staticpods] Renewing etcd-server certificate
[upgrade/staticpods] Renewing etcd-peer certificate
[upgrade/staticpods] Renewing etcd-healthcheck-client certificate
[upgrade/staticpods] Moved new manifest to "/etc/kubernetes/manifests/etcd.yaml" and backed up old manifest to "/etc/kubernetes/tmp/kubeadm-backup-manifests-2022-04-10-14-38-44/etcd.yaml"
[upgrade/staticpods] Waiting for the kubelet to restart the component
[upgrade/staticpods] This might take a minute or longer depending on the component/version gap (timeout 5m0s)
Static pod: etcd-k8s-master02 hash: dbba304816e4096538130e05d56ce432
…Static pod: etcd-k8s-master02 hash: 7ad49516ae7d2e9bb37ae4548bac7ee7
[apiclient] Found 3 Pods for label selector component=etcd
[upgrade/staticpods] Component "etcd" upgraded successfully!
[upgrade/etcd] Waiting for etcd to become available
[upgrade/staticpods] Writing new Static Pod manifests to "/etc/kubernetes/tmp/kubeadm-upgraded-manifests617011125"
[upgrade/staticpods] Preparing for "kube-apiserver" upgrade
[upgrade/staticpods] Renewing apiserver certificate
[upgrade/staticpods] Renewing apiserver-kubelet-client certificate
[upgrade/staticpods] Renewing front-proxy-client certificate
[upgrade/staticpods] Renewing apiserver-etcd-client certificate
[upgrade/staticpods] Moved new manifest to "/etc/kubernetes/manifests/kube-apiserver.yaml" and backed up old manifest to "/etc/kubernetes/tmp/kubeadm-backup-manifests-2022-04-10-14-38-44/kube-apiserver.yaml"
[upgrade/staticpods] Waiting for the kubelet to restart the component
[upgrade/staticpods] This might take a minute or longer depending on the component/version gap (timeout 5m0s)
Static pod: kube-apiserver-k8s-master02 hash: bbdf76d8ed7bbfbefa3eb630aa51b714
…
Static pod: kube-apiserver-k8s-master02 hash: c74155fe1ef7591be36cfd2b246ca72a
[apiclient] Found 3 Pods for label selector component=kube-apiserver
[upgrade/staticpods] Component "kube-apiserver" upgraded successfully!
[upgrade/staticpods] Preparing for "kube-controller-manager" upgrade
[upgrade/staticpods] Renewing controller-manager.conf certificate
[upgrade/staticpods] Moved new manifest to "/etc/kubernetes/manifests/kube-controller-manager.yaml" and backed up old manifest to "/etc/kubernetes/tmp/kubeadm-backup-manifests-2022-04-10-14-38-44/kube-controller-manager.yaml"
[upgrade/staticpods] Waiting for the kubelet to restart the component
[upgrade/staticpods] This might take a minute or longer depending on the component/version gap (timeout 5m0s)
Static pod: kube-controller-manager-k8s-master02 hash: 96d194097d7a0962788e7017657e9408
…
Static pod: kube-controller-manager-k8s-master02 hash: c3371115cc8d680965a8dd1b9202a3ee
[apiclient] Found 3 Pods for label selector component=kube-controller-manager
[upgrade/staticpods] Component "kube-controller-manager" upgraded successfully!
[upgrade/staticpods] Preparing for "kube-scheduler" upgrade
[upgrade/staticpods] Renewing scheduler.conf certificate
[upgrade/staticpods] Moved new manifest to "/etc/kubernetes/manifests/kube-scheduler.yaml" and backed up old manifest to "/etc/kubernetes/tmp/kubeadm-backup-manifests-2022-04-10-14-38-44/kube-scheduler.yaml"
[upgrade/staticpods] Waiting for the kubelet to restart the component
[upgrade/staticpods] This might take a minute or longer depending on the component/version gap (timeout 5m0s)
Static pod: kube-scheduler-k8s-master02 hash: 81d2d21449d64d5e6d5e9069a7ca99ed
…Static pod: kube-scheduler-k8s-master02 hash: 93632060532583bc6e1b6f38dd64f10e
[apiclient] Found 3 Pods for label selector component=kube-scheduler
[upgrade/staticpods] Component "kube-scheduler" upgraded successfully!
[upgrade] The control plane instance for this node was successfully updated!
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[upgrade] The configuration for this node was successfully updated!
[upgrade] Now you should go ahead and upgrade the kubelet package using your package manager.

```


8. Update kubectl and restart service

`apt-mark unhold kubelet && apt-get update && apt-get install -y kubelet=1.21.11-00 && apt-mark hold kubelet`

`systemctl restart kubelet`

### Checkpoint - master nodes

Now run `kubectl get nodes` should show all master nodes are having same version v1.21.11.


```
NAME           STATUS   ROLES                  AGE    VERSION
k8s-master01   Ready    control-plane,master   368d   v1.21.11
k8s-master02   Ready    control-plane,master   32h    v1.21.11
k8s-master03   Ready    control-plane,master   368d   v1.21.11
k8s-node01     Ready    <none>                 368d   v1.20.5
```

9. Update kubectl on all master nodes

`apt-mark unhold kubectl && apt-get update && apt-get install -y kubectl=1.21.11-00 && apt-mark hold kubectl`

### Upgrade worker nodes

There is only 1 node to update in my case

10. Update kubeadm on worker node

`apt-mark unhold kubeadm && apt-get update && apt-get install -y kubeadm=1.21.11-00 && apt-mark hold kubeadm`

11. Drain worker node on MASTER machine

```
kubectl drain k8s-node01 --ignore-daemonsets

#output
node/k8s-node01 cordoned
WARNING: ignoring DaemonSet-managed Pods: kube-system/kube-flannel-ds-cttj7, kube-system/kube-proxy-zmkml
evicting pod cert-manager/cert-manager-6588898cb4-bc4ks
...
evicting pod cert-manager/cert-manager-cainjector-7bcbdbd99f-j59b4
...
evicting pod ingress-nginx/ingress-nginx-controller-6d5cfc9f7d-wfr9t
evicting pod cert-manager/cert-manager-webhook-5fd9f9dd86-dx2qq
...
...
pod/cert-manager-cainjector-7bcbdbd99f-j59b4 evicted
I0410 15:12:22.003098   44940 request.go:655] Throttling request took 1.151010174s, request: GET:xxxx
pod/cert-manager-6588898cb4-bc4ks evicted
...
pod/cert-manager-webhook-5fd9f9dd86-dx2qq evicted
pod/ingress-nginx-controller-6d5cfc9f7d-wfr9t evicted
...
node/k8s-node01 evicted
```

12. Apply upgrade to worker node

On worker machine.
```
kubeadm upgrade node

#output
[upgrade] Reading configuration from the cluster...
[upgrade] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
[preflight] Running pre-flight checks
[preflight] Skipping prepull. Not a control plane node.
[upgrade] Skipping phase. Not a control plane node.
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[upgrade] The configuration for this node was successfully updated!
[upgrade] Now you should go ahead and upgrade the kubelet package using your package manager.
```

13. Upgrade kubelet and restart service

`apt-mark unhold kubelet && apt-get update && apt-get install -y kubelet=1.21.11-00 && apt-mark hold kubelet`

`systemctl restart kubelet`


14. Restore worker node

```
kubectl uncordon k8s-node01

#output
node/k8s-node01 uncordoned
```

### Final health check

Run `kubectl get nodes` should show the following result.

```
NAME           STATUS   ROLES                  AGE    VERSION
k8s-master01   Ready    control-plane,master   368d   v1.21.11
k8s-master02   Ready    control-plane,master   32h    v1.21.11
k8s-master03   Ready    control-plane,master   368d   v1.21.11
k8s-node01     Ready    <none>                 368d   v1.21.11
```

### Upgrade also containerd.io

If everything is fine, update the containerd.io to the latest version using the following command

`apt-mark unhold containerd.io && apt-get update && apt-get install -y containerd.io && apt-mark hold containerd.io`


## Useful command

1. Check what version available for a package

```
apt-cache madison containerd.io

# output
containerd.io |   1.5.11-1 | https://download.docker.com/linux/ubuntu focal/stable arm64 Packages
containerd.io |   1.5.10-1 | https://download.docker.com/linux/ubuntu focal/stable arm64 Packages
containerd.io |   1.4.13-1 | https://download.docker.com/linux/ubuntu focal/stable arm64 Packages
...
```

2. Check current install version

```
apt-get -s install containerd.io

# output
NOTE: This is only a simulation!
      apt-get needs root privileges for real execution.
      Keep also in mind that locking is deactivated,
      so don't depend on the relevance to the real current situation!
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following held packages will be changed:
  containerd.io
The following packages will be upgraded:
  containerd.io
1 upgraded, 0 newly installed, 0 to remove and 4 not upgraded.
Inst containerd.io [1.4.4-1] (1.5.11-1 Docker CE:focal [arm64])
Conf containerd.io (1.5.11-1 Docker CE:focal [arm64])

```

## Reference

[1] https://platform9.com/blog/kubernetes-upgrade-the-definitive-guide-to-do-it-yourself/

[2] https://www.lisenet.com/2021/upgrading-homelab-kubernetes-cluster-from-1-20-to-1-21/