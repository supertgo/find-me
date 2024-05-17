import { useAcademicRecord } from 'hooks/useAcademicRecord/useAcademicRecord';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type AddAcademicRecordInputs = {
	institution: string;
	degree: string;
	field_of_study: string;
	description: string;
	start_date: string;
	end_date: string;
	is_in_progress: boolean;
};

export const useModalAddAcademicRecord = () => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		handleSubmit,
		formState: { errors, isValid },
		control,
	} = useForm<AddAcademicRecordInputs>({
		mode: 'onBlur',
	});

	const { createAcademicRecord } = useAcademicRecord();

	const onSubmit: SubmitHandler<AddAcademicRecordInputs> = async (
		data,
		event,
	) => {
		event?.preventDefault();

		setIsLoading(true);

		await createAcademicRecord({
			academicRecord: {
				...data,
			},
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
