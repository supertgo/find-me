import { Button } from 'components/Button/Button';
import { UserType } from 'protocols/external/user/user';
import { ModalCoverLetter } from 'components/ModalCoverLetter/ModalCoverLetter';
import { useJobPageButton } from 'hooks/useJobPageButton/useJobPageButton';

type JobPageButtonJob = {
	id: number;
	is_available: boolean;
};

type JobPageButtonUser = {
	id: number;
	type: UserType;
};

export type JobPageButtonProps = {
	user: JobPageButtonUser;
	job: JobPageButtonJob;
};

export const JobPageButton = ({ user, job }: JobPageButtonProps) => {
	const { data, isLoading } = useJobPageButton({
		user,
		job,
	});

  if (user.type === 'recruiter') return <Button>Visualizar Candidatos</Button>;

  if (isLoading) return <Button isLoading={isLoading}></Button>;


	const disabled = !job.is_available || !!data?.data.length;

	return <ModalCoverLetter jobId={job.id} disabled={disabled || isLoading} />;
};
