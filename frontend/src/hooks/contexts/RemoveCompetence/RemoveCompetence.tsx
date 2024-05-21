'use client';

import { Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';

type CompetenceProps = {
	children: ReactNode;
};

type Competence = {
	id: number;
	name: string;
};

type RemoveCompetenceContextProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	competence: Competence | null;
	setCompetence: Dispatch<SetStateAction<Competence | null>>;
};

const defaultValues: RemoveCompetenceContextProps = {
	open: false,
	setOpen: () => ({}),
	competence: {} as Competence,
	setCompetence: () => ({}),
};

export const RemoveCompetenceContext = createContext(defaultValues);

export const RemoveCompetenceProvider = ({
	children,
}: CompetenceProps) => {
	const [open, setOpen] = useState(false);
	const [competence, setCompetence] = useState<Competence | null>(
		null,
	);

	const values = useMemo(
		() => ({
			open,
			setOpen,
			competence,
			setCompetence,
		}),
		[open, competence],
	);

	return (
		<RemoveCompetenceContext.Provider value={values}>
			{children}
		</RemoveCompetenceContext.Provider>
	);
};
