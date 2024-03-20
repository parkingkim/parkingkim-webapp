interface TMap {
  setZoomLimit(minZoom: number, maxZoom: number): void;
  destroy(): void;
  panTo(latLng: LatLng): void;
  fitBounds(bounds: LatLngBounds): void;
  setCenter(latLng: LatLng): void;
  setZoom(zoomLevel: number): void;
  getZoom(): number;
  on(eventType: string, callback: (event: evt) => void): void;
  removeListener(eventType: string, callback: (event: evt) => void): void;
  resize(width: number, height: number): void;
  getBounds(): LatLngBounds;
  realToScreen(latLng: LatLng): Point;
  off(eventType: string, callback: (event: evt) => void): void;
  setBearing(value: number): void;
  setPitch(value: number): void;
  zoomIn(): void;
  zoomOut(): void;
}

interface Marker {
  position?: LatLng;
  icon?: string;
  map?: Map;
  id?: string;
  getPosition(): LatLng;
  on(eventType: string, callback: (event: evt) => void): void;
  setMap(mapOrNull?: Map | null): void;
}
