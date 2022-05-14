# K8S


## K8s

## Basic admin

See k8s dashboard

```bash
kubectl proxy
ssh -L 8001:localhost:8001 ubuntu@192.168.100.21
```

Find the token for login k8s console
```bash
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"
```

## Cert manager

Cert manager automatically renew.
https://cert-manager.io/docs/usage/certificate/

### Ingress

For exporting stuff

### Cheatsheet

https://kubernetes.io/docs/reference/kubectl/cheatsheet/


### Create a new worker node

```bash
#Tested on ubuntu 22.04 LTS

#install the following

curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" >> ~/kubernetes.list
sudo mv ~/kubernetes.list /etc/apt/sources.list.d
sudo apt update
sudo apt install kubelet=1.22.8-00
sudo apt install kubeadm=1.22.8-00
sudo apt install kubectl=1.22.8-00

# install docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/
docker-archive-keyring.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get install docker-ce docker-ce-cli containerd.io
# enable cri for containerd
nano /etc/containerd/config.toml

sudo swapoff -a
sudo nano /etc/fstab
sudo hostnamectl set-hostname kubernetes-master

# remove all useless iptables rules
iptables -F && iptables -t nat -F && iptables -t mangle -F && iptables -X

lsmod | grep br_netfilter
sudo modprobe br_netfilter
sudo sysctl net.bridge.bridge-nf-call-iptables=1
# if error popout telling [ERROR FileContent--proc-sys-net-ipv4-ip_forward]: /proc/sys/net/ipv4/ip_forward contents are not set to 1, run this
echo 1 > /proc/sys/net/ipv4/ip_forward


kubeadm token create --print-join-command

# if kube-flannel and kube-proxy crash, should have some problem with cidr
kubectl patch node k8s-node02 -p '{"spec":{"podCIDR":"10.244.4.0/24"}}'
# don't know your podcidr?
kubectl cluster-info dump
```
