import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',

  // Reactコンポーネントをテストするための仮想DOM環境
  testEnvironment: 'jsdom',

  // 各テスト前に setup ファイルを読み込む
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // ts/tsx ファイルは ts-jest を使って変換（推奨構文に更新）
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },

  // node_modules 内のファイルは変換対象外（高速化）
  transformIgnorePatterns: ['/node_modules/'],

  // Jestが認識する拡張子
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // テストファイルのマッチパターン
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],

  // パスエイリアス（@/）に対応させる
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
