import { useModalAddAcademicRecord } from 'hooks/useModalAddAcademicRecord/useModalAddAcademicRecord';
import { BaseModal } from 'components/Modals/BaseModal/BaseModal';
import { PlusIcon } from '@radix-ui/react-icons';
import { Controller } from 'react-hook-form';
import {
	REQUIRED_ACADEMIC_RECORD_DEGREE,
	REQUIRED_ACADEMIC_RECORD_DESCRIPTION,
	REQUIRED_ACADEMIC_RECORD_END_DATE,
	REQUIRED_ACADEMIC_RECORD_FIELD_STUDY,
	REQUIRED_ACADEMIC_RECORD_INSTITUTION,
	REQUIRED_ACADEMIC_RECORD_START_DATE,
} from 'utils/errors';
import { Input } from 'components/Input/Input';
import { Textarea } from 'components/Textarea/Textarea';
import * as S from './ModalAddAcademicRecord.styles';

export type ModalAddAcademicRecordProps = {
	user_id: number;
};

export const ModalAddAcademicRecord = ({
	user_id,
}: ModalAddAcademicRecordProps) => {
	const {
		isValid,
		errors,
		open,
		setOpen,
		handleSubmit,
		onSubmit,
		control,
	} = useModalAddAcademicRecord({
		user_id,
	});

	return (
		<BaseModal
			trigger={<PlusIcon aria-label="adicionar formação acadêmica" />}
			open={open}
			setOpen={setOpen}
			title="Adicionar Formação Acadêmica"
			confirmButtonText="Salvar"
			isConfirmButtonDisabled={!isValid}
			confirmHandler={handleSubmit(onSubmit)}
		>
			<S.Wrapper>
				<Controller
					rules={{
						required: REQUIRED_ACADEMIC_RECORD_INSTITUTION,
					}}
					control={control}
					name="institution"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							placeholder="Ex: UFMG"
							error={errors.institution}
						/>
					)}
				/>
				<Controller
					rules={{
						required: REQUIRED_ACADEMIC_RECORD_DEGREE,
					}}
					control={control}
					name="degree"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							placeholder="Ex: Bacharelado"
							error={errors.degree}
						/>
					)}
				/>
				<Controller
					rules={{
						required: REQUIRED_ACADEMIC_RECORD_FIELD_STUDY,
					}}
					control={control}
					name="field_of_study"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							placeholder="Ex: Ciência da Computação"
							error={errors.field_of_study}
						/>
					)}
				/>
				<Controller
					rules={{
						required: REQUIRED_ACADEMIC_RECORD_START_DATE,
					}}
					control={control}
					name="start_date"
					render={({ field: { ...field } }) => (
						<Input {...field} type="date" error={errors.start_date} />
					)}
				/>
				<Controller
					rules={{
						required: REQUIRED_ACADEMIC_RECORD_END_DATE,
					}}
					control={control}
					name="end_date"
					render={({ field: { ...field } }) => (
						<Input {...field} type="date" error={errors.end_date} />
					)}
				/>
				<Controller
					rules={{
						required: REQUIRED_ACADEMIC_RECORD_DESCRIPTION,
					}}
					control={control}
					name="description"
					render={({ field: { ...field } }) => <Textarea {...field} />}
				/>
			</S.Wrapper>
		</BaseModal>
	);
};
