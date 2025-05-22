# サイト圧縮ワークフロー（Gulp 使用）

このプロジェクトは、HTML、CSS、JavaScript、画像を自動で最適化・圧縮する Gulp ワークフローです。

## 🔧 機能

- HTML の minify（空白の削除など）
- CSS の minify
- JavaScript の minify
- JPEG/PNG 画像の圧縮
- `src/` フォルダから `output/` フォルダへのビルド

## 📁 ディレクトリ構成

```
SiteCompressor/
├── src/               # 元ファイル (HTML, CSS, JS, 画像)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── img/
├── output/            # 出力フォルダ（自動生成）
├── gulpfile.js        # Gulp 設定ファイル
├── package.json       # npm パッケージ情報
└── .gitignore         # Git 除外設定
```

## 🚀 セットアップ方法

1. このリポジトリをクローンまたはダウンロード
2. ターミナルでプロジェクトのルートに移動
3. 依存関係をインストール:

```bash
npm install
```
4. 元ファイル（HTML,CSS,JavaScript,img/JPEG,img/PNG）をsrcに入れる

## ▶️ ビルド実行方法
以下のコマンドでビルドを実行します：

```bash
npx gulp
```
output/ フォルダ内に最適化されたファイルが出力されます。

## ⚠️ 注意事項
node_modules/ フォルダは含めていません。npm install を実行して再構築してください。

output/ フォルダも通常は Git に含めません。

## 🧰 使用ライブラリ
Gulp

gulp-htmlmin

gulp-clean-css

gulp-terser

gulp-imagemin

imagemin-mozjpeg

imagemin-optipng

