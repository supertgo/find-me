import { BaseModal } from 'components/Modals/BaseModal';
import { useModalRemoveProfessionalExperience } from '.';

export type ModalRemoveProfessionalExperienceProps = {};

export const ModalRemoveProfessionalExperience =
	({}: ModalRemoveProfessionalExperienceProps) => {
		const { open, loading, setOpen, handleSubmit, professionalExperience } =
			useModalRemoveProfessionalExperience();

		return (
			<BaseModal
				title="Tem certeza que deseja excluir essa experiência?"
				open={open}
				setOpen={setOpen}
				confirmButtonText="Excluir"
				confirmHandler={handleSubmit}
				cancelButtonText="Cancelar"
        isConfirmButtonLoading={loading}
			>
				{!!professionalExperience && (
					<p>
						Tem certeza que deseja remover a experiência{' '}
						<b>{professionalExperience.name}</b> do seu currículo?
					</p>
				)}
			</BaseModal>
		);
	};
