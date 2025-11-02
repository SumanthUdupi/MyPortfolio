import React, { useState, useRef, useCallback } from 'react';

interface DraggableProps {
  children: React.ReactElement;
  initialStyle?: React.CSSProperties;
}

const Draggable: React.FC<DraggableProps> = ({ children, initialStyle }) => {
  const [style, setStyle] = useState(initialStyle);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      offset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setIsDragging(true);
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && dragRef.current) {
      setStyle({
        ...style,
        transform: `translate(${e.clientX - offset.current.x}px, ${e.clientY - offset.current.y}px)`,
      });
    }
  }, [isDragging, style]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={dragRef}
      style={{
        ...style,
        cursor: isDragging ? 'grabbing' : 'grab',
        position: 'absolute',
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default Draggable;