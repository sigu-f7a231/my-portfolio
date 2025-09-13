import type { NextConfig } from 'next'

// Next.jsの設定を型付きで定義
const isProd = process.env.NODE_ENV === 'production';  // 本番環境かどうかを判定（今は使っていませんがコメントは残します）

const nextConfig: NextConfig = {
  // 静的HTMLのエクスポートを有効化（SSG向け）
  output: 'export',

  // GitHub Pagesのリポジトリ配下でホストする場合にURLのベースパスとして使用
  // 本番もローカルも常に '/my-portfolio' を使うことで動作安定を優先
  basePath: '/my-portfolio',

  // 静的アセット（画像やJSなど）のURLの接頭辞をbasePathに合わせて設定
  // こちらも常に '/my-portfolio/' 固定
  assetPrefix: '/my-portfolio/',

  // フォルダ形式の出力にする（index.htmlの代わりにフォルダを作る）
  trailingSlash: true,
};

export default nextConfig;
