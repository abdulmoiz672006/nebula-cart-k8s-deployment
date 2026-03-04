import { ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-violet-500/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-violet-500/10">
      {/* Badge */}
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-800 to-gray-700" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Overlay gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <span className="rounded-md bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-400">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-amber-400">
            <Star className="h-3.5 w-3.5 fill-current" />
            {product.rating}
          </div>
        </div>

        <h3 className="text-base font-semibold leading-snug text-white group-hover:text-violet-300 transition-colors duration-300">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-auto flex items-end justify-between pt-2">
          <span className="text-2xl font-bold text-white">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAdd}
            disabled={added}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              added
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110 active:scale-95'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            {added ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}
