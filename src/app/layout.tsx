import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

// Google Fonts（Geist Sans / Geist Mono）をカスタムCSS変数として読み込み
const geistSans = Geist({
  variable: "--font-geist-sans", // Tailwind で --font-geist-sans として使えるようにする
  subsets: ["latin"],            // 使用する文字セット（欧文だけなら "latin"）
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ページ全体で共有されるメタデータ（SEO・SNS用）
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio site",
};

// ルートレイアウト（全ページに共通の構造）
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML タグに Google フォントの CSS 変数クラスを付与
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* 
        body に適用する Tailwind のユーティリティクラス

        ✅ 共通設定:
        - antialiased: フォントを滑らかに表示
        - transition-colors duration-300: ダークモード切り替えをスムーズに

        ✅ ライトモード（初期）
        - bg-white: 背景白
        - text-black: テキスト黒

        ✅ ダークモード（.dark クラスが <html> に付いたときに適用）
        - dark:bg-gray-900: 背景黒
        - dark:text-white: テキスト白
      */}
      <body className="antialiased bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        
        {/* グローバルなナビゲーションヘッダー（ダークモード切り替え含む） */}
        <Header />

        {/* メインコンテンツ部分 */}
        <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
          {children}
        </main>
      </body>
    </html>
  );
}
