import React, { useEffect, useRef } from 'react';

interface ChromaGridProps {
  rows?: number;
  cols?: number;
  cellSize?: number;
  colors?: string[];
  animationSpeed?: number;
  className?: string;
}

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  rows = 20,
  cols = 30,
  cellSize = 20,
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
  animationSpeed = 2000,
  className = ''
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cells = grid.children;
    
    const animateCell = (cell: Element, delay: number) => {
      setTimeout(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        (cell as HTMLElement).style.backgroundColor = randomColor;
        (cell as HTMLElement).style.opacity = Math.random() > 0.7 ? '0.8' : '0.2';
        
        // Schedule next animation
        animateCell(cell, animationSpeed + Math.random() * 1000);
      }, delay);
    };

    // Start animations for all cells with random delays
    for (let i = 0; i < cells.length; i++) {
      animateCell(cells[i], Math.random() * 2000);
    }
  }, [colors, animationSpeed]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      <div 
        ref={gridRef}
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => (
          <div
            key={index}
            className="transition-all duration-1000 ease-in-out opacity-10"
            style={{
              backgroundColor: 'transparent',
              width: '100%',
              height: '100%',
            }}
          />
        ))}
      </div>
    </div>
  );
};