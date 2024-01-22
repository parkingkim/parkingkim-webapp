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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 4px 5px 6px rgba(0, 0, 0, 0.25);
  height: ${({ height }) => height}px;
  transition: height 0.3s ease;
  touch-action: none; // iOS Safari의 스크롤 방지
`;

const DragHandle = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent; // iOS Safari의 터치 시 하이라이트 방지
`;

const DragHandleBar = styled.div`
  width: 85px;
  height: 3px;
  margin: 12px auto;
  border-radius: 4px;
  background-color: #000;
`;

export default BottomSheet;
