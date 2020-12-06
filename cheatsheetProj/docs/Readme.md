# Cheatsheet for Tom

This site is built using vuepress

Offical site: https://vuepress.vuejs.org/


## To build

The site is hosted at  https://ymlai87416.github.io/cheatsheet/

Run the following command under /docs directory

``` 
npm run docs:build
```

Copy the output to the ymlai87416.github.io/cheatsheet directory

```
cd docs/.vuepress/dist
```

Change to Git directory ymlai87416.github.io

```
git init
git add -A
git commit -m 'deploy'
git push
```

Reference: Offical site: https://vuepress.vuejs.org/guide/deploy.html

## To add a language

* Go to `/docs/guide` and add a new file.

* Write the cheatsheet

* Add the page to src/.vuepress/config.js

```javascript
sidebar: {
    '/guide/': [
    {
        title: 'Guide',
        collapsable: false,
        children: [
        //'',
        //'using-vue',
        'java',
```
