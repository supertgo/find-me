import { Button } from 'components/Button';
import { CoverLetterContext, useCoverLetter } from 'hooks/contexts/CoverLetter';
import { JobStatus } from 'protocols/external/job/job-application';
import { useContextSelector } from 'use-context-selector';

export type SeeApplicationProps = {
	id: number;
	jobId: number;
	name: string;
	email: string;
	phone: string;
	coverLetter: string;
  status: JobStatus
};

export const SeeApplication = ({
	id,
	jobId,
	name,
  status,
	email,
	phone,
	coverLetter,
}: SeeApplicationProps) => {
	const { setOpen, setCoverLetter } = useCoverLetter()

	const user = {
		id,
		name,
		email,
		phone,
	};

	const jobApplication = {
		id: jobId,
		cover_letter: coverLetter,
    status,
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
