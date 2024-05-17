import { Controller } from 'react-hook-form';
import { Input } from 'components/Input/Input';
import * as S from './ModalAddCompetence.styles';
import { useModalAddCompetence } from 'hooks/useModalAddCompetence/useModalAddCompetence';
import { REQUIRED_COMPETENCE } from 'utils/errors';
import { PlusIcon } from '@radix-ui/react-icons';
import { BaseModal } from 'components/BaseModal/BaseModal';
import { useState } from 'react';

export type ModalAddCompetenceProps = {};

export const ModalAddCompetence = ({}: ModalAddCompetenceProps) => {
	const [open, setOpen] = useState(false);
	const { isValid, errors, handleSubmit, onSubmit, control } =
		useModalAddCompetence();

	return (
		<BaseModal
			trigger={<PlusIcon aria-label="adicionar-competencia" />}
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
