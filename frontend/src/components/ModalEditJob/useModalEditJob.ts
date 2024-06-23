import { QueryClient } from '@tanstack/react-query';
import { useJob } from 'hooks/useJob';
import { PutJobBody } from 'protocols/external/job/job';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formatCurrencyToNumber } from 'utils/money';
import { GetJobsRouteConst } from 'utils/routes';

export type EditJobInputs = {
	salary: string;
} & Omit<PutJobBody, 'salary'>;

export type UseModalEditJobProps = {
	setOpen: Dispatch<SetStateAction<boolean>>;
	jobId: number;
	companyId: number;
};

export const useModalEditJob = ({
	setOpen,
	jobId,
	companyId,
}: UseModalEditJobProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		handleSubmit,
		formState: { errors, isValid },
		control,
		watch,
		register,
		reset,
	} = useForm<EditJobInputs>({
		mode: 'onBlur',
	});

	const { updateJob } = useJob();
	const queryClient = new QueryClient();

	const onSubmit: SubmitHandler<EditJobInputs> = async (data, event) => {
		event?.preventDefault();

		setIsLoading(true);

		const formattedSalary = formatCurrencyToNumber(data.salary);

		const mountJobObj: PutJobBody = {
			name: data.name,
			description: data.description,
			salary: formattedSalary,
			location: data.location,
			applications_count: data.applications_count,
			company_id: companyId,
			work_model: data.work_model,
			is_available: true,
			competences: data.competences,
			week_workload: 40,
			employment_type: data.employment_type,
			salary_time_unit: data.salary_time_unit,
			applications_amount: data.applications_amount,
			accept_application_until: `${data.accept_application_until} 23:59:59`,
		};

		const response = await updateJob({
			job: mountJobObj,
			id: jobId,
		});

		if (response && response.error) {
			setIsLoading(false);
			return;
		}

		reset({
			name: '',
			description: '',
			salary: undefined,
			location: '',
			work_model: undefined,
			is_available: true,
			competences: [],
			week_workload: 0,
			employment_type: undefined,
			salary_time_unit: undefined,
			applications_amount: -Infinity,
			accept_application_until: '',
		});

		await queryClient.invalidateQueries({
			queryKey: [`/${GetJobsRouteConst}`, `job/${jobId}`],
		});

		setIsLoading(false);
		setOpen(false);
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
		register,
	};
};
