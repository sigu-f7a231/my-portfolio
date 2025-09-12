/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🌗 ダークモードの切替方法を 'class' に設定
  // → HTML に `class="dark"` を付与して切り替えるスタイル
  darkMode: 'class',

  // 🎯 Tailwind CSS が使用されているファイルを指定（JIT最適化に重要）
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',        // ✅ App Router 使用時はこちら
    './src/pages/**/*.{js,ts,jsx,tsx}',      // ✅ Pages Router 併用しているならこちらも
    './src/components/**/*.{js,ts,jsx,tsx}', // ✅ コンポーネントディレクトリ
  ],

  theme: {
    extend: {
      // 🎨 カスタムカラーやフォント、スペーシングなどをここで拡張
      colors: {
        brand: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },

  // 🧩 プラグインを使用する場合はここに追加（必要なければ空でOK）
plugins: [
  require('@tailwindcss/line-clamp'),
]
};
