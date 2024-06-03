import { useQuery } from '@tanstack/react-query';
import { useJobApplication } from 'hooks/useJobApplication';
import { GetJobApplicationsRouteConst } from 'utils/routes';

export type UsePreviousApplicationsProps = { userId: number };

export const usePreviousApplications = ({
	userId,
}: UsePreviousApplicationsProps) => {
	const { findJobApplications } = useJobApplication();

	const { data: response, isLoading } = useQuery({
		queryKey: [
			`/${GetJobApplicationsRouteConst({
				candidatesId: [userId],
			})}`,
		],
		queryFn: () =>
			findJobApplications({
				includes: ['job'],
				candidatesId: [userId],
			}),
	});
	const data = response?.data;

	return {
		data,
		isLoading,
	};
};
