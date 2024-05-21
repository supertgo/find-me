'use client';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

export type SignInInputs = {
	email: string;
	password: string;
};

import {
	Control,
	useForm,
	FieldErrors,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { getSession } from 'next-auth/react';
import { HomeUrl } from 'utils/urls';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';

export interface UseSignInFormProtocols {
	register: UseFormRegister<any>;
	handleSubmit: UseFormHandleSubmit<any>;
	errors: FieldErrors<SignInInputs>;
	onSubmit: SubmitHandler<SignInInputs>;
	control: Control<SignInInputs>;
	isLoading: boolean;
	isValid: boolean;
}

const getUserInfo = async () => {
	return await getSession();
};

export const useSignInForm = (): UseSignInFormProtocols => {
	const [isLoading, setIsLoading] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { setUser } = useLoggedUserStore((state) => ({
		setUser: state.setUser,
	}));

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		control,
	} = useForm<SignInInputs>({
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<SignInInputs> = async (data, event) => {
		event?.preventDefault();

		setIsLoading(true);

		const result = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		});

		if (result?.error) {
			toast.error(result.error);
			setIsLoading(false);
			return;
		}

		if (result?.status === 200) {
			setIsAuthenticated(!isAuthenticated);
			const user = await getUserInfo();

			setUser({
        id: user!.id,
				name: user!.name,
				email: user!.email,
				type: user!.type,
			});
		}

		setIsLoading(false);
	};

	useEffect(() => {
		if (isAuthenticated) {
			const callbackURL = window.location.search;

			if (!callbackURL.includes('callbackurl')) {
				redirect(`/${HomeUrl}`);
			}
			const startIndex = callbackURL.indexOf('=') + 2;
			const contentAfterEqual = callbackURL.substring(startIndex);

			redirect(contentAfterEqual);
		}
	}, [isAuthenticated]);

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		control,
		isValid,
		isLoading,
	};
};
