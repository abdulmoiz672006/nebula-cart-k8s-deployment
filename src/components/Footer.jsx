import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060612]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2 text-lg font-bold tracking-wider">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500">
              <Zap className="h-4 w-4 text-white" />
            </span>
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              NEBULA
            </span>
            <span className="text-white">CART</span>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-gray-500">
            {['About', 'Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors hover:text-violet-400"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} NebulaCart. All rights reserved.
          Built for the future.
        </div>
      </div>
    </footer>
  );
}
