## このサンプルについて

### 目的

learn-babel は、babel を使って React の tsx のコードを js に変換することを学ぶコードです。

### babel について

babel は、ブラウザが対応していない新しいバージョンで書かれた Javascript のコードを、古いバージョンの Javascript のコードに変換するツール。
ただ、babel に設定を加えると JSX を JS にトランスパイルすることもできる。

- JSX は JS の糖衣構文に過ぎない
- JSX は Javascript XML
- JSX をブラウザで読み込ませるには、JS に変換(トランスパイル)する必要がある

## 起動手順

まず、以下のコマンドを実行して babel を使って tsx を js に変換する。変換後の js は lib ディレクトリ内にある。(tsx は jsx の typescript バージョン)

```
$ npx babel --presets @babel/preset-typescript --extensions .tsx ./src/index.tsx --out-dir ./lib
```

次に、以下のコマンドで web サーバーを起動する

```
$ node devServer.js
```

localhost:3000 にアクセスして src/index.tsx に記述したものが表示されていることを確認できる

## 基礎メモ

- ブラウザ側でライブラリを使う方法は？
  - CDN
  - バンドル
