import { useQueryClient } from '@tanstack/react-query';
import { RemoveAcademicRecordContext } from 'hooks/contexts/RemoveAcademicRecord/RemoveAcademicRecord';
import { useAcademicRecord } from 'hooks/useAcademicRecord/useAcademicRecord';
import { useState } from 'react';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { useContextSelector } from 'use-context-selector';
import { GetUserRouteConst } from 'utils/routes';

export type UseModalRemoveAcademicRecordProps = {};

export const useModalRemoveAcademicRecord = () => {
	const [loading, setLoading] = useState(false);
	const { setOpen, open, academicRecord } = useContextSelector(
		RemoveAcademicRecordContext,
		(context) => ({
			open: context.open,
			academicRecord: context.academicRecord,
			setOpen: context.setOpen,
		}),
	);

	const { id } = useLoggedUserStore((state) => ({
		id: state.id,
	}));

	const queryClient = useQueryClient();

	const { deleteAcademicRecord } = useAcademicRecord();

	const handleSubmit = async () => {
		if (!academicRecord) {
			return;
		}

		setLoading(true);

		const res = await deleteAcademicRecord({
			id: academicRecord?.id,
		});

		if (res && res.error) {
			setLoading(false);
			return;
		}

		await queryClient.invalidateQueries({
			queryKey: [
				`/${GetUserRouteConst({
					user_id: id,
				})}`,
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
		academicRecord,
	};
};
