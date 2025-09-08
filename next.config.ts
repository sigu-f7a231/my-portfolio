import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-portfolio',      // GitHub Pagesのリポジトリ名に合わせて
  assetPrefix: '/my-portfolio/',
};

export default nextConfig;
