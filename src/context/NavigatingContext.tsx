import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigatingContextType {
  isNavigating: boolean;
  toggleNavigating: () => void;
  startLocation: string;
  setStartLocation: (location: string) => void;
  parkingLot: string;
  setParkingLot: (waypoints: string) => void;
  destination: string;
  setDestination: (destination: string) => void;
  startToParkingLotTime: number;
  setStartToParkingLotTime: (time: number) => void;
  parkingLotToDestinationTime: number;
  setParkingLotToDestinationTime: (time: number) => void;
  startToParkingLotDistance: number;
  setStartToParkingLotDistance: (distance: number) => void;
  parkingLotToDestinationDistance: number;
  setParkingLotToDestinationDistance: (distance: number) => void;
}

const defaultState: NavigatingContextType = {
  isNavigating: false,
  toggleNavigating: () => {},
  startLocation: '',
  setStartLocation: () => {},
  parkingLot: '',
  setParkingLot: () => {},
  destination: '',
  setDestination: () => {},
  startToParkingLotTime: 0,
  setStartToParkingLotTime: () => {},
  parkingLotToDestinationTime: 0,
  setParkingLotToDestinationTime: () => {},
  startToParkingLotDistance: 0,
  setStartToParkingLotDistance: () => {},
  parkingLotToDestinationDistance: 0,
  setParkingLotToDestinationDistance: () => {},
};

const NavigatingContext = createContext<NavigatingContextType>(defaultState);

interface NavigatingProviderProps {
  children: ReactNode;
}

export const NavigatingProvider = ({ children }: NavigatingProviderProps) => {
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [startLocation, setStartLocation] = useState<string>('');
  const [parkingLot, setParkingLot] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [startToParkingLotTime, setStartToParkingLotTime] = useState<number>(0);
  const [parkingLotToDestinationTime, setParkingLotToDestinationTime] = useState<number>(0);
  const [startToParkingLotDistance, setStartToParkingLotDistance] = useState<number>(0);
  const [parkingLotToDestinationDistance, setParkingLotToDestinationDistance] = useState<number>(0);

  const toggleNavigating = () => {
    setIsNavigating((prev) => !prev);
  };

  return (
    <NavigatingContext.Provider
      value={{
        isNavigating,
        toggleNavigating,
        startLocation,
        setStartLocation,
        parkingLot,
        setParkingLot,
        destination,
        setDestination,
        startToParkingLotTime,
        setStartToParkingLotTime,
        parkingLotToDestinationTime,
        setParkingLotToDestinationTime,
        startToParkingLotDistance,
        setStartToParkingLotDistance,
        parkingLotToDestinationDistance,
        setParkingLotToDestinationDistance,
      }}
    >
      {children}
    </NavigatingContext.Provider>
  );
};

// Custom Hook
export const useNavigating = (): NavigatingContextType => useContext(NavigatingContext);
