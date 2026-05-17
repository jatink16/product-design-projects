import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      const dx = mousePos.current.x - outerPos.current.x;
      const dy = mousePos.current.y - outerPos.current.y;

      outerPos.current.x += dx * 0.15;
      outerPos.current.y += dy * 0.15;

      setOuterPosition({
        x: outerPos.current.x,
        y: outerPos.current.y,
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Outer ring with smooth follow */}
      <div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: `${outerPosition.x}px`,
          top: `${outerPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`,
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        <div className="w-12 h-12 border-2 border-white rounded-full mix-blend-difference shadow-lg">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
      </div>

      {/* Middle ring */}
      <div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 0.8})`,
          transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="w-6 h-6 border border-white/60 rounded-full mix-blend-difference"></div>
      </div>

      {/* Inner dot with pointer - instant follow (non-hover state) */}
      <div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="relative w-1.5 h-1.5">
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full mix-blend-difference shadow-lg"></div>
          {/* Pointer arrow */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5"
            viewBox="0 0 6 6"
            fill="none"
          >
            <path
              d="M3 0.5 L3 3 M3 0.5 L1.5 2 M3 0.5 L4.5 2"
              stroke="white"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mix-blend-difference"
            />
          </svg>
        </div>
      </div>

      {/* Black pointer for hover state */}
      <div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="relative w-2 h-2">
          {/* Black center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full shadow-lg"></div>
          {/* Black pointer arrow */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              d="M4 1 L4 4 M4 1 L2.5 2.5 M4 1 L5.5 2.5"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.8 : 0.4,
          transition: 'transform 0.4s ease-out, opacity 0.3s ease-out',
        }}
      >
        <div className="w-20 h-20 bg-gradient-radial from-white/30 to-transparent rounded-full blur-2xl"></div>
      </div>
    </>
  );
}
