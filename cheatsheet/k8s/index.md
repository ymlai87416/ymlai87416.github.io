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

