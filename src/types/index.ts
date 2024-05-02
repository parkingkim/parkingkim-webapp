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

export interface User {
  name: string;
  email: string;
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

export interface ParkingLotDetailRes {
  data: {
    parkingName: string;
    parkingType: string;
    latitude: number;
    longitude: number;
    feeInfo: {
      fee: number;
      time: number;
    };
    currentParkingCount: number;
    capacity: number;
    lastUpdated: number;
    tel: string;
    paymentType: string;
    weekdayOperatingTime: {
      beginTime: string;
      endTime: string;
    };
    saturdayOperatingTime: {
      beginTime: string;
      endTime: string;
    };
    holidayOperatingTime: {
      beginTime: string;
      endTime: string;
    };
    reviewInfo: {
      totalReviewCount: number;
      reviews: [
        {
          content: string;
          count: number;
        },
      ];
    };
  };
}
