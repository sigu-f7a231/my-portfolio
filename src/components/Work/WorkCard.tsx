import type { Work } from '@/data/works';

type WorkCardProps = {
  work: Work;
  onClick: () => void;
};

export default function WorkCard({ work, onClick }: WorkCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
      aria-label={`Open details for ${work.title}`}
    >
      <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{work.description}</p>

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
  );
}
