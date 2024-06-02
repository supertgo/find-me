import { useQueryClient } from '@tanstack/react-query';
import { useRemoveProfessionalExperience } from 'hooks/contexts/RemoveProfessionalExperience';
import { useProfessionalExperience } from 'hooks/useProfessionalExperience/useProfessionalExperience';
import { useState } from 'react';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { GetUserRouteConst } from 'utils/routes';

export type UseModalRemoveProfessionalExperienceProps = {};

export const useModalRemoveProfessionalExperience = () => {
	const [loading, setLoading] = useState(false);
	const { setOpen, open, professionalExperience } = useRemoveProfessionalExperience();

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
