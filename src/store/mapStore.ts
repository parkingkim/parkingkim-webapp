import { create } from 'zustand';

interface MapState {
  mapInstance: TMap | null;
  location: { lat: number; lng: number } | null;
  setMapInstance: (instance: TMap) => void;
  setLocation: (location: { lat: number; lng: number }) => void;
}

const useMapStore = create<MapState>((set) => ({
  mapInstance: null,
  location: null,
  setMapInstance: (instance) => set({ mapInstance: instance }),
  setLocation: (location) => set({ location: location }),
}));

export default useMapStore;
