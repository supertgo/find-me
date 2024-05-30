import { PlusIcon } from '@radix-ui/react-icons';
import { Input } from 'components/Input';
import { BaseModal } from 'components/Modals/BaseModal';
import { useModalAddCompetence } from 'hooks/useModalAddCompetence/useModalAddCompetence';
import { Controller } from 'react-hook-form';
import { REQUIRED_COMPETENCE } from 'utils/errors';
import * as S from './ModalAddCompetence.styles';

export type ModalAddCompetenceProps = {
	user_id: number;
};

export const ModalAddCompetence = ({ user_id }: ModalAddCompetenceProps) => {
	const {
		open,
		isLoading,
		setOpen,
		isValid,
		errors,
		handleSubmit,
		onSubmit,
		control,
	} = useModalAddCompetence({
		user_id,
	});

	return (
		<BaseModal
			trigger={
				<i title="Adicionar Competência">
					<PlusIcon aria-label="Adicionar Competência" />
				</i>
			}
			open={open}
			setOpen={setOpen}
			title="Adicionar Competência"
			confirmButtonText="Salvar"
			isConfirmButtonDisabled={!isValid}
			isConfirmButtonLoading={isLoading}
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
