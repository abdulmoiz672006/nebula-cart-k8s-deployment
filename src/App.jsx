import { useState, useCallback } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = useCallback(() => setCartOpen((prev) => !prev), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-[#0a0a1a] text-white">
        <Navbar
          onCartToggle={toggleCart}
          onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <main className="flex-1 pt-16">
          <HeroBanner />
          <ProductGrid />
        </main>
        <Footer />
        <CartDrawer isOpen={cartOpen} onClose={closeCart} />
      </div>
    </CartProvider>
  );
}
