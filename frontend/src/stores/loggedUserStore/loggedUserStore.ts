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
	setUser(user: Partial<User>): void;
};

export const useLoggedUserStore = create<LoggedUserProps>()(
	persist(
		(set, get) => ({
			name: '',
			email: '',
			type: 'recruiter',
			setUser: (user) =>
				set(() => ({
					type: user.type || get().type,
					name: user.name || get().name,
					email: user.email || get().email,
				})),
		}),
		{
			name: '@find-me:user',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
