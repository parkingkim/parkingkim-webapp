import { GeoLocation } from 'src/types/map';
import { create } from 'zustand';

interface MarkerStore {
  userMarker: Marker | null;
  userLocation: GeoLocation | null;
  destinationMarker: Marker | null;
  setUserLocation: (userLocation: GeoLocation | null) => void;
  setUserMarker: (userMarker: Marker | null) => void;
  setDestinationMarker: (destinationMarker: Marker | null) => void;
}

const useMarkerStore = create<MarkerStore>((set) => ({
  userMarker: null,
  userLocation: null,
  destinationMarker: null,
  setUserMarker: (userMarker) => set({ userMarker }),
  setUserLocation: (userLocation) => set({ userLocation }),
  setDestinationMarker: (destinationMarker) => set({ destinationMarker }),
}));

export default useMarkerStore;
