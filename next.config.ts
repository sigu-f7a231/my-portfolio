import type { NextConfig } from 'next'

// Next.jsの設定を型付きで定義
const isProd = process.env.NODE_ENV === 'production';  // 本番環境かどうかを判定

const nextConfig: NextConfig = {
  // 静的HTMLのエクスポートを有効化（SSG向け）
  output: 'export',

  // GitHub Pagesのリポジトリ配下でホストする場合にURLのベースパスとして使用
  // 本番環境のみ '/my-portfolio' を設定し、ローカル環境は空文字（ルート直下）にする
  basePath: isProd ? '/my-portfolio' : '',

  // 静的アセット（画像やJSなど）のURLの接頭辞をbasePathに合わせて設定
  // こちらも本番環境のみ適用し、ローカル環境では空文字にする
  assetPrefix: isProd ? '/my-portfolio/' : '',
};

export default nextConfig;
