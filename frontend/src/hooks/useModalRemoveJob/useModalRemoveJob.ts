'use client';
import { useQueryClient } from '@tanstack/react-query';
import { JobToBeRemoved } from 'components/ModalRemoveJob/ModalRemoveJob';
import { useJob } from 'hooks/useJob/useJob';
import { Dispatch, SetStateAction, useState } from 'react';
import { GetJobRouteConst, GetJobsRouteConst } from 'utils/routes';
import { useRouter } from 'next/navigation';
import { JobsUrl } from 'utils/urls';

export type UseModalRemoveJobProps = {
	setOpen: Dispatch<SetStateAction<boolean>>;
	job: JobToBeRemoved;
};

export const useModalRemoveJob = ({ setOpen, job }: UseModalRemoveJobProps) => {
	const [loading, setLoading] = useState(false);

	const queryClient = useQueryClient();

	const { deleteJob } = useJob();
	const { push } = useRouter();

	const handleSubmit = async () => {
		if (!job) {
			return;
		}

		setLoading(true);

		const res = await deleteJob({
			id: job?.id,
		});

		if (res && res.error) {
			setLoading(false);
			return;
		}

		await queryClient.invalidateQueries({
			queryKey: [
				`/${GetJobRouteConst({
					job_id: job.id,
				})}`,
				`/${GetJobsRouteConst}`,
			],
		});

		setOpen(false);
		setLoading(false);
		push(`/${JobsUrl}`);
	};

	return {
		open,
		setOpen,
		loading,
		handleSubmit,
	};
};
