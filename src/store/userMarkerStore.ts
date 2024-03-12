import { create } from 'zustand';

interface UserMarkerStore {
  userMarker: Marker | null;
  setUserMarker: (userMarker: Marker | null) => void;
}

const useUserMarkerStore = create<UserMarkerStore>((set) => ({
  userMarker: null,
  setUserMarker: (userMarker) => set({ userMarker }),
}));

export default useUserMarkerStore;
