import { Button } from 'components/Button/Button';
import { BaseModal } from 'components/Modals/BaseModal/BaseModal';
import { Textarea } from 'components/Textarea/Textarea';
import { useModalCoverLetter } from 'hooks/useModalCoverLetter/useModalCoverLetter';
import { Controller } from 'react-hook-form';
import { REQUIRED_JOB_APP_COVER_LETTER } from 'utils/errors';
import * as S from './ModalCoverLetter.styles';

export type ModalCoverLetterProps = {
	disabled: boolean;
	jobId: number;
};

export const ModalCoverLetter = ({
	disabled,
	jobId,
}: ModalCoverLetterProps) => {
	const { open, setOpen, isValid, errors, handleSubmit, onSubmit, control } =
		useModalCoverLetter({
			job_id: jobId,
		});

	return (
		<BaseModal
			trigger={<Button disabled={disabled}>Aplicar</Button>}
			open={open}
			setOpen={setOpen}
			title="Deseja aplicar para essa vaga?"
			confirmButtonText="Aplicar"
			isConfirmButtonDisabled={!isValid}
			confirmHandler={handleSubmit(onSubmit)}
		>
			<S.Wrapper>
				<Controller
					rules={{
						required: REQUIRED_JOB_APP_COVER_LETTER,
					}}
					control={control}
					name="cover_letter"
					render={({ field: { ...field } }) => (
						<Textarea
							{...field}
							placeholder="Escreva uma carta de apresentação"
							// error={errors.cover_letter}
						/>
					)}
				/>
			</S.Wrapper>
		</BaseModal>
	);
};
