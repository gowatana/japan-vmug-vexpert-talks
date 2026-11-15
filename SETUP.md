# Japan VMUG vExpert Talks Website

シンプルで美しい Astro + Clarity UI + GitHub Pages で構築された、Japan VMUG "vExpertが語る" イベントの公式サイト。

## Features

- シンプルなデザイン - Clarity UI による一貫性のあるUIコンポーネント
- レスポンシブ - モバイル、タブレット、デスクトップに対応
- 高速 - 静的サイト生成（SSG）による超高速ロード
- GitHub Pages対応 - 自動デプロイメント対応
- 日本語対応 - 日本語メインサイト

## Tech Stack

- **Astro 4.x** - モダンな静的サイトジェネレーター
- **Clarity UI (@clr/ui)** - VMware公式UIフレームワーク
- **Node.js 20+** - 開発環境
- **GitHub Actions** - CI/CD デプロイメント

## Project Structure

```
japan-vmug-vexpert-talks/
├── src/
│   ├── components/          # 再利用可能なコンポーネント
│   │   └── EventCard.astro  # イベントカードコンポーネント
│   ├── data/                # データファイル
│   │   ├── events.json      # イベント情報
│   │   └── about.html       # About This Series コンテンツ
│   ├── types/               # TypeScript 型定義
│   │   └── event.ts         # Event インターフェース
│   ├── layouts/             # ページレイアウト
│   │   └── Layout.astro     # メインレイアウト
│   └── pages/               # ページファイル
│       └── index.astro      # ホームページ
├── public/                  # 静的ファイル
│   └── top-image.png        # トップ画像
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages デプロイワークフロー
├── astro.config.mjs         # Astro 設定
├── package.json             # npm 依存関係
└── README.md                # プロジェクト概要
```

## セットアップと実行

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動し、`http://localhost:3000` でサイトを表示できます。

### 3. 本番ビルド

```bash
npm run build
```

`dist/` ディレクトリに最適化されたサイトが生成されます。

### 4. ビルド結果のプレビュー

```bash
npm run preview
```

## イベント情報の管理

イベント情報とコンテンツは JSON および HTML ファイル形式で管理されています。

### イベント情報の追加・編集

イベント情報は [src/data/events.json](/src/data/events.json) に保存されています。

新しいイベントを追加するには、以下のフォーマットで JSON に追加します：

```json
{
  "number": 60,
  "date": "2026年11月15日（金）",
  "time": "18:00 - 20:00",
  "eventLink": "https://vmug-jp.connpass.com/event/XXXXXX/",
  "recordingLink": "https://www.youtube.com/playlist?list=XXXXX",
  "speakers": [
    {
      "name": "Speaker Name",
      "link": "https://vexpert.vmware.com/directory/XXXXX",
      "title": "Session Title",
      "recordingLink": "https://www.youtube.com/watch?v=XXXXX"
    }
  ],
  "moderator": "Moderator Name",
  "moderatorLink": "https://vexpert.vmware.com/directory/XXXXX"
}
```

### フィールドの説明

| フィールド | 型 | 説明 | 必須 |
|-----------|-----|------|-----|
| `number` | number | イベント番号 | 必須 |
| `date` | string | 開催日（例: "2026年11月15日（金）"） | 必須 |
| `time` | string | 開催時間（例: "18:00 - 20:00"） | 必須 |
| `eventLink` | string | Connpass イベントページへのリンク | オプション |
| `recordingLink` | string | YouTube プレイリストへのリンク | オプション |
| `speakers` | array | スピーカーリスト | 必須 |
| `speakers[].name` | string | スピーカー名 | 必須 |
| `speakers[].link` | string | vExpert プロフィールへのリンク | オプション |
| `speakers[].title` | string | セッションタイトル | 必須 |
| `speakers[].recordingLink` | string | YouTube 動画へのリンク | オプション |
| `moderator` | string | モデレーター名 | 必須 |
| `moderatorLink` | string | モデレーター vExpert プロフィールへのリンク | オプション |

### About This Series の編集

「About This Series」のコンテンツは [src/data/about.html](/src/data/about.html) で管理されています。

HTML形式で直接編集できます：

```html
<h2>企画について</h2>

<p>Japan VMUG (VMware User Group) と vExpert Pro とで、「vExpertが語る会」を定期的に開催しています。</p>

<ul>
  <li>項目1
    <ul>
      <li>サブ項目1</li>
    </ul>
  </li>
  <li><a href="https://example.com">リンク付きテキスト</a></li>
</ul>
```

### 自動的にホームページに表示

JSON ファイルに追加したイベント、および HTML ファイルのコンテンツは、[src/pages/index.astro](/src/pages/index.astro) で自動的に読み込まれ、表示されます。

変更後は以下を実行：

```bash
npm run build
```

## GitHub Pages へのデプロイ

このプロジェクトは自動的に GitHub Pages にデプロイされます：

### 前提条件の設定

GitHub リポジトリの Settings > Pages で、"Build and deployment" を "GitHub Actions" に設定

### 自動デプロイ

- `main` ブランチへの push で自動的に `.github/workflows/deploy.yml` が実行されます
- ビルド後、`dist/` ディレクトリの内容が自動的にデプロイされます

### デプロイ URL

```
https://gowatana.github.io/japan-vmug-vexpert-talks/
```

## カスタマイズ

### レイアウトの変更

[src/layouts/Layout.astro](/src/layouts/Layout.astro) でレイアウト全体をカスタマイズできます：

- ヘッダーのカラースキーム
- フッターのコンテンツ
- グローバルスタイル

### Clarity UI の活用

Clarity UI の詳細については [公式ドキュメント](https://clarity.design/) を参照してください。

## パッケージ管理

### パッケージの更新

```bash
npm update
```

### 新しいパッケージの追加

```bash
npm install <package-name>
```

## トラブルシューティング

### ポート 3000 が既に使用されている場合

```bash
npm run dev -- --port 3001
```

### ビルドエラーが発生した場合

```bash
# キャッシュをクリア
rm -rf dist node_modules
npm install
npm run build
```

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 貢献

バグ報告や機能リクエストは [GitHub Issues](https://github.com/gowatana/japan-vmug-vexpert-talks/issues) でお願いします。

## サポート

質問や問題がある場合は、以下のいずれかの方法でお問い合わせください：

- GitHub Issues を作成
- Japan VMUG の公式サイト: https://vmug.com/
- vExpert プログラム: https://vexpert.vmware.com/

---

Build with care by Japan VMUG Community
