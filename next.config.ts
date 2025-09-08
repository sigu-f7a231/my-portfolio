import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-portfolio',       // リポジトリ名に置き換えてください
  assetPrefix: '/my-portfolio/',   // 同じくリポジトリ名
}

export default nextConfig