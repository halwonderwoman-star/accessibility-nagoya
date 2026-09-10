# Accessibility Map NAGOYA

名古屋駅・栄・矢場町・大須エリアと、あいち・なごや2026アジア競技大会 会場の
バリアフリー情報サイト（静的HTML、ビルド不要）。

## 構成

- `index.html` — トップページ
- `amn-*.html` — 各エリア／路線／バス／トイレのページ
- `venue-*.html` — アジア競技大会 会場ページ

すべて単一ファイル完結型（CSS・JS・画像を内部に埋め込み済み）の静的HTMLです。
ビルドコマンドは不要で、フォルダをそのまま配信すれば動作します。

## デプロイ（Cloudflare Pages）

1. このリポジトリをGitHubに接続
2. Cloudflare Pages で「Create a project」→「Connect to Git」
3. ビルド設定：
   - Build command: （空欄のまま）
   - Build output directory: `/`
4. デプロイ後、`*.pages.dev` の初期URLで公開される
5. 独自ドメインは Cloudflare Pages の「Custom domains」から追加

## 既知の未対応事項

各ページのヘッダー内ナビ・パンくずリスト・フッターリンクの一部は
`<!-- [LINK] -->` のプレースホルダー（`href="#"`）のままで、正式な相互リンクが
未設定です。公開前後に実ファイルパスへの張り替えが必要です。
