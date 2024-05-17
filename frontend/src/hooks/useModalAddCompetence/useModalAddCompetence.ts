import { useCompetence } from 'hooks/useCompetence/useCompetence';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type AddCompetenceInputs = {
	competence: string;
};

export const useModalAddCompetence = () => {
	const [isLoading, setIsLoading] = useState(false);

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

		setIsLoading(false);
	};

	return {
		onSubmit,
		control,
		handleSubmit,
		errors,
		isValid,
		isLoading,
	};
};
