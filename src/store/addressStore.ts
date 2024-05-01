import { AddressResult } from '@utils/parseAddress';
import { create } from 'zustand';

interface AddressStore {
  curAddress: AddressResult;
  setCurAddress: (address: AddressResult) => void;
  homeAddress: string;
  setHomeAddress: (address: string) => void;
  detailHomeAddress: string;
  setDetailHomeAddress: (address: string) => void;
  companyAddress: string;
  setCompanyAddress: (address: string) => void;
  detailCompanyAddress: string;
  setDetailCompanyAddress: (address: string) => void;
}

const useAddressStore = create<AddressStore>((set) => ({
  // 현재 위치 주소
  curAddress: {
    roadAddr: '도로명 주소를 불러오고 있습니다.',
    jibunAddr: '주소를 불러오고 있습니다.',
  } as AddressResult,
  setCurAddress: (address: AddressResult) => set({ curAddress: address }),

  // 집 주소
  homeAddress: '',
  setHomeAddress: (address: string) => set({ homeAddress: address }),
  detailHomeAddress: '',
  setDetailHomeAddress: (address: string) => set({ detailHomeAddress: address }),

  // 회사 주소
  companyAddress: '',
  setCompanyAddress: (address: string) => set({ companyAddress: address }),
  detailCompanyAddress: '',
  setDetailCompanyAddress: (address: string) => set({ detailCompanyAddress: address }),
}));

export default useAddressStore;
