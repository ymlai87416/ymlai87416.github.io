---
weight: 1
title: "Development"
date: "2022-04-04"
author: "Tom"
draft: false

lightgallery: false

toc:
  enable: true
  auto: true
---

## Development

### Java

```bash
# build mvn without test
mvn clean install -DskipTests

# run jar specifying the class
java -cp myjar.jar com.mypackage.myClass
```

### Git


```bash
# add a new git branch and checkout
git checkout -b your-new-branch-name

# push to the new branch
git push origin <add-your-branch-name>
```