import { useCoverLetter } from 'hooks/contexts/CoverLetter';

export type UseModalApplicationProps = {};

export const useModalApplication = () => {
	const { setOpen, open, coverLetter } = useCoverLetter();

	return {
		open,
		setOpen,
    coverLetter
	};
};
