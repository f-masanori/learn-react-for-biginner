### このサンプルを作成した手順

$ npm init

$ npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
$ touch .babelrc

.babelrc

```
{
  "presets": [
    "@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"
  ]
}
```

https://tech.playground.style/javascript/babel-webpack/
