import { useQueryClient } from '@tanstack/react-query';
import { useProfessionalExperience } from 'hooks/useProfessionalExperience/useProfessionalExperience';
import { EmploymentType, WorkModel } from 'protocols/external/job/job';
import { PostAddProfessionalExperienceObj } from 'protocols/external/professional-experience/professional-experience';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GetUserRouteConst } from 'utils/routes';

export type UseModalAddProfessionalExperienceProps = {
	user_id: number;
};

export type AddProfessionalExperiencesInputs = {
	company_name: string;
	position: string;
	description: string;
	start_date: string;
	end_date: string;
	is_current: boolean;
	location: string;
	work_model: string;
	employment_type: string;
};

export const useModalAddProfessionalExperience = ({
	user_id,
}: UseModalAddProfessionalExperienceProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const queryClient = useQueryClient();

	const {
		handleSubmit,
		formState: { errors, isValid },
		control,
    watch,
    register
	} = useForm<AddProfessionalExperiencesInputs>({
		mode: 'onBlur',
	});

	const { createProfessionalExperience } = useProfessionalExperience();

	const onSubmit: SubmitHandler<AddProfessionalExperiencesInputs> = async (
		data,
		event,
	) => {
		event?.preventDefault();

		setIsLoading(true);

		const mountProfessionalExperience: PostAddProfessionalExperienceObj = {
			location: data.location,
			position: data.position,
			is_current: data.is_current || false,
			start_date: data.start_date,
			work_model: data.work_model as WorkModel,
			description: data.description,
			company_name: data.company_name,
			employment_type: data.employment_type as EmploymentType,
      ...(data.end_date && {end_date: data.end_date}),
		};

		await createProfessionalExperience({
			professionalExperience: mountProfessionalExperience,
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
    watch,
    register
	};
};
