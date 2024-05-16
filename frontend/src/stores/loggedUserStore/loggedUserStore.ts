import { UserType } from 'protocols/external/user/user';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

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

export const useLoggedUserStore = create<LoggedUserProps>()(
  persist(
    (set) => ({
      name: '',
      email: '',
      type: 'recruiter',
      setUser: (user) => set(() => ({ ...user })),
    }),
    {
      name: '@find-me:user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
