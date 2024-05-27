import { useQuery } from '@tanstack/react-query';
import { JobPageButtonProps } from 'components/JobPageButton/JobPageButton';
import { useJobApplication } from 'hooks/useJobApplication/useJobApplication';

export type UseJobPageButtonProps = JobPageButtonProps;

export const useJobPageButton = ({ job, user }: UseJobPageButtonProps) => {
	const { findJobApplications } = useJobApplication();

	const { data: response, isLoading } = useQuery({
		queryKey: [
			`/${findJobApplications({
				jobsId: [job.id],
			})}`,
		],
		queryFn: () =>
			findJobApplications({
				jobsId: [job.id],
				candidatesId: [user.id],
			}),
	});

	const data = response?.data;

	return {
		data,
		isLoading,
	};
};
