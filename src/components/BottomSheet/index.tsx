import { MouseEvent, PropsWithChildren, TouchEvent, useEffect } from 'react';
import styled from 'styled-components';
import useDraggable from './hook/useDraggable';

interface BottomSheetProps extends PropsWithChildren {
  isExpanded?: boolean;
}

const BottomSheet = ({ isExpanded, children }: BottomSheetProps) => {
  const initialHeight = 0;
  const { height, handleDragStart, handleDragMove, handleDragEnd, toggleHeight, fillHeight } =
    useDraggable(initialHeight);

  useEffect(() => {
    isExpanded ? fillHeight() : toggleHeight();
  }, [isExpanded]);

  const handleEvent =
    (handler: (clientY: number) => void) =>
    (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      handler(clientY);
    };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <BottomSheetContainer $height={height} $isExpanded={isExpanded}>
      <DragHandle
        onMouseDown={handleEvent(handleDragStart)}
        onTouchStart={handleEvent(handleDragStart)}
        onTouchMove={handleEvent(handleDragMove)}
        onTouchEnd={handleTouchEnd}
        onClick={toggleHeight}
      />
      {children}
    </BottomSheetContainer>
  );
};

const BottomSheetContainer = styled.div<{ $height: number; $isExpanded?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: ${({ $height }) => $height}px;
  max-width: 500px;

  background-color: #fff;

  ${({ $isExpanded }) => !$isExpanded && 'border-radius: 10px 10px 0 0;'}

  box-shadow: 0 -1px 5px -1px rgb(0 0 0 / 25%);

  position: fixed;
  bottom: 0;
  left: 50%;

  transition: height 0.3s ease;
  transform: translateX(-50%);
  touch-action: none;
`;

const DragHandle = styled.div`
  width: 100%;
  height: 30px;

  position: absolute;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export default BottomSheet;
