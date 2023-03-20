---
title: "How to do git"
date: 2022-12-20T00:00:00+08:00
draft: true
tags: ["computer science", "git"]
---

## Git is difficult

There are git flow, and other type of ideas, here I propose a way to do Git.

I also list some oepn source project on GitHub, and see how they use Git.

## Ideas

- Commit small, commit often

- put all your change into 1 single commit before issuing pull request

```
git rebase --root -i
```

- rebase your fork workspace with the original head

There are 2 ways of doing it.
1. Fork in Github. In this case, you may need to resync your folk to include the latest update.

```
git fetch 
```

2. A branch is created, in this case, you just need to periodically rebase your change


- create a pull request and trigger integration test to build

I have work on kafka-ui, it has a good checking for each pull-request. A build and run test is needed because it is a important indicator for code approval.
https://github.com/provectus/kafka-ui/pull/3094

- after merge, it should be on the main branch. Use Github Action to deploy or generate artifact

In Github, you can only fix simple conflict, so it is not recommend
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github

The artifact has {major}.{minior}.{release} number, how can it be done in automatically way?

Now the test is triggered again, and only if build and test are successful, deployment then be executed.

## when to create a feature branch?

You may not need to do that, because you commit small and often. The situation you are force to do this, is the change is too big that it is a different piece of software or an architecture rewrite.

## Private repository in Github

### Java / Scala
Maven style 

### Python
Python can use the following link to fetch the package, you can put it in a private repository.

```
git+https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/user/project.git@{version}
```