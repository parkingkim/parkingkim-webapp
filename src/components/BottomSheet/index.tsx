import { MouseEvent, PropsWithChildren, TouchEvent } from 'react';
import styled from 'styled-components';
import useDraggable from './hook/useDraggable';
import { INITIAL_HEIGHT } from '@constants/index';

const BottomSheetContainer = styled.div<{ height: number }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
  border-radius: 10px 10px 0 0;
  height: ${({ height }) => height}px;
  transition: height 0.3s ease;
  touch-action: none; // iOS Safari의 스크롤 방지
`;

const DragHandle = styled.span`
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: #ddd;
  cursor: pointer;
`;

const BottomSheet = ({ children }: PropsWithChildren) => {
  const { height, handleDragStart, handleDragMove, handleDragEnd } = useDraggable(INITIAL_HEIGHT);

  const handleMouseDown = (e: MouseEvent<HTMLSpanElement>) => {
    handleDragStart(e.clientY);
  };

  const handleTouchStart = (e: TouchEvent<HTMLSpanElement>) => {
    handleDragStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLSpanElement>) => {
    handleDragMove(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

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
