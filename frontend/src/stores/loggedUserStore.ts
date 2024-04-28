import { UserType } from 'protocols/external/user/user';
import { create } from 'zustand';

export type User = {
  name: string;
  email: string;
  type: UserType;
};

export type LoggedUserProps = {
  name: string;
  email: string;
  type: UserType;
  setUser(user: User): void;
};

export const useLoggedUserStore = create<LoggedUserProps>()((set) => ({
  name: '',
  email: '',
  type: 'employee',
  setUser: (user) => set(() => ({ ...user })),
}));
