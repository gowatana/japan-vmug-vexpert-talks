# イベント情報とコンテンツの管理化

すべてのイベント情報をJSON形式で、「About This Series」コンテンツをHTMLファイルで一元管理できるように改善しました。

## 📁 ファイル構成

```
src/
├── data/
│   ├── events.json          ← イベント情報の一元管理ファイル
│   └── about.html           ← 「About This Series」コンテンツ
├── types/
│   └── event.ts            ← TypeScript 型定義
├── components/
│   └── EventCard.astro     ← イベントカード（更新）
├── pages/
│   └── index.astro         ← ホームページ（更新）
└── layouts/
    └── Layout.astro        ← メインレイアウト
```

## ✨ 主な変更点

### 1. イベント情報の JSON 化
- **ファイル**: [src/data/events.json](/src/data/events.json)
- **内容**: Event 情報の一元管理
- **フォーマット**: スピーカー名、セッションタイトル、リンク、動画URL など

### 2. 「About This Series」の HTML 化
- **ファイル**: [src/data/about.html](/src/data/about.html)
- **内容**: 
  - 企画について（目的、取り組み）
  - 開催概要（開催頻度、形式、セッション例）
- **形式**: 標準的な HTML マークアップ
- **効果**: 読みやすく、編集しやすい

### 3. TypeScript 型定義
- **ファイル**: [src/types/event.ts](/src/types/event.ts)
- **定義**: `Event` インターフェース、`Speaker` インターフェース
- **効果**: IDE サポート、型安全性の向上

### 4. ホームページの改善
- **ファイル**: [src/pages/index.astro](/src/pages/index.astro)
- **変更**:
  - JSON ファイルから動的にイベント情報を読み込み
  - HTML ファイルから「About This Series」コンテンツを読み込み
  - イベント数をカウントして表示（「開催済み: X 回」）
  - イベントを新しい順に自動ソート
  - ハードコード不要

### 5. EventCard コンポーネントの拡張
- **ファイル**: [src/components/EventCard.astro](/src/components/EventCard.astro)
- **変更**:
  - スピーカー vExpert プロフィールへのリンク対応
  - モデレーター vExpert プロフィールへのリンク対応
  - リンクのホバーエフェクト追加

## 🔧 使い方

### 新しいイベントを追加する

[src/data/events.json](/src/data/events.json) に以下のフォーマットで追加：

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

### 「About This Series」を更新する

[src/data/about.html](/src/data/about.html) を直接編集します：

```html
<h2>企画について</h2>
<p>説明テキスト...</p>
<ul>
  <li>項目1
    <ul>
      <li>サブ項目1</li>
    </ul>
  </li>
</ul>
```

### ビルド

```bash
npm run build
```

追加・更新したコンテンツが自動的にページに反映されます！

## 📊 メリット

- ✅ **保守性向上**: イベント情報とコンテンツが分離・一元管理
- ✅ **再利用性**: JSON/HTML データを別ページでも使用可能
- ✅ **スケーラビリティ**: イベント数や内容が増えても対応可能
- ✅ **型安全性**: TypeScript 型定義で開発効率向上
- ✅ **自動ソート**: 新しいイベント順に自動表示
- ✅ **統計情報**: イベント数などを動的に計算
- ✅ **編集性**: HTML で直感的にコンテンツ編集可能

## 🚀 今後の拡張例

- イベント検索機能
- カテゴリー分類（VCF、Security など）
- スピーカー一覧ページ
- イベントアーカイブページ
- RSS フィード生成

