# My Portfolio

## はじめに


このポートフォリオサイトは、Next.jsとTailwind CSSで作成し、
表示が速く管理しやすい設計を心がけています。

サイトはGitHub Pagesで公開し、
テストやビルド、デプロイはGitHub Actionsを使ったCI/CDで自動化しています。
ß
今後も機能追加や改善を続けていきます。

## 目次

- [概要](#概要)
- [サイトURL](#サイトurl)
- [技術スタック](#技術スタック)
  - [フロントエンド](#フロントエンド)
  - [テスト・品質管理](#テスト品質管理)
  - [ビルド・デプロイ](#ビルドデプロイ)
  - [CI/CD・自動化](#cicd自動化)
  - [バックエンド（現在は未使用）](#バックエンド現在は未使用)
  - [インフラ](#インフラ)
- [開発](#開発)
  - [必要環境](#必要環境)
  - [セットアップ](#セットアップ)
- [スクリプト一覧](#スクリプト一覧)
- [ディレクトリ構成](#ディレクトリ構成)
- [ライセンス](#ライセンス)


---

## サイトURL

[https://sigu-f7a231.github.io/portfolio-site/](https://sigu-f7a231.github.io/portfolio-site/)

---

## 🛠 技術スタック

### フロントエンド

| 項目         | 使用技術・ツール         | 説明                                                                  |
|--------------|--------------------------|-----------------------------------------------------------------------|
| フレームワーク | Next.js (App Router)     | React ベース。App Router + SSG（静的サイト生成）に完全対応           |
| 言語         | TypeScript               | 型安全な JavaScript 拡張で、保守性と信頼性が向上                     |
| スタイリング | Tailwind CSS             | ユーティリティファーストの CSS フレームワーク                         |

---

### テスト・品質管理

| 項目         | 使用技術・ツール            | 説明                                                                  |
|--------------|-----------------------------|-----------------------------------------------------------------------|
| ユニットテスト | Jest, ts-jest               | TypeScript 用のテストランナー + トランスパイラ                        |
| DOMテスト     | Testing Library             | UI コンポーネントの振る舞いをユーザー視点でテスト                     |
| 静的解析     | ESLint                      | コードスタイルとバグの早期発見のための静的解析ツール                  |

---

### ビルド・デプロイ

| 項目       | 使用技術・ツール                        | 説明                                                                  |
|------------|-----------------------------------------|-----------------------------------------------------------------------|
| ビルド      | Next.js (`output: 'export'`)           | `next.config.ts` に指定。`next build` だけで静的ファイルを生成         |
| デプロイ    | GitHub Pages + peaceiris/actions-gh-pages | `out/` ディレクトリを GitHub Pages に公開                             |

---

### CI/CD・自動化

| 項目     | 使用技術・ツール  | 説明                                                                 |
|----------|-------------------|----------------------------------------------------------------------|
| 自動化   | GitHub Actions    | push 時に Lint → Build → Export → GitHub Pages へ自動デプロイ       |


### バックエンド（※現在は未使用）
将来的に、REST API や GraphQL API の導入、MySQL 等のデータベース連携を予定している場合は、以下のような構成が想定されます。

- API: Express, Fastify, or GraphQL
- DB: MySQL, MongoDB + Prisma
- 認証: Auth.js, Firebase Auth など

#### API

| 項目          | 使用技術・ツール               | 説明                                           |
| ----------- | ---------------------- | -------------------------------------------- |
| REST API    | Express, Fastify       | エンドポイント単位でデータをやり取りするシンプルな API 方式。            |
| GraphQL API | Apollo Server, Yoga など | クライアントが必要なデータだけを取得できる柔軟な API アプローチ。          |
| BFF         | Next.js API Routes     | フロントエンド向けの軽量な API 層（Backends For Frontends）。 |


#### データベース
| 種類        | 使用技術・ツール                    | 説明                                      |
| --------- | --------------------------- | --------------------------------------- |
| RDB       | MySQL, PostgreSQL           | リレーショナルなテーブル構造。厳格なデータ整合性が求められる場合に使用。    |
| NoSQL     | MongoDB, Firebase, DynamoDB | スキーマレスで柔軟なデータ管理が可能。ドキュメント志向の非構造型データベース。 |
| ORM / ODM | Prisma, TypeORM, Mongoose   | データベース操作を TypeScript ベースで抽象化するツール群。     |



### インフラ

| 項目       | 使用技術・ツール     | 説明                                          |
| -------- | ------------ | ------------------------------------------- |
| ホスティング   | GitHub Pages | 静的ファイルとしてホスティング。専用のインフラ構成やサーバーは不要。          |
| CDN / 配信 | -            | GitHub Pages に含まれる無料 CDN によって高速配信が実現されています。 |


---

## 開発

### 必要環境

- Node.js 18.x
- npm 9.x 以上

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# Lint 実行
npm run lint

# テスト実行
npm test

# 静的ビルド（GitHub Pages 用）
npm run build
```


## スクリプト一覧
| スクリプト            | 説明                                                            |
| ---------------- | ------------------------------------------------------------- |
| `npm run dev` | 開発モードでアプリを起動（[http://localhost:3000](http://localhost:3000)） |
| `npm run build`  | 本番ビルド（静的サイト出力）                                                |
| `npm run start`  | ビルド済みアプリの起動                                                   |
| `npm run lint`   | ESLint による静的解析                                                |
| `npm test`       | Jest によるテスト実行                                                 |
| `npm run deploy` | ビルド後、GitHub Pages にデプロイ（`gh-pages` 使用）                        |


## ディレクトリ構成
```text
my-portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml               # テスト & Lint の自動実行
│       └── deploy.yml           # GitHub Pages への自動デプロイ
│
├── .next/                       # Next.js のビルド成果物（自動生成）
├── out/                         # 静的ファイル出力ディレクトリ（SSG後の成果物）
│
├── public/                      # 静的ファイル（画像やアイコンなど）
│   ├── file.svg
│   ├── vercel.svg
│   ├── next.svg
│   ├── globe.svg
│   └── window.svg
│
├── src/                         # ソースコード
│   ├── app/                     # App Router のルート構成
│   │   ├── about/               # About ページ
│   │   │   └── page.tsx
│   │   ├── contact/             # Contact ページ
│   │   │   └── page.tsx
│   │   ├── works/               # Works ページ
│   │   │   └── page.tsx
│   │   ├── components/          # UI コンポーネント（Header など）
│   │   │   └── Header.tsx
│   │   ├── favicon.ico          # ファビコン
│   │   ├── layout.tsx           # 全体レイアウト
│   │   ├── page.tsx             # トップページ
│   │   └── globals.css          # グローバルスタイル（Tailwind 設定含む）
│
│   └── __tests__/               # テストコード
│       └── sample.test.tsx      # テストサンプル（Jest + Testing Library）
│
├── .gitignore                   # Git で無視するファイル定義
├── eslint.config.mjs           # ESLint 設定
├── jest.config.ts              # Jest 設定
├── jest.setup.ts               # Jest の初期設定
├── next.config.ts              # Next.js のカスタム設定（basePath など）
├── next-env.d.ts               # Next.js による型定義（自動生成）
├── package.json                # プロジェクト設定・依存関係・スクリプト
├── package-lock.json           # npm の依存関係ロック
├── postcss.config.mjs          # PostCSS 設定（Tailwind用）
├── tailwind.config.ts          # Tailwind CSS の設定
├── tsconfig.json               # TypeScript のコンパイラ設定
└── README.md                   # プロジェクトの概要と構成


```

---


## ライセンス

このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
ご自由に利用・改変・再配布可能ですが、著作権表示とライセンス文を含めてください。