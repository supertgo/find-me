import { useContextSelector } from 'use-context-selector';
import { CoverLetterProvider, CoverLetterContext } from './CoverLetter';

const useCoverLetter = () => {
	const { setOpen, open, coverLetter, setCoverLetter } = useContextSelector(
		CoverLetterContext,
		(context) => ({
			open: context.open,
			coverLetter: context.coverLetter,
			setOpen: context.setOpen,
			setCoverLetter: context.setCoverLetter,
		}),
	);

	return { open, setOpen, coverLetter, setCoverLetter };
};

export { CoverLetterContext, CoverLetterProvider, useCoverLetter };
