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

```bash
## install virt-manager, it can connect to remote vm server
virt-manager
virsh autostart vmName
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

