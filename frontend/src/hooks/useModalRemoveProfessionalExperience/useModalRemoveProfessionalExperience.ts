import { useQueryClient } from '@tanstack/react-query';
import { RemoveProfessionalExperienceContext } from 'hooks/contexts/RemoveProfessionalExperience/RemoveProfessionalExperience';
import { useProfessionalExperience } from 'hooks/useProfessionalExperience/useProfessionalExperience';
import { useState } from 'react';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { useContextSelector } from 'use-context-selector';
import { GetUserRouteConst } from 'utils/routes';

export type UseModalRemoveProfessionalExperienceProps = {};

export const useModalRemoveProfessionalExperience = () => {
	const [loading, setLoading] = useState(false);
	const { setOpen, open, professionalExperience } = useContextSelector(
		RemoveProfessionalExperienceContext,
		(context) => ({
			open: context.open,
			professionalExperience: context.professionalExperience,
			setOpen: context.setOpen,
		}),
	);

	const { id } = useLoggedUserStore((state) => ({
		id: state.id,
	}));

	const queryClient = useQueryClient();

	const { deleteProfessionalExperience } = useProfessionalExperience();

	const handleSubmit = async () => {
		if (!professionalExperience) {
			return;
		}

		setLoading(true);

		const res = await deleteProfessionalExperience({
			id: professionalExperience?.id,
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
		professionalExperience,
	};
};
