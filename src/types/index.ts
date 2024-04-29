export interface ParkingLot {
  parkingId: string;
  parkingName: string;
  estimatedFee: string;
  estimatedWalkingTime: string;
  parkingType: string;
  isFavorite: boolean;
  latitude: string;
  longitude: string;
}

export interface SearchResult {
  name: string;
  newAddressList: {
    newAddress: {
      fullAddressRoad: string;
    }[];
  };
  noorLat: string;
  noorLon: string;
}

export interface ParkingLotDetail {
  parkingId: number;
  parkingName: string;
  estimatedFee: number;
  estimatedWalkingTime: number;
  parkingType: string;
  isFavorite: boolean;
  latitude: number;
  longitude: number;
}

export interface ParkingRes {
  data: {
    parkingLots: ParkingLotDetail[];
  };
}
