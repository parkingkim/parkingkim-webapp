import { useCallback, useEffect, useState } from 'react';

const useDraggable = (initialHeight: number) => {
  const [height, setHeight] = useState<number>(initialHeight);
  const [lastY, setLastY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragStart = useCallback((dragStartY: number) => {
    setLastY(dragStartY);
    setIsDragging(true);
  }, []);

  const handleDragMove = useCallback(
    (currentY: number) => {
      if (!isDragging) return;
      const delta = lastY - currentY;
      setLastY(currentY);

      setHeight((prevHeight) => Math.max(100, prevHeight + delta));
    },
    [isDragging, lastY],
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);

    const windowHeight = window.innerHeight;
    const snapPoints = [windowHeight * 0.1, windowHeight * 0.5, windowHeight];
    const closest = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - height) < Math.abs(prev - height) ? curr : prev,
    );

    setHeight(closest);
  }, [height]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleDragMove(e.clientY);
    };

    const handleMouseUp = () => {
      handleDragEnd();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleDragMove, handleDragEnd]);

  return { height, handleDragStart, handleDragMove, handleDragEnd };
};

export default useDraggable;
