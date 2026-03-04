import { ShoppingCart, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCartToggle, onLogoClick }) {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={onLogoClick}
          className="group flex items-center gap-2 text-xl font-bold tracking-wider"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/40">
            <Zap className="h-5 w-5 text-white" />
          </span>
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            NEBULA
          </span>
          <span className="text-white">CART</span>
        </button>

        {/* Cart button */}
        <button
          onClick={onCartToggle}
          className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white hover:shadow-lg hover:shadow-violet-500/20"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline">Cart</span>
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-xs font-bold text-white animate-[scale-in_0.2s_ease-out]">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
