## このサンプルについて

### 目的

learn-babel は、babel を使って React の tsx のコードを js に変換することを学ぶコードです。

### babel について

babel は、ブラウザが対応していない新しいバージョンで書かれた Javascript のコードを、古いバージョンの Javascript のコードに変換するツール。
ただ、babel に設定を加えると JSX を JS にトランスパイルすることもできる。

＊JSX は JS の糖衣構文に過ぎない
＊JSX は Javascript XML
＊JSX をブラウザで読み込ませるには、JS に変換(トランスパイル)する必要がある

- ブラウザ側でライブラリを使う方法は？
  - CDN
  - バンドル

## 起動手順

まず、babel を使って tsx を js に変換する。変換後の js は lib ディレクトリ内にある。(tsx は jsx の typescript バージョン)
$ npx babel --presets @babel/preset-typescript --extensions .tsx ./src/index.tsx --out-dir ./lib

次に、web サーバーを起動する
$ node devServer.js

localhost:3000 にアクセスして src/index.tsx に記述したものが表示されていることを確認できる

## このサンプルを作成した手順

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
