import { AddressResult } from '@utils/parseAddress';
import { create } from 'zustand';

interface AddressStore {
  address: AddressResult;
  setAddress: (address: AddressResult) => void;
}

const useAddressStore = create<AddressStore>((set) => ({
  address: {
    roadAddr: '',
    jibunAddr: '',
  } as AddressResult,
  setAddress: (address: AddressResult) => set({ address }),
}));

export default useAddressStore;
