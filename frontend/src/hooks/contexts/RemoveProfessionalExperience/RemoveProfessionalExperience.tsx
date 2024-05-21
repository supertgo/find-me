'use client';

import { Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';

type RemoveProfessionalExperienceProps = {
	children: ReactNode;
};

type ProfessionalExperience = {
  id: number
  name: string
}

type RemoveProfessionalExperienceContextProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	professionalExperience: ProfessionalExperience | null;
	setProfessionalExperience: Dispatch<SetStateAction<ProfessionalExperience | null>>;
};

const defaultValues: RemoveProfessionalExperienceContextProps = {
	open: false,
	setOpen: () => ({}),
	professionalExperience: {} as ProfessionalExperience,
	setProfessionalExperience: () => ({}),
};

export const RemoveProfessionalExperienceContext = createContext(defaultValues);

export const RemoveProfessionalExperienceProvider = ({
	children,
}: RemoveProfessionalExperienceProps) => {
	const [open, setOpen] = useState(false);
	const [professionalExperience, setProfessionalExperience] = useState<
		ProfessionalExperience | null
	>(null);

	const values = useMemo(
		() => ({
			open,
			setOpen,
			professionalExperience,
			setProfessionalExperience,
		}),
		[open, professionalExperience],
	);

	return (
		<RemoveProfessionalExperienceContext.Provider value={values}>
			{children}
		</RemoveProfessionalExperienceContext.Provider>
	);
};
