import React, { useState, useCallback, useEffect, PropsWithChildren } from 'react';
import styled from 'styled-components';

const BottomSheetContainer = styled.div<{ height: number }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
  height: ${({ height }) => height}px;
  transition: height 0.3s ease;
  touch-action: none; // iOS Safari의 스크롤 방지
`;

const DragHandle = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: #ddd;
  cursor: pointer;
`;

const BottomSheet = ({ children }: PropsWithChildren) => {
  const [height, setHeight] = useState<number>(100);
  const [lastY, setLastY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleStart = useCallback((clientY: number) => {
    setLastY(clientY);
    setIsDragging(true);
  }, []);

  const handleMove = useCallback(
    (clientY: number) => {
      if (!isDragging) return;
      const delta = lastY - clientY;
      setLastY(clientY);

      setHeight((prevHeight) => Math.max(100, prevHeight + delta));
    },
    [isDragging, lastY],
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);

    const windowHeight = window.innerHeight;
    const snapPoints = [windowHeight * 0.1, windowHeight * 0.5, windowHeight];
    const closest = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - height) < Math.abs(prev - height) ? curr : prev,
    );

    setHeight(closest);
  }, [height]);

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleStart(e.clientY);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      handleMove(e.clientY);
    },
    [handleMove],
  );

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <BottomSheetContainer height={height}>
      <DragHandle
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        드래그 바
      </DragHandle>
      {children}
    </BottomSheetContainer>
  );
};

export default BottomSheet;
