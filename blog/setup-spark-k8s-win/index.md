# Setting up Spark servers on Kubernetes on Windows


Spark is a useful Big data tool and set up a Spark cluster usually difficult.
 
In the past, I have tried using Spark as a single node mode. But now with the technology advancement, I can use Docker and Kubernetes to test Spark cluster instead of using Oracle VirtualBox.
 
If you want to try out Kubernetes. I recommend you to try it on GCP first. Kubernetes is already set up there and you can try out the concept first before troubleshooting incorrect setup. It also has a nice tutorial to walk you through how to create service on GCP with the help of Kubernetes

 
 
Then I turn my study to a book Mastering Kubernetes – Gigi Sayfan. Reading first 2 chapter is enough for you to set up Spark cluster on Kubernetes. Why I am writing this is that some contents I found on books and web (Stackoverflow, forums) are outdated.
 
Setting up Kubernetes on Windows
VirtualBox
Kubectl
Minikube
 
Downloading the latest executable is important or you end up troubleshooting incompatibility issues.
 
Put the downloaded executable to C:\Windows may work but I suggest to create a folder and put Kubectl and Minikube inside it, and set Window %PATH% variable to point to this folder.
 
I am using Windows Powershell.
 
To build a cluster, use minikube-windows-amd64.exe start.
You can always delete your cluster by minikube-windows-amd64.exe disable and remove all the file inside C:\Users\USER\.minikube


```powershell
PS C:\Users\USER> minikube-windows-amd64.exe start
minikube-windows-amd64 : W0914 08:39:56.582285 3148 root.go:148] Error reading config file at C:\Users\USER\.minikube\config\config.json: open C:\Users\USER\.minikube\config\config.json: The system cannot find the path spec
ified.
位於 C:\Users\USER\OneDrive\文件\WindowsPowerShell\Microsoft.PowerShellISE_profile.ps1:4 字元:1
+ minikube-windows-amd64 `
+ ~~~~~~~~~~~~~~~~~~~~~~~~
+ CategoryInfo : NotSpecified: (W0914 08:39:56….path specified.:String) [], RemoteException
+ FullyQualifiedErrorId : NativeCommandError

There is a newer version of minikube available (v0.28.2). Download it here:
https://github.com/kubernetes/minikube/releases/tag/v0.28.2
To disable this notification, run the following:
minikube config set WantUpdateNotification false
Starting local Kubernetes v1.11.0 cluster…
Starting VM…
Downloading Minikube ISO

0 B / 161.76 MB 0.00%
67.57 KB / 161.76 MB 0.04% 57m18s
84.57 KB / 161.76 MB 0.05% 58m51s
…
159.81 MB / 161.76 MB 98.79% 0s
161.13 MB / 161.76 MB 99.61% 0s
161.76 MB / 161.76 MB 100.00% 0s
Creating CA: C:\Users\USER\.minikube\certs\ca.pem
Creating client certificate: C:\Users\USER\.minikube\certs\cert.pem
Downloading C:\Users\USER\.minikube\cache\boot2docker.iso from file://C:/Users/USER/.minikube/cache/iso/minikube-v0.28.0.iso…
Creating VirtualBox VM…
Creating SSH key…
Starting the VM…
Check network to re-create if needed…
Windows might ask for the permission to configure a dhcp server. Sometimes, such confirmation window is minimized in the taskbar.
Waiting for an IP…
Setting Docker configuration on the remote daemon…
Getting VM IP address…
Moving files into cluster…
Downloading kubeadm v1.11.0
Downloading kubelet v1.11.0
Finished Downloading kubeadm v1.11.0
Finished Downloading kubelet v1.11.0
sudo systemctl daemon-reload &&
sudo systemctl enable kubelet &&
sudo systemctl start kubelet
Setting up certs…
Connecting to cluster…
Setting up kubeconfig…
I0914 08:42:14.462949 3148 config.go:101] Using kubeconfig: C:\Users\USER/.kube/config
Starting cluster components…
sudo /usr/bin/kubeadm init –config /var/lib/kubeadm.yaml –ignore-preflight-errors=DirAvailable–etc-kubernetes-manifests –ignore-preflight-errors=DirAvailable–data-minikube –ignore-preflight-errors=Port-10250 –ignore-prefl
ight-errors=FileAvailable–etc-kubernetes-manifests-kube-scheduler.yaml –ignore-preflight-errors=FileAvailable–etc-kubernetes-manifests-kube-apiserver.yaml –ignore-preflight-errors=FileAvailable–etc-kubernetes-manifests-kube
-controller-manager.yaml –ignore-preflight-errors=FileAvailable–etc-kubernetes-manifests-etcd.yaml –ignore-preflight-errors=Swap –ignore-preflight-errors=CRI &&
sudo /usr/bin/kubeadm alpha phase addon kube-dns

