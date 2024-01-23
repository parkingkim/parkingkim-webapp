import { MouseEvent, PropsWithChildren, TouchEvent } from 'react';
import styled from 'styled-components';
import useDraggable from './hook/useDraggable';
import { INITIAL_HEIGHT } from '@constants/index';

const BottomSheet = ({ children }: PropsWithChildren) => {
  const { height, handleDragStart, handleDragMove, handleDragEnd, toggleHeight } =
    useDraggable(INITIAL_HEIGHT);

  const handleEvent =
    (handler: (clientY: number) => void) =>
    (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      // touches 속성이 이벤트 내부에 있는지 확인
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      handler(clientY);
    };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <BottomSheetContainer height={height}>
      <DragHandle
        onMouseDown={handleEvent(handleDragStart)}
        onTouchStart={handleEvent(handleDragStart)}
        onTouchMove={handleEvent(handleDragMove)}
        onTouchEnd={handleTouchEnd}
        onClick={toggleHeight}
      >
        <DragHandleBar />
      </DragHandle>
      {children}
    </BottomSheetContainer>
  );
};

const BottomSheetContainer = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;

  background-color: #fff;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 4px 5px 6px rgb(0 0 0 / 25%);

  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  transition: height 0.3s ease;
  touch-action: none;
`;

const DragHandle = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const DragHandleBar = styled.div`
  width: 85px;
  height: 3px;
  margin: 12px auto;

  background-color: #000;
  border-radius: 4px;
`;

export default BottomSheet;
