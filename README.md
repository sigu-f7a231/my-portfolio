# My Portfolio

## 概要

このリポジトリは、Next.jsとTypeScript、Tailwind CSSを使って作成したポートフォリオサイトです。  
静的サイト生成（SSG）に対応しており、GitHub Pagesでホスティングしています。  
CI/CDはGitHub Actionsで自動ビルド・自動デプロイを実現しています。

---

## サイトURL

[https://sigu-f7a231.github.io/portfolio-site/](https://sigu-f7a231.github.io/portfolio-site/)

---

## 技術スタック


| 分野         | 使用技術・ツール              | 用途・補足説明                                                                 |
|--------------|-------------------------------|--------------------------------------------------------------------------------|
| フレームワーク | [Next.js](https://nextjs.org/) | React ベースのフレームワーク。App Router と SSG（静的サイト生成）を使用。 |
| 言語         | [TypeScript](https://www.typescriptlang.org/) | 静的型付けにより、安全性と可読性の高いコードを実現。                         |
| スタイリング | [Tailwind CSS](https://tailwindcss.com/) | ユーティリティファーストな CSS フレームワークで、効率的なスタイリングが可能。|
| テスト       | [Jest](https://jestjs.io/), [Testing Library](https://testing-library.com/), [ts-jest](https://kulshekhar.github.io/ts-jest/) | ユニットテストおよびレンダリングテストに使用。TypeScript対応のJest構成。     |
| 静的解析     | [ESLint](https://eslint.org/) | コードの品質チェックとスタイル統一のために使用。                            |
| ビルド       | [Next.js](https://nextjs.org/) (`next build`, `next export`) | 静的ファイルへのビルドと出力（GitHub Pages 用に `out/` フォルダへ書き出し）。 |
| デプロイ     | [GitHub Pages](https://pages.github.com/), [gh-pages](https://www.npmjs.com/package/gh-pages) | 静的ファイル (`out/`) を GitHub Pages に公開。                              |
| CI/CD        | [GitHub Actions](https://github.com/features/actions) | Lint / テスト / ビルド / デプロイ を自動化するためのワークフローを構築。     |

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
| `npm run dev`    | 開発モードでアプリを起動（[http://localhost:3000）](http://localhost:3000）) |
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