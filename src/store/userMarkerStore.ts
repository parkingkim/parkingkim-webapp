import { GeoLocation } from 'src/types/map';
import { create } from 'zustand';

interface UserMarkerStore {
  userMarker: Marker | null;
  userLocation: GeoLocation | null;
  setUserLocation: (userLocation: GeoLocation | null) => void;
  setUserMarker: (userMarker: Marker | null) => void;
}

const useUserMarkerStore = create<UserMarkerStore>((set) => ({
  userMarker: null,
  userLocation: null,
  setUserMarker: (userMarker) => set({ userMarker }),
  setUserLocation: (userLocation) => set({ userLocation }),
}));

export default useUserMarkerStore;
