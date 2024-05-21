import { BaseModal } from 'components/Modals/BaseModal/BaseModal';
import { useModalRemoveCompetence } from 'hooks/useModalRemoveCompetence/useModalRemoveCompetence';

export type ModalRemoveCompetenceProps = {};

export const ModalRemoveCompetence = ({}: ModalRemoveCompetenceProps) => {
	const { open, setOpen, handleSubmit, competence } =
		useModalRemoveCompetence();

	return (
		<BaseModal
			title="Tem certeza que deseja excluir essa competência?"
			open={open}
			setOpen={setOpen}
			confirmButtonText="Excluir"
			confirmHandler={handleSubmit}
			cancelButtonText="Cancelar"
		>
			{!!competence && (
				<p>
					Tem certeza que deseja remover a competência <b>{competence.name}</b>{' '}
					do seu currículo?
				</p>
			)}
		</BaseModal>
	);
};
