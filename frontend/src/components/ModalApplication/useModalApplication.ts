import { CoverLetterContext } from 'hooks/contexts/CoverLetter/CoverLetter';
import { useContextSelector } from 'use-context-selector';

export type UseModalApplicationProps = {};

export const useModalApplication = () => {
	const { setOpen, open, coverLetter } = useContextSelector(
		CoverLetterContext,
		(context) => ({
			open: context.open,
			coverLetter: context.coverLetter,
			setOpen: context.setOpen,
		}),
	);

	return {
		open,
		setOpen,
    coverLetter
	};
};
