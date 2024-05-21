import { BaseModal } from 'components/Modals/BaseModal/BaseModal';
import { useModalRemoveProfessionalExperience } from 'hooks/useModalRemoveProfessionalExperience/useModalRemoveProfessionalExperience';

export type ModalRemoveProfessionalExperienceProps = {};

export const ModalRemoveProfessionalExperience =
	({}: ModalRemoveProfessionalExperienceProps) => {
		const { open, setOpen, handleSubmit, professionalExperience } =
			useModalRemoveProfessionalExperience();

		return (
			<BaseModal
				title="Tem certeza que deseja excluir essa experiência?"
				open={open}
				setOpen={setOpen}
				confirmButtonText="Excluir"
				confirmHandler={handleSubmit}
				cancelButtonText="Cancelar"
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
