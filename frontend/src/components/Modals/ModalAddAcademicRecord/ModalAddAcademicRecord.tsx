import { PlusIcon } from '@radix-ui/react-icons';
import { Input } from 'components/Input';
import { BaseModal } from 'components/Modals/BaseModal';
import { Textarea } from 'components/Textarea';
import { Controller } from 'react-hook-form';
import {
	REQUIRED_ACADEMIC_RECORD_DEGREE,
	REQUIRED_ACADEMIC_RECORD_DESCRIPTION,
	REQUIRED_ACADEMIC_RECORD_END_DATE,
	REQUIRED_ACADEMIC_RECORD_FIELD_STUDY,
	REQUIRED_ACADEMIC_RECORD_INSTITUTION,
	REQUIRED_ACADEMIC_RECORD_START_DATE,
} from 'utils/errors';
import { useModalAddAcademicRecord } from '.';
import * as S from './ModalAddAcademicRecord.styles';
import { MaxLength } from 'utils/maxLengths';

export type ModalAddAcademicRecordProps = {
	user_id: number;
};

export const ModalAddAcademicRecord = ({
	user_id,
}: ModalAddAcademicRecordProps) => {
	const {
		isValid,
		isLoading,
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
			trigger={
				<i title="Adicionar Formação Acadêmica">
					<PlusIcon aria-label="adicionar formação acadêmica" />
				</i>
			}
			open={open}
			setOpen={setOpen}
			title="Adicionar Formação Acadêmica"
			confirmButtonText="Salvar"
			isConfirmButtonDisabled={!isValid}
			isConfirmButtonLoading={isLoading}
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
							label="Instituição"
							placeholder="Ex: UFMG"
							error={errors.institution}
							maxLength={MaxLength.title}
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
							label="Diploma"
							placeholder="Ex: Bacharelado"
							error={errors.degree}
							maxLength={MaxLength.title}
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
							label="Área de estudo"
							placeholder="Ex: Ciência da Computação"
							error={errors.field_of_study}
							maxLength={MaxLength.title}
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
						<Input
							{...field}
							label="Data de início"
							type="date"
							error={errors.start_date}
						/>
					)}
				/>
				<Controller
					rules={{
						required: REQUIRED_ACADEMIC_RECORD_END_DATE,
					}}
					control={control}
					name="end_date"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							label="Data de término"
							type="date"
							error={errors.end_date}
						/>
					)}
				/>
				<Controller
					rules={{
						required: REQUIRED_ACADEMIC_RECORD_DESCRIPTION,
					}}
					control={control}
					name="description"
					render={({ field: { ...field } }) => (
						<Textarea {...field} label="Descrição" error={errors.description} />
					)}
				/>
			</S.Wrapper>
		</BaseModal>
	);
};
