import { User } from 'src/types';
import { create } from 'zustand';

interface UserInfoStore {
  user: User | null;
  setUser: (user: User) => void;
}

const useUserInfoStore = create<UserInfoStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserInfoStore;
