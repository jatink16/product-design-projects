import { Outlet, Link, useLocation } from 'react-router';
import { CustomCursor } from './CustomCursor';
import { ScrollToTop } from './ScrollToTop';
import { PageTransition } from './PageTransition';
import { motion, AnimatePresence } from 'motion/react';
import { Watch, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <ScrollToTop />
      <PageTransition />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl tracking-tight">JKola.Co</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/collections" className="hover:text-gray-600 transition-colors">Collections</Link>
              <Link to="/heritage" className="hover:text-gray-600 transition-colors">Heritage</Link>
              <Link to="/craftsmanship" className="hover:text-gray-600 transition-colors">Craftsmanship</Link>
              <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-3">
              <Link to="/collections" className="block py-2 hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
              <Link to="/heritage" className="block py-2 hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Heritage</Link>
              <Link to="/craftsmanship" className="block py-2 hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Craftsmanship</Link>
              <Link to="/contact" className="block py-2 hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-16 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8">
              <span className="font-serif text-3xl tracking-tight">JKola.Co</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/" className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Home</Link>
              <Link to="/collections" className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Collection</Link>
              <Link to="/heritage" className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">About</Link>
              <Link to="/contact" className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Contact</Link>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <a href="#" className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Instagram</a>
              <a href="#" className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Twitter</a>
              <a href="#" className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Facebook</a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 JKola.Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
