'use client';

import { Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';

type RemoveAcademicRecordProps = {
	children: ReactNode;
};

type AcademicRecord = {
	id: number;
	name: string;
};

type RemoveAcademicRecordContextProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	academicRecord: AcademicRecord | null;
	setAcademicRecord: Dispatch<SetStateAction<AcademicRecord | null>>;
};

const defaultValues: RemoveAcademicRecordContextProps = {
	open: false,
	setOpen: () => ({}),
	academicRecord: {} as AcademicRecord,
	setAcademicRecord: () => ({}),
};

export const RemoveAcademicRecordContext = createContext(defaultValues);

export const RemoveAcademicRecordProvider = ({
	children,
}: RemoveAcademicRecordProps) => {
	const [open, setOpen] = useState(false);
	const [academicRecord, setAcademicRecord] = useState<AcademicRecord | null>(
		null,
	);

	const values = useMemo(
		() => ({
			open,
			setOpen,
			academicRecord,
			setAcademicRecord,
		}),
		[open, academicRecord],
	);

	return (
		<RemoveAcademicRecordContext.Provider value={values}>
			{children}
		</RemoveAcademicRecordContext.Provider>
	);
};
