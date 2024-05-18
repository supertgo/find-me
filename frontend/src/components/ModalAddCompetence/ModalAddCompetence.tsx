import { Controller } from 'react-hook-form';
import { Input } from 'components/Input/Input';
import { useModalAddCompetence } from 'hooks/useModalAddCompetence/useModalAddCompetence';
import { REQUIRED_COMPETENCE } from 'utils/errors';
import { PlusIcon } from '@radix-ui/react-icons';
import { BaseModal } from 'components/BaseModal/BaseModal';
import * as S from './ModalAddCompetence.styles';

export type ModalAddCompetenceProps = {
	user_id: number;
};

export const ModalAddCompetence = ({ user_id }: ModalAddCompetenceProps) => {
	const { open, setOpen, isValid, errors, handleSubmit, onSubmit, control } =
		useModalAddCompetence({
			user_id,
		});

	return (
		<BaseModal
			trigger={<PlusIcon aria-label="Adicionar Competencia" />}
			open={open}
			setOpen={setOpen}
			title="Adicionar Competência"
			confirmButtonText="Salvar"
			isConfirmButtonDisabled={!isValid}
			confirmHandler={handleSubmit(onSubmit)}
		>
			<S.Wrapper>
				<Controller
					rules={{
						required: REQUIRED_COMPETENCE,
					}}
					control={control}
					name="competence"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							placeholder="Competência (ex: Laravel)"
							error={errors.competence}
						/>
					)}
				/>
			</S.Wrapper>
		</BaseModal>
	);
};
