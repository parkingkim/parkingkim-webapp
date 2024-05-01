import { AddressResult } from '@utils/parseAddress';
import { create } from 'zustand';

interface AddressStore {
  curAddress: AddressResult;
  setCurAddress: (address: AddressResult) => void;
  homeAddress: AddressResult;
  setHomeAddress: (address: AddressResult) => void;
  companyAddress: AddressResult;
  setCompanyAddress: (address: AddressResult) => void;
}

const useAddressStore = create<AddressStore>((set) => ({
  // 현재 위치 주소
  curAddress: {
    roadAddr: '도로명 주소를 불러오고 있습니다.',
    jibunAddr: '주소를 불러오고 있습니다.',
  } as AddressResult,
  setCurAddress: (address: AddressResult) => set({ curAddress: address }),
  // 집 주소
  homeAddress: {
    roadAddr: '',
    jibunAddr: '',
  } as AddressResult,
  setHomeAddress: (address: AddressResult) => set({ homeAddress: address }),
  // 회사 주소
  companyAddress: {
    roadAddr: '',
    jibunAddr: '',
  } as AddressResult,
  setCompanyAddress: (address: AddressResult) => set({ companyAddress: address }),
}));

export default useAddressStore;
