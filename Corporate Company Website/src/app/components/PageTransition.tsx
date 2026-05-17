import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

export function PageTransition() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[200] flex items-center justify-center"
        >
          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl px-16 py-12 rounded-2xl"
          >
            <div className="flex flex-col items-center justify-center">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <span className="font-serif text-black text-4xl sm:text-5xl tracking-tight mb-8 block">
                  JKola.Co
                </span>
              </motion.div>

              {/* Loading Bar */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '192px' }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="h-[2px] bg-black/10 overflow-hidden rounded-full"
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    repeat: Infinity,
                  }}
                  className="h-full w-1/2 bg-black rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
