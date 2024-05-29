import { Button } from 'components/Button/Button';
import { CoverLetterContext } from 'hooks/contexts/CoverLetter/CoverLetter';
import { useContextSelector } from 'use-context-selector';

export type SeeApplicationProps = {
	id: number;
	jobId: number;
	name: string;
	email: string;
	phone: string;
	coverLetter: string;
};

export const SeeApplication = ({
	id,
	jobId,
	name,
	email,
	phone,
	coverLetter,
}: SeeApplicationProps) => {
	const { setOpen, setCoverLetter } = useContextSelector(
		CoverLetterContext,
		(context) => ({
			setOpen: context.setOpen,
			setCoverLetter: context.setCoverLetter,
		}),
	);

	const user = {
		id,
		name,
		email,
		phone,
	};

	const jobApplication = {
		id: jobId,
		cover_letter: coverLetter,
	};

	const handleClick = () => {
		setOpen(true);

		setCoverLetter({
			user,
			jobApplication,
		});
	};

	return (
		<Button variant="secondary" onClick={handleClick}>
			Ver Candidatura
		</Button>
	);
};
