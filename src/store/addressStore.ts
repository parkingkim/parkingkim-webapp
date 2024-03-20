import { AddressResult } from '@utils/parseAddress';
import { create } from 'zustand';

interface AddressStore {
  address: AddressResult;
  setAddress: (address: AddressResult) => void;
}

const useAddressStore = create<AddressStore>((set) => ({
  address: {
    roadAddr: '도로명 주소를 불러오고 있습니다.',
    jibunAddr: '주소를 불러오고 있습니다.',
  } as AddressResult,
  setAddress: (address: AddressResult) => set({ address }),
}));

export default useAddressStore;
