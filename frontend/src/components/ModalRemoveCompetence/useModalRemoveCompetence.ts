import { useQueryClient } from '@tanstack/react-query';
import { RemoveCompetenceContext } from 'hooks/contexts/RemoveCompetence/RemoveCompetence';
import { useCompetence } from 'hooks/useCompetence/useCompetence';
import { useState } from 'react';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { useContextSelector } from 'use-context-selector';
import { GetUserRouteConst } from 'utils/routes';

export type UseModalRemoveCompetenceProps = {};

export const useModalRemoveCompetence = () => {
	const [loading, setLoading] = useState(false);

	const { setOpen, open, competence } = useContextSelector(
		RemoveCompetenceContext,
		(context) => ({
			open: context.open,
			competence: context.competence,
			setOpen: context.setOpen,
		}),
	);

	const { id } = useLoggedUserStore((state) => ({
		id: state.id,
	}));

	const queryClient = useQueryClient();

	const { deleteCompetence } = useCompetence();

	const handleSubmit = async () => {
		if (!competence) {
			return;
		}

		setLoading(true);

		const res = await deleteCompetence({
			id: competence?.id,
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
		competence,
	};
};
