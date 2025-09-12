import type { Config } from 'jest';

const config: Config = {
  // TypeScript を Jest で使うためのプリセット
  preset: 'ts-jest',

  // ReactコンポーネントのテストでDOMを扱うための環境指定
  testEnvironment: 'jsdom',

  // 各テスト実行前に読み込むセットアップファイル（例: カスタムマッチャーなど）
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // ts/tsx ファイルの変換設定
  // Jest 実行時に tsconfig.jest.json を使うことでテスト専用のTypeScript設定を適用
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },

  // node_modules 内の変換はスキップ（パフォーマンス向上のため）
  transformIgnorePatterns: ['/node_modules/'],

  // Jest が認識する拡張子のリスト
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // テストファイルのパターンを指定
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],

  // パスエイリアス対応設定
  // 例: import xyz from '@/components/xyz' を解決できるようにする
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
