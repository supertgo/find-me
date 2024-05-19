import { useQueryClient } from '@tanstack/react-query';
import { useCompetence } from 'hooks/useCompetence/useCompetence';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GetUserRouteConst } from 'utils/routes';

export type AddCompetenceInputs = {
	competence: string;
};

export type UseModalAddCompetenceProps = {
	user_id: number;
};

export const useModalAddCompetence = ({
	user_id,
}: UseModalAddCompetenceProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const queryClient = useQueryClient();

	const {
		handleSubmit,
		formState: { errors, isValid },
		control,
	} = useForm<AddCompetenceInputs>({
		mode: 'onBlur',
	});

	const { createCompetence } = useCompetence();

	const onSubmit: SubmitHandler<AddCompetenceInputs> = async (data, event) => {
		event?.preventDefault();

		setIsLoading(true);

		await createCompetence({
			competence: data.competence,
		});

		await queryClient.invalidateQueries({
			queryKey: [
				`/${GetUserRouteConst({
					user_id,
				})}`,
			],
		});

		setOpen(false);
		setIsLoading(false);
	};

	return {
		open,
		setOpen,
		onSubmit,
		control,
		handleSubmit,
		errors,
		isValid,
		isLoading,
	};
};
