// src/components/WorkModal.tsx
'use client';

import { Work } from '@/data/works';

type WorkModalProps = {
  work: Work;
  onClose: () => void;
};

export default function WorkModal({ work, onClose }: WorkModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
    >
      {/* モーダル内部はクリックを伝播させない */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full relative shadow-lg transition"
      >
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-xl"
          aria-label="Close Modal"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-2">{work.title}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {work.description}
        </p>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-4">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-gray-300 dark:bg-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 公開URL */}
        {work.url && (
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            公開ページを見る ↗
          </a>
        )}
      </div>
    </div>
  );
}
