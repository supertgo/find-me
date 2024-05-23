import { toast } from 'react-toastify';
import {
	Control,
	useForm,
	FieldErrors,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { useState } from 'react';
import { PutClient } from 'services/httpClient/put';
import { PutUserRouteConst } from 'utils/routes';
import { revertFormatCellphone } from 'utils/formatCellphone';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { UNEXPECTED_ERROR } from 'utils/errors';

export type ConfigInputs = {
	name: string;
	email: string;
	phone: string;
	password: string;
	about_me: string;
};

export interface UseConfigFormProtocols {
	register: UseFormRegister<ConfigInputs>;
	handleSubmit: UseFormHandleSubmit<any>;
	errors: FieldErrors<ConfigInputs>;
	onSubmit: SubmitHandler<ConfigInputs>;
	control: Control<ConfigInputs>;
	isLoading: boolean;
	isValid: boolean;
}

export const useUserConfigForm = (): UseConfigFormProtocols => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		control,
	} = useForm<ConfigInputs>({
		mode: 'onBlur',
	});

	const { setUser } = useLoggedUserStore((state) => ({
		setUser: state.setUser,
	}));

	const onSubmit: SubmitHandler<ConfigInputs> = async (data, event) => {
		event?.preventDefault();

		setIsLoading(true);

		const putClient = new PutClient();

		const body: ConfigInputs = {
			name: data.name,
			password: data.password,
			email: data.email,
			phone: revertFormatCellphone(data.phone),
			about_me: data.about_me,
		};

		try {
			await putClient.put({
				url: `/${PutUserRouteConst}`,
				body,
			});

			setUser({
				name: data.name,
				email: data.email,
			});

			toast.success('Informações atualizadas com sucesso!');
		} catch (error) {
			if (error instanceof Error) {
				return toast.error(error.response.data.message);
			}

			return toast.error(UNEXPECTED_ERROR);
    } finally {
      setIsLoading(false);
    }
	};

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
