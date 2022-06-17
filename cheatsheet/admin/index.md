# Server admin


## Server administration

### Linux

#### Create user

```bash
sudo useradd test
sudo mkdir /home/test
sudo chown -R test: /home/test
```

#### Routine server patch

```bash
sudo apt update
sudo apt upgrade

#Exclude some packages
```

### Setup VM and make it start automatically

Please refer to this cheatsheet

```bash
## install virt-manager, it can connect to remote vm server
virt-manager
virsh autostart vmName

virsh list
virsh dominfo k8s-node01
virsh nodeinfo
```

### Expand LVM volume

```bash
# ubuntu default only use half of the volume

```

### MySQL

#### Create user with remote access

```
CREATE USER 'myuser'@'%' IDENTIFIED BY 'mypass';
```

### Create new database and grant admin right to new user

```
create database DWH;
GRANT ALL ON database.table TO 'username'@'%';
FLUSH PRIVILEGES;
```

#### Create a table
```bash
# create table
create table test(
name VARCHAR(100), value VARCHAR(100), description VARCHAR(500)
)

# primary key
ALTER TABLE Persons
ADD PRIMARY KEY (name);
```

### Redis

```bash
# connect to redis server
redis-cli
keys *
del abc
get abc
set abc "hello"
```


### Zookeeper

```bash
# connect to zookeeper server
zkCli -server localhost:22181
[zk: localhost:22181(CONNECTED) 0] ls /
[admin, brokers, cluster, config, consumers, controller, controller_epoch, feature, isr_change_notification, latest_producer_id_block, log_dir_event_notification, services, testapp, zookeeper]

get /testapp/application/f89497d9-a0ba-474e-8b4b-6878a700adf6 
{"name":"application","id":"f89497d9-a0ba-474e-8b4b-6878a700adf6","address":"yiude-mbp","port":8282,"sslPort":null,"payload":{"@class":"org.springframework.cloud.zookeeper.discovery.ZookeeperInstance","id":"application","name":"application","metadata":{"instance_status":"UP"}},"registrationTimeUTC":1654331328914,"serviceType":"DYNAMIC","uriSpec":{"parts":[{"value":"scheme","variable":true},{"value":"://","variable":false},{"value":"address","variable":true},{"value":":","variable":false},{"value":"port","variable":true}]}}
```

### Kafka

```bash
# create topic
kafka-topics --create --topic testapp-wordcount --bootstrap-server kafka:9092
kafka-console-producer --topic testapp-wordcount --bootstrap-server kafka:9092
kafka-console-consumer --topic testapp-wordcount --from-beginning --bootstrap-server kafka:9092
```

### Docker

```bash
# to a folder with Dockerfile
DOCKER_BUILDKIT=1 docker build -t ymlai87416/spark-master:3.2.0-hadoop3.2 .
docker login
docker push ymlai87416/semi-trade:v0.41

# to a folder with docker-compose.yml
docker-compose up

# copy file to docker machine
docker cp  CONTAINER:SRC_PATH DEST_PATH|
```

### K8s

#### Basic admin

See k8s dashboard

```bash
kubectl proxy
ssh -L 8001:localhost:8001 ubuntu@192.168.100.21
```

Find the token for login k8s console
```
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"
```

#### Cert manager

Cert manager automatically renew.
https://cert-manager.io/docs/usage/certificate/

### Ingress

For exporting stuff

#### Cheatsheet

https://kubernetes.io/docs/reference/kubectl/cheatsheet/

