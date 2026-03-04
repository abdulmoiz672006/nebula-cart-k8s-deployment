import { useState, useMemo, useEffect } from 'react';
import { PackageOpen } from 'lucide-react';
import products from '../data/products.json';
import { useDebounce } from '../hooks/useDebounce';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';

export default function ProductGrid() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(search, 250);

  /* Simulate initial data load */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesSearch = p.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [debouncedSearch, category]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      {/* Toolbar */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="mb-8">
        <CategoryFilter selected={category} onSelect={setCategory} />
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-gray-500">
        {loading
          ? 'Loading products...'
          : `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`}
      </p>

      {/* Grid */}
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-gray-500">
          <PackageOpen className="mb-4 h-16 w-16 text-gray-600" />
          <p className="text-lg font-medium text-gray-400">No products found</p>
          <p className="mt-1 text-sm">Try adjusting your search or filters.</p>
        </div>
      )}
    </section>
  );
}
