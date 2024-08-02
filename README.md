# Astro の基本環境構築

## はじめに

### 目的

幅広い用途で使い回しが可能な基本環境を構築する。
Github にアップロードしておき雛形として活用する。
プロジェクト制作時に環境構築作業をスムーズにする。

### 開発環境

-   Node.js
-   pnpm
-   VSCode（拡張機能「Astro」をインストールしておく）
-   Windows10

## 仕様

-   README：仕様一覧と導入目的を記録しておく

### インストール

-   コマンド：pnpm create astro@latest
-   Where should we create your new project?→./astro
-   How would you like to start your new project?→ Empty
-   Do you plan to write TypeScript?→Yes
-   How strict should TypeScript be?→Strict
-   Install dependencies?→ Yes
-   Initialize a new git repository?→Yes

### リンター・フォーマッター

対応次第Biome一本に切り替えていく予定。

-   Prettier：HTML
-   Stylelint：CSS
-   Biome：JS/TS/JSON/*JSX*など

### gitignore

-   gitignore.ioで作成
-   astro/node.js/windows/VisualStudioCode

### astroインテグレーション

-   @astrojs/mdx：MDXへの対応
-   @astrojs/rss：RSSフィードの自動生成（rss.xml.ts）
-   astro-compress（@playform/compress）：ファイル圧縮
-   @astrojs/sitemap：サイトマップを自動的に生成
-   @astrojs/partytown：Google AnalyticsGAの最適化。
-   astro-seo：SEO対策

### その他パッケージ

-   pnpmを使用しているため「Sharp」：pnpm install -D sharp
-   MDの見出しIDを設定：pnpm install -D remark-heading-id
-   Sass：pnpm install -D sass
-   Vite：pnpm install -D vite
-   Google Fontsの最適化処理。： pnpm i astro-google-fonts-optimizer

### ディレクトリ作成

src内に追加

-   components
-   layouts
-   styles
-   content
-   img

### \*汎用的なastroファイルを追加

-   404

#### - headコンポーネント

-   headerコンポーネント
-   footerコンポーネント
-   base-layoutコンポーネント

### 汎用的なCSSファイルを追加

astro.configのvite設定でグローバル読み込みをする

-   reset（thenewcssreset）
-   global
-   variable
-   mixin（デフォルトの記述はなし）

### 設定

### astro.config

デフォルト値を使用する場合は記述しない。

##### トップレベル

-   site：最終的な出力URL
-   integrations：拡張機能のパッケージ

##### ビルド

-   assets : "\_assets"：JSやCSSなどのアセットが出力されるディレクトリ

##### Vite

-   共通importの設定

##### プリフェッチ

スマートフォンユーザーへの配慮や閲覧環境による格差を避ける観点から、デフォルトのfalseを採用。

#### ts.config

-   パスエイリアス
-   scripts:{build}：エラー時はビルドしないように設定

#### その他設定ファイル

-   rss.xml.ts：src/pages/に作成。RSSフィードの設定。
-   config.ts：content/に作成。コンテンツコレクションの設定。
-   robots.txt：src/pages/に作成。ロボット設定を動的に作成。

### 命名規則

-   ファイル名：ケバブケース
-   変数名：キャメルケース
-   import宣言名：パスカルケース

## 保留事項

-   画像最適化
