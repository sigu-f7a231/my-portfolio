// 連絡手段を表す型定義
export type ContactItem = {
  label: string;       // 表示ラベル（例: Email, GitHub, Twitter）
  value: string;       // 表示する文字列（例: メールアドレスやユーザー名）
  href?: string;       // リンク先URL（任意、なければリンクなし）
};

// 連絡手段一覧データ
// 複数の連絡方法を配列として管理。追加・変更が簡単。
export const contactItems: ContactItem[] = [
  {
    label: 'Email',
    value: 'yourname@example.com',  // メールアドレス（リンクなし）
  },
  {
    label: 'GitHub',
    value: 'yourusername',
    href: 'https://github.com/yourusername',  // GitHubプロフィールへのリンク
  },
  {
    label: 'Twitter',
    value: '@yourusername',
    href: 'https://twitter.com/yourusername',  // Twitterプロフィールへのリンク
  },
];
