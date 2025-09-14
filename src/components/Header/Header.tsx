"use client"; // クライアントコンポーネントとしてマーク（useState/useEffectを使うため）

import Link from "next/link";
import { useEffect, useState } from "react";

/* ----------------------------------------
  カスタムフック: useDarkMode
  - localStorage や OSのダークモード設定を元に初期値を決定
  - トグルでダークモードを切り替え、状態とDOMを更新
----------------------------------------- */
function useDarkMode(): [boolean, () => void] {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");

    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (saved === "false") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // OSの設定を使用（matchMedia API）
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // ダークモードの切り替え処理
  const toggle = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("darkMode", String(nextMode));
    document.documentElement.classList.toggle("dark", nextMode);
  };

  return [darkMode, toggle];
}

/* ----------------------------------------
  ナビゲーションリンクの配列定義
  - 複数リンクをループで生成（DRY原則）
----------------------------------------- */
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

/* ----------------------------------------
  Headerコンポーネント
  - サイト共通のナビゲーションバー
  - ダークモード切り替え機能付き
----------------------------------------- */
export default function Header() {
  const [darkMode, toggleDarkMode] = useDarkMode(); // カスタムフックの使用

  // ナビゲーションリンクの共通スタイル（Tailwind）
  const navLinkClass =
    "text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors";

  return (
    <header className="bg-white border-b shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* サイトタイトル（ロゴのような役割） */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          My Portfolio
        </h1>

        {/* ナビゲーションメニュー */}
        <nav className="flex items-center gap-6">
          {/* 各リンクをループで出力 */}
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}

          {/* ダークモード切り替えボタン */}
          <button
            onClick={toggleDarkMode}
            className="text-sm border rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-400 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
