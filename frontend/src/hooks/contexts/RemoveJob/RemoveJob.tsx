'use client';

import { Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';

type RemoveJobProps = {
	children: ReactNode;
};

type Job = {
	id: number;
	name: string;
	companyName: string;
};

type RemoveJobContextProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	job: Job | null;
	setJob: Dispatch<SetStateAction<Job | null>>;
};

const defaultValues: RemoveJobContextProps = {
	open: false,
	setOpen: () => ({}),
	job: {} as Job,
	setJob: () => ({}),
};

export const RemoveJobContext = createContext(defaultValues);

export const RemoveJobProvider = ({ children }: RemoveJobProps) => {
	const [open, setOpen] = useState(false);
	const [job, setJob] = useState<Job | null>(null);

	const values = useMemo(
		() => ({
			open,
			setOpen,
			job,
			setJob,
		}),
		[open, job],
	);

	return (
		<RemoveJobContext.Provider value={values}>
			{children}
		</RemoveJobContext.Provider>
	);
};
