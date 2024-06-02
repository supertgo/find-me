import { useQueryClient } from '@tanstack/react-query';
import { useRemoveAcademicRecord } from 'hooks/contexts/RemoveAcademicRecord';
import { useAcademicRecord } from 'hooks/useAcademicRecord';
import { useState } from 'react';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { GetUserRouteConst } from 'utils/routes';

export type UseModalRemoveAcademicRecordProps = {};

export const useModalRemoveAcademicRecord = () => {
	const [loading, setLoading] = useState(false);
	const { setOpen, open, academicRecord } = useRemoveAcademicRecord();

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
