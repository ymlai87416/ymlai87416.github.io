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

Remove all dead port

```bash
kubectl get pods --no-headers=true | awk '/replicator/{print $1}'| xargs  kubectl delete pod
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


## Running helm chart

All the chart are to be downloaded first and modify before deploy.

```bash
# download the chart
helm pull bitnami/mysql --untar=true

# add myvalue.yml for customerization

# generate the yaml
helm install my-release ./xxxxxx --values=./xxx/myvalue.yaml

# generate the yaml
helm template monitoring ./xxxxxx --values=./xxx/myvalue.yaml > ./xxx/stack.yaml

# install the yaml
k8s apply -f ./xxx/stack.yaml
```

## Create a service account

```bash
kubectl create role spark-submitter --verb=get --verb=list --verb=create --verb=delete --resource=sparkapplications.sparkoperator.k8s.io --namespace=spark-operator

kubectl create sa spark-submitter-sa -n spark-operator

kubectl create rolebinding spark-submitter-binding --role=spark-submitter --serviceaccount=spark-operator:spark-submitter-sa -n spark-operator

# can across different namespaces
kubectl create rolebinding spark-submitter-binding2 --role=spark-submitter --serviceaccount=system-design:spark-submitter-sa -n spark-operator
```

## Calling from pod

```bash
token=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)

curl -v --cacert /var/run/secrets/kubernetes.io/serviceaccount/ca.crt -H "Authorization: Bearer $token" https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_PORT_443_TCP_PORT/apis/sparkoperator.k8s.io/v1beta2/namespaces/spark-operator/sparkapplications/spark-pi


curl -v --cacert /var/run/secrets/kubernetes.io/serviceaccount/ca.crt -H "Authorization: Bearer $token" https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_PORT_443_TCP_PORT/apis/sparkoperator.k8s.io/v1beta2/namespaces/spark-operator/sparkapplications?limit=500
```
