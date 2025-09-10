# My Portfolio

## はじめに

このポートフォリオサイトは、最新のWeb技術を用いて制作しました。  
シンプルで高速、かつメンテナンス性の高い設計を目指しています。  
GitHub Pagesを使った静的ホスティングで、CI/CDも自動化しています。

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

## 技術スタック

###  フロントエンド

| 項目      | 使用技術・ツール                                      | 説明                                   |
| ------- | --------------------------------------------- | ------------------------------------ |
| フレームワーク | [Next.js](https://nextjs.org/)                | React ベース。App RouterとSSG（静的サイト生成）対応。 |
| 言語      | [TypeScript](https://www.typescriptlang.org/) | 型安全な JavaScript 拡張言語で、保守性と信頼性向上。     |
| スタイリング  | [Tailwind CSS](https://tailwindcss.com/)      | ユーティリティファーストの CSS フレームワーク。           |

### テスト・品質管理

| 項目      | 使用技術・ツール                                                                     | 説明                             |
| ------- | ---------------------------------------------------------------------------- | ------------------------------ |
| ユニットテスト | [Jest](https://jestjs.io/), [ts-jest](https://kulshekhar.github.io/ts-jest/) | TypeScript 用のテストランナー + トランスパイラ |
| DOMテスト  | [Testing Library](https://testing-library.com/)                              | UI コンポーネントの振る舞いを確認             |
| 静的解析    | [ESLint](https://eslint.org/)                                                | コードスタイルとバグの早期発見のための静的解析ツール     |


### ビルド・デプロイ

| 項目   | 使用技術・ツール                                                                                      | 説明                              |
| ---- | --------------------------------------------------------------------------------------------- | ------------------------------- |
| ビルド  | [Next.js](https://nextjs.org/) (`next build`, `next export`)                                  | 静的ファイル (`out/`) の出力             |
| デプロイ | [gh-pages](https://www.npmjs.com/package/gh-pages), [GitHub Pages](https://pages.github.com/) | `out/` ディレクトリを GitHub Pages に公開 |

### CI/CD・自動化

| 項目  | 使用技術・ツール                                              | 説明                      |
| --- | ----------------------------------------------------- | ----------------------- |
| 自動化 | [GitHub Actions](https://github.com/features/actions) | テスト、Lint、ビルド、デプロイを自動で実行 |


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
├── .github/workflows/            # GitHub Actions の設定
│   ├── ci.yml                    # テスト & Lint の自動実行
│   └── deploy.yml                # GitHub Pages への自動デプロイ
│
├── .next/                        # Next.js のビルド成果物（自動生成）
├── out/                          # 静的ファイル出力ディレクトリ（SSG後の成果物）
│
├── public/                       # 静的ファイル（画像やアイコン）
│   ├── file.svg
│   ├── vercel.svg
│   ├── next.svg
│   ├── globe.svg
│   └── window.svg
│
├── src/                          # アプリケーションのソースコード
│   ├── app/                      # App Router 用のページ・レイアウト
│   │   ├── favicon.ico           # サイトアイコン
│   │   ├── layout.tsx            # 全体レイアウト
│   │   ├── page.tsx              # トップページ（ルート）
│   │   └── globals.css           # グローバルスタイル（Tailwind 設定含む）
│   │
│   └── __tests__/                # テストディレクトリ
│       └── sample.test.tsx       # テストサンプル（Jest + Testing Library）
│
├── .gitignore                    # Git で無視するファイル一覧
├── eslint.config.mjs            # ESLint 設定ファイル（モジュール形式）
├── jest.config.ts               # Jest 設定ファイル（TypeScript）
├── jest.setup.ts                # Jest のセットアップファイル
├── next.config.ts               # Next.js のカスタム設定（SSG, basePath など）
├── next-env.d.ts                # Next.js による型定義（自動生成）
├── package.json                 # プロジェクト設定・依存関係・スクリプト
├── package-lock.json            # npm の依存関係ロックファイル
├── postcss.config.mjs           # Tailwind 用の PostCSS 設定
├── tsconfig.json                # TypeScript のコンパイラ設定
└── README.md                    # このプロジェクトの説明ファイル

```

---


## ライセンス

このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
ご自由に利用・改変・再配布可能ですが、著作権表示とライセンス文を含めてください。