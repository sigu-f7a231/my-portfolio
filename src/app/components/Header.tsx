"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // -------------------------------
  // 初期化処理：localStorage or OS設定
  // -------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");

    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (saved === "false") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // -------------------------------
  // ダークモード切り替え
  // -------------------------------
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <header className="bg-white border-b shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* 左：タイトル（ロゴなど） */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          My Portfolio
        </h1>

        {/* 右：ナビゲーション＋ダークモードトグル */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/works" className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400">
            works
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </Link>

          {/* ダークモード切替ボタン */}
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