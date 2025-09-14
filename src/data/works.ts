// src/data/works.ts

// Work の型定義
export type Work = {
  id: number;              // 一意なID
  title: string;           // 作品タイトル
  description: string;     // 説明文
  tags: string[];          // 複数のタグ（カテゴリー）を表す配列
  image?: string;          // 画像パス（省略可能）
  url?: string;            // 公開ページへのリンク（省略可能）
};

// ダミーデータの配列
// 実際のアプリではAPIやCMSから取得することもあるが、
// 小規模プロジェクトや開発初期段階ではローカル定義で管理
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
