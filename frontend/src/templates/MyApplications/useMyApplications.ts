import { useQuery } from '@tanstack/react-query';
import { useJobApplication } from 'hooks/useJobApplication';
import { JobApplicationResponse } from 'protocols/external/job/job-application';
import { useLoggedUserStore } from 'stores/loggedUserStore';
import { getInitialData } from 'utils/initialData';
import { GetJobApplicationsRouteConst } from 'utils/routes';

export type UseMyApplicationsProps = {
	initialData: JobApplicationResponse;
};

export const useMyApplications = ({ initialData }: UseMyApplicationsProps) => {
	const { id, name } = useLoggedUserStore((state) => ({
		id: state.id,
    name: state.name
	}));

	const { findJobApplications } = useJobApplication();

	const { data: response, isLoading } = useQuery({
		queryKey: [`${GetJobApplicationsRouteConst({})}`],
		queryFn: () =>
			findJobApplications({
				includes: ['candidates', 'job'],
				candidatesId: [id],
			}),
		initialData: initialData
			? getInitialData<JobApplicationResponse>({
					initialData,
				})
			: undefined,
	});

	const data = response?.data.data;

	return {
		data,
    name,
		isLoading,
	};
};
