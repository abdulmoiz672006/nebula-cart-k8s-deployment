const CATEGORIES = [
  'All',
  'Audio',
  'Wearables',
  'Cameras',
  'Peripherals',
  'Accessories',
  'Storage',
  'Displays',
];

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25'
                : 'border border-white/10 bg-white/5 text-gray-400 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
