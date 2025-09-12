// src/data/works.ts

// Work の型定義
export type Work = {
  id: number;
  title: string;
  description: string;
  tags: string[];     // 複数タグが付けられる配列型
  image?: string;     // 画像パス（今回は省略可能にしておく）
  url?: string;       // 公開ページへのリンク
};

// ダミーデータ定義（すべての項目が Work 型に合致）
export const works: Work[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Built with Next.js and Tailwind CSS.",
    tags: ["Web"],
    url: "https://yourportfolio.example.com",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weather forecast app using OpenWeatherMap API.",
    tags: ["Mobile"],
    url: "https://weatherapp.example.com",
  },
  {
    id: 3,
    title: "CLI Tool",
    description: "Node.js command-line utility for automation.",
    tags: ["Tool"],
    url: "https://clitool.example.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Markdown-based blog engine.",
    tags: ["Web", "Blog"],
    url: "https://blogplatform.example.com",
  },
];
