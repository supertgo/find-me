import { useQueryClient } from '@tanstack/react-query';
import { useAcademicRecord } from 'hooks/useAcademicRecord/useAcademicRecord';
import { PostAcademicRecordObj } from 'protocols/external/academic-record/academic-record';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GetUserRouteConst } from 'utils/routes';

export type AddAcademicRecordInputs = {
	institution: string;
	degree: string;
	field_of_study: string;
	description: string;
	start_date: string;
	end_date: string;
	is_in_progress: boolean;
};

export type UseModalAddAcademicRecordProps = {
	user_id: number;
};

export const useModalAddAcademicRecord = ({
	user_id,
}: UseModalAddAcademicRecordProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const {
		handleSubmit,
		formState: { errors, isValid },
		control,
		reset,
	} = useForm<AddAcademicRecordInputs>({
		mode: 'onBlur',
	});

	const { createAcademicRecord } = useAcademicRecord();

	const queryClient = useQueryClient();

	const onSubmit: SubmitHandler<AddAcademicRecordInputs> = async (
		data,
		event,
	) => {
		event?.preventDefault();

		const mountAcademicRecord: PostAcademicRecordObj = {
			end_date: data.end_date,
			description: data.description,
			degree: data.degree,
			start_date: data.start_date,
			institution: data.institution,
			field_of_study: data.field_of_study,
			is_in_progress: new Date(data.end_date) >= new Date(),
		};

		const response = await createAcademicRecord({
			academicRecord: mountAcademicRecord,
		});

		setIsLoading(false);

		if (response) {
			return;
		}

		reset({
			institution: '',
			end_date: '',
			field_of_study: '',
			is_in_progress: undefined,
			degree: '',
			start_date: '',
			description: '',
		});

		await queryClient.invalidateQueries({
			queryKey: [
				`/${GetUserRouteConst({
					user_id,
				})}`,
			],
		});

		setOpen(false);
	};

	return {
		onSubmit,
		control,
		handleSubmit,
		open,
		setOpen,
		errors,
		isValid,
		isLoading,
	};
};
