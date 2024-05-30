import { BreadcrumbPath } from 'components/Breadcrumb/Breadcrumb';
import { JobToBeRemoved } from 'components/ModalRemoveJob';
import { useState } from 'react';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { HomeUrl, JobUrl, JobsUrl } from 'utils/urls';

export type UseJobPageProps = {
	jobId: number;
	jobName: string;
	companyName: string;
};

export const useJobPage = ({
	jobId,
	jobName,
	companyName,
}: UseJobPageProps) => {
	const [open, setOpen] = useState(false);
	const [, setJob] = useState<JobToBeRemoved | null>(null);
	const { type, loggedUserId } = useLoggedUserStore((state) => ({
		type: state.type,
		loggedUserId: state.id,
	}));

	const applicants = 10;

	const paths: BreadcrumbPath[] = [
		{
			name: 'Home',
			url: `/${HomeUrl}`,
		},
		{
			name: 'Vagas',
			url: `/${JobsUrl}`,
		},
		{
			name: jobName,
			url: `/${JobUrl(jobId)}`,
		},
	];

	const onRemoveJobClick = () => {
		setJob({
			id: jobId,
			name: jobName,
			companyName,
		});

		setOpen(true);
	};

	return {
		open,
		type,
		setOpen,
		setJob,
		applicants,
		loggedUserId,
		paths,
		onRemoveJobClick,
	};
};
