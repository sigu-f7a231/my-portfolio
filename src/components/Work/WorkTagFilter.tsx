// src/components/Work/WorkTagFilter.tsx
type WorkTagFilterProps = {
  tags: string[];
  selectedTag: string | null;
  onToggle: (tag: string) => void;
};

export default function WorkTagFilter({ tags, selectedTag, onToggle }: WorkTagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isActive = selectedTag === tag;
        return (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className={`px-3 py-1 text-sm rounded-full border transition
              ${isActive
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white dark:bg-gray-700 dark:text-white border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}
            `}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
