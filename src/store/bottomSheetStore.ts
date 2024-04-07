import { create } from 'zustand';

interface BottomSheetStore {
  height: number;
  lastY: number;
  isDragging: boolean;
  windowHeight: number;
  snapPoints: number[];
  setHeight: (height: number) => void;
  setLastY: (lastY: number) => void;
  setIsDragging: (isDragging: boolean) => void;
  handleDragStart: (dragStartY: number) => void;
  handleDragMove: (currentY: number) => void;
  handleDragEnd: () => void;
  toggleHeight: () => void;
  fillHeight: () => void;
}

const useBottomSheetStore = create<BottomSheetStore>((set, get) => ({
  height: window.innerHeight * 0.6,
  lastY: 0,
  isDragging: false,
  windowHeight: window.innerHeight,
  snapPoints: [250, window.innerHeight * 0.6, window.innerHeight],
  setHeight: (height) => set({ height }),
  setLastY: (lastY) => set({ lastY }),
  setIsDragging: (isDragging) => set({ isDragging }),
  handleDragStart: (dragStartY) => {
    set({ lastY: dragStartY, isDragging: true });
  },

  handleDragMove: (currentY) => {
    const { isDragging, lastY } = get();
    if (!isDragging) return;
    const delta = lastY - currentY;
    set({ lastY: currentY });
    set((state) => ({ height: Math.max(100, state.height + delta) }));
  },

  handleDragEnd: () => {
    const { height, snapPoints } = get();
    set({ isDragging: false });
    const closest = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - height) < Math.abs(prev - height) ? curr : prev,
    );
    set({ height: closest });
  },

  toggleHeight: () => {
    const { height, snapPoints } = get();
    const nextHeight = height === snapPoints[1] ? snapPoints[0] : snapPoints[1];
    set({ height: nextHeight });
  },

  fillHeight: () => {
    const { windowHeight } = get();
    set({ height: windowHeight });
  },
}));

export default useBottomSheetStore;
