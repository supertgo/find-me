import { useQueryClient } from '@tanstack/react-query';
import { RemoveJobContext } from 'hooks/contexts/RemoveJob/RemoveJob';
import { useJob } from 'hooks/useJob/useJob';
import { useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import {
	GetJobRouteConst,
	GetJobsRouteConst,
} from 'utils/routes';

export type UseModalRemoveJobProps = {};

export const useModalRemoveJob = () => {
	const [loading, setLoading] = useState(false);
	const { setOpen, open, job } = useContextSelector(
		RemoveJobContext,
		(context) => ({
			open: context.open,
			job: context.job,
			setOpen: context.setOpen,
		}),
	);

	const queryClient = useQueryClient();

	const { deleteJob } = useJob();

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
	};

	return {
		open,
		setOpen,
		loading,
		handleSubmit,
		job,
	};
};
