// ContactListItem.tsx

// 単一の連絡手段を表す型（例: Email, GitHub, Twitter など）
type ContactItem = {
  label: string;     // 表示名（例: "Email"）
  value: string;     // 表示する文字列（例: "yourname@example.com"）
  href?: string;     // オプション：リンク先（ある場合は <a> タグで表示）
};

// Props の型定義：1つの ContactItem を受け取る
type Props = {
  item: ContactItem;
};

// ContactListItem コンポーネント：1つの連絡手段を <li> として描画
export default function ContactListItem({ item }: Props) {
  return (
    <li>
      {/* ラベルの表示（例: Email:） */}
      {item.label}:{' '}
      {/* href がある場合はリンクとして表示。なければプレーンテキスト */}
      {item.href ? (
        <a
          href={item.href}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer" // 新しいタブで開きつつセキュリティ対策
        >
          {item.value}
        </a>
      ) : (
        item.value
      )}
    </li>
  );
}
