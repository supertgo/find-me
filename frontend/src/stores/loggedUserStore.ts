import { create } from 'zustand';

export type LoggedUserProps = {
  email: string;
  setUser(user: { email: string }): void;
};

export const useLoggedUserStore = create<LoggedUserProps>()((set) => ({
  email: '',
  setUser: (user) => set(() => ({ ...user })),
}));
