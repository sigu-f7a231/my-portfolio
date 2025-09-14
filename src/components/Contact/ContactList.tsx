// ContactList.tsx

import ContactListItem from './ContactListItem'; // 各リスト項目を表示する子コンポーネントをインポート

// 連絡手段を表す型定義（例：Email, GitHub など）
export type ContactItem = {
  label: string;       // 表示ラベル（例: "Email"）
  value: string;       // 表示内容（例: "yourname@example.com"）
  href?: string;       // 任意：リンク先URLがある場合（GitHubなど）
};

// ContactList コンポーネントの props の型
type Props = {
  items: ContactItem[]; // ContactItem の配列
};

// ContactList コンポーネント
// 複数の ContactItem をリストとして表示する
export default function ContactList({ items }: Props) {
  return (
    <ul className="list-disc list-inside space-y-1">
      {/* 各連絡手段を ContactListItem としてマッピング表示 */}
      {items.map((item) => (
        <ContactListItem key={item.label} item={item} />
      ))}
    </ul>
  );
}
