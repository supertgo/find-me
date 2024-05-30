import { BaseModal } from 'components/Modals/BaseModal';
import { useModalRemoveJob } from 'hooks/useModalRemoveJob/useModalRemoveJob';
import { Dispatch, SetStateAction } from 'react';

export type JobToBeRemoved = {
	id: number;
	name: string;
	companyName: string;
};

export type ModalRemoveJobProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	job: JobToBeRemoved;
};

export const ModalRemoveJob = ({ open, setOpen, job }: ModalRemoveJobProps) => {
	const { handleSubmit, loading } = useModalRemoveJob({
		setOpen,
		job,
	});

	return (
		<BaseModal
			title="Tem certeza que deseja excluir essa vaga?"
			open={open}
			setOpen={setOpen}
			confirmButtonText="Excluir"
			confirmHandler={handleSubmit}
			isConfirmButtonLoading={loading}
			cancelButtonText="Cancelar"
		>
			{!!job && (
				<p>
					Tem certeza que deseja remover a vaga <b>{job.name}</b> da empresa{' '}
					{job.companyName}?
				</p>
			)}
		</BaseModal>
	);
};