Kubectl is now configured to use the cluster.
Loading cached images from config file.

```

Now you have a decent VM in your VirtualBox (default 2 vCPUs and 4 G Ram)

{{< figure src="/images/kubernetes_virtualbox-768x579.png" alt="OSCP" position="center" style="border-radius: 8px;"  >}}

To see the Kubernetes dashboard, use this command: minikube-windows-amd64.exe addons list to ensure that the dashboard module is on.
If it is not, run minikube-windows-amd64.exe addons enable dashboard. Now you should be able to run minikube-windows-amd64.exe dashboard. and use the URL provided to access the dashboard


```
PS C:\Users\USER> mk addons list
– addon-manager: enabled
– coredns: disabled
– dashboard: enabled
– default-storageclass: enabled
– efk: disabled
– flannel-cni: enabled
– freshpod: disabled
– heapster: disabled
– ingress: disabled
– kube-dns: disabled
– kube-go: disabled
– metrics-server: disabled
– nvidia-driver-installer: disabled
– nvidia-gpu-device-plugin: disabled
– registry: disabled
– registry-creds: disabled
– storage-provisioner: enabled
```

Dashboard Sample:

{{< figure src="/images/kubernetes_dashboar-1024x639.png" alt="OSCP" position="center" style="border-radius: 8px;"  >}}

For the time being, You are forbidden to access to “Setting” page, please go to this URL for setting up an administrator account and login Kubernetes dashboard.
 
SSH to Minikube machine does not work on Powershell, you have to use it inside normal CMD.

{{< figure src="/images/ssh_powershell_failure.png" alt="OSCP" position="center" style="border-radius: 8px;"  >}}

{{< figure src="/images/ssh_cmd_success-768x402.png" alt="OSCP" position="center" style="border-radius: 8px;"  >}}

At this time, you can access to both Kubernetes dashboard and Kubernetes host.
 
You can refer to the book [Mastering Kubernetes – Gigi Sayfan](https://www.amazon.com/Mastering-Kubernetes-Master-container-management/dp/1788999789/ref=sr_1_1_sspa?ie=UTF8&qid=1536904327&sr=8-1-spons&keywords=Mastering+Kubernetes+-+Gigi+Sayfan&psc=1) and run the echo server, it should not be a difficult problem.

 
Now, go to https://github.com/kubernetes/examples/tree/master/staging/spark?1536916786831 and download the scripts for creating the nodes and follow the instruction in README.md

 
Now you should be able to create a Kubernetes Spark cluster (vCPU=3 and Memory > 10GB)

Here is the screenshot of the Spark Web UI:

{{< figure src="/images/spark_dashboar.png" alt="OSCP" position="center" style="border-radius: 8px;"  >}}

Here is the Zeppelin notebook UI

{{< figure src="/images/zeppelin_dashboard.png" alt="OSCP" position="center" style="border-radius: 8px;"  >}}

Here is the screenshot of running scripts on PySpark

{{< figure src="/images/pyspark-768x401.png" alt="OSCP" position="center" style="border-radius: 8px;"  >}}

