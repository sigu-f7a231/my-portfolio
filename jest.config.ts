import type { Config } from 'jest';

// Jestの設定をTypeScriptで定義
const config: Config = {
  // ts-jestをpresetとして使い、TypeScriptをそのままJestで処理できるように設定
  preset: 'ts-jest',

  // テスト環境をブラウザに近いjsdomに設定（Reactのテストなどに必要）
  testEnvironment: 'jsdom',

  // テスト実行前に読み込むセットアップファイル（ここでカスタムマッチャーなどを追加可能）
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // ts/tsxファイルの変換はts-jestに任せる設定
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // モジュールとして認識する拡張子（ここに書いた拡張子のファイルをテスト対象として認識）
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // テストファイルのパターン（srcフォルダ以下で、.test.tsまたは.test.tsxで終わるファイルをテスト対象に）
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
};

export default config;
