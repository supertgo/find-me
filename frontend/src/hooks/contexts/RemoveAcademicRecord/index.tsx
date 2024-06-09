import { useContextSelector } from 'use-context-selector';
import {
	RemoveAcademicRecordContext,
	RemoveAcademicRecordProvider,
} from './RemoveAcademicRecord';

const useRemoveAcademicRecord = () => {
	const { setOpen, setAcademicRecord, open, academicRecord } =
		useContextSelector(RemoveAcademicRecordContext, (context) => ({
			open: context.open,
			setOpen: context.setOpen,
			academicRecord: context.academicRecord,
			setAcademicRecord: context.setAcademicRecord,
		}));

	return { setOpen, setAcademicRecord, open, academicRecord };
};

export {
	useRemoveAcademicRecord,
	RemoveAcademicRecordProvider,
	RemoveAcademicRecordContext,
};
