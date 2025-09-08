import type { NextConfig } from 'next'

// Next.jsの設定を型付きで定義
const nextConfig: NextConfig = {
  // 静的HTMLのエクスポートを有効化（SSG向け）
  output: 'export',

  // basePathを設定
  // GitHub Pagesでリポジトリ配下にサイトをホストする場合に、URLのベースパスとして使う
  basePath: '/my-portfolio',      // 例: https://username.github.io/my-portfolio/

  // assetPrefixもbasePathに合わせて設定
  // 静的アセット（画像やJSなど）のURLの接頭辞となる
  assetPrefix: '/my-portfolio/',
};

export default nextConfig;
