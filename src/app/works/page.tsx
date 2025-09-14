'use client'; // クライアントコンポーネントとして動作（useState/useEffect 使用可能）

import { useState } from 'react';
import { works, Work } from '@/data/works'; // データと型定義のインポート
import WorkCard from '@/components/Work/WorkCard'; // ワーク表示用のカードコンポーネント
import WorkModal from '@/components/Work/WorkModal'; // 詳細表示用のモーダルコンポーネント
import WorkTagFilter from '@/components/Work/WorkTagFilter'; // タグフィルターUI

export default function WorksPage() {
  // 全てのタグを一意に抽出しリスト化
  const allTags = Array.from(new Set(works.flatMap((work) => work.tags)));

  // 選択されたタグ（フィルター状態）を保持
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // モーダルで表示する選択されたワーク（詳細情報）
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  // タグをクリックしたときの切り替え処理
  const toggleTag = (tag: string) => {
    // すでに選択中のタグを再度クリックしたら解除、それ以外なら選択
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  // 選択されたタグに基づいてフィルターしたワーク一覧
  const filteredWorks = selectedTag
    ? works.filter((work) => work.tags.includes(selectedTag))
    : works;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* タグフィルター（コンポーネント化） */}
      <WorkTagFilter
        tags={allTags}                 // 表示する全タグ
        selectedTag={selectedTag}     // 現在選択されているタグ
        onToggle={toggleTag}          // タグの選択/解除処理
      />

      {/* ワークカードの一覧表示 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredWorks.map((work) => (
          <WorkCard
            key={work.id}
            work={work}                        // 各ワークのデータ
            onClick={() => setSelectedWork(work)} // カードクリックでモーダル表示
          />
        ))}
      </div>

      {/* モーダル（選択されたワークがあるときのみ表示） */}
      {selectedWork && (
        <WorkModal
          work={selectedWork}             // 表示する詳細データ
          onClose={() => setSelectedWork(null)} // モーダルを閉じる処理
        />
      )}
    </div>
  );
}
