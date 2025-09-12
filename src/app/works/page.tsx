'use client';

import { useState } from 'react';
import { works, Work } from '@/data/works';

export default function WorksPage() {
  const allTags = Array.from(new Set(works.flatMap((work) => work.tags)));

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null); // ← モーダル用

  const toggleTag = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  const filteredWorks =
    selectedTag === null
      ? works
      : works.filter((work) => work.tags.includes(selectedTag));

  // モーダルを閉じる処理
  const closeModal = () => setSelectedWork(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* タグのフィルター */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 text-sm rounded-full border transition 
              ${selectedTag === tag
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white dark:bg-gray-700 dark:text-white border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ワークカードのリスト */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            onClick={() => setSelectedWork(work)}
            className="cursor-pointer border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {work.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {work.url && (
              <span className="inline-block mt-2 text-blue-600 dark:text-blue-400 text-sm">
                詳細を見る →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* モーダル */}
      {selectedWork && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
        >
          {/* モーダルの内容自体には click を伝播させない */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full relative shadow-lg transition"
          >
            {/* 閉じるボタン */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-xl"
              aria-label="Close Modal"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-2">{selectedWork.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {selectedWork.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedWork.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-gray-300 dark:bg-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {selectedWork.url && (
              <a
                href={selectedWork.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                公開ページを見る ↗
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
