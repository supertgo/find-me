import { PlusIcon } from '@radix-ui/react-icons';
import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { BaseModal } from 'components/Modals/BaseModal';
import { Select } from 'components/Select';
import { Textarea } from 'components/Textarea';
import {
	employmentTypeOptions,
	workModelOptions,
} from 'protocols/external/job/job';
import { Controller } from 'react-hook-form';
import {
	REQUIRED_JOB_EMPLOYMENT_TYPE,
	REQUIRED_JOB_WORK_MODEL,
	REQUIRED_PROFESSIONAL_EXPERIENCE_COMPANY,
	REQUIRED_PROFESSIONAL_EXPERIENCE_DESCRIPTION,
	REQUIRED_PROFESSIONAL_EXPERIENCE_LOCATION,
	REQUIRED_PROFESSIONAL_EXPERIENCE_POSITION,
	REQUIRED_PROFESSIONAL_EXPERIENCE_START_DATE,
} from 'utils/errors';
import { translateEmploymentType, translateWorkModel } from 'utils/job';
import { useModalAddProfessionalExperience } from '.';
import * as S from './ModalAddProfessionalExperience.styles';
import { MaxLength } from 'utils/maxLengths';

export type ModalAddProfessionalExperienceProps = {
	user_id: number;
};

export const ModalAddProfessionalExperience = ({
	user_id,
}: ModalAddProfessionalExperienceProps) => {
	const {
		isValid,
		isLoading,
		errors,
		watch,
		open,
		setOpen,
		handleSubmit,
		onSubmit,
		control,
		register,
	} = useModalAddProfessionalExperience({
		user_id,
	});

	const isCurrentValue = watch('is_current');

	return (
		<BaseModal
			trigger={
				<i title="Adicionar Experiência">
					<PlusIcon aria-label="adicionar experiência" />
				</i>
			}
			open={open}
			setOpen={setOpen}
			title="Adicionar Experiência"
			confirmButtonText="Salvar"
			isConfirmButtonDisabled={!isValid}
			isConfirmButtonLoading={isLoading}
			confirmHandler={handleSubmit(onSubmit)}
		>
			<S.Wrapper>
				<Controller
					rules={{
						required: REQUIRED_PROFESSIONAL_EXPERIENCE_COMPANY,
					}}
					control={control}
					name="company_name"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							label="Nome da empresa"
							placeholder="Ex: FindMe"
							error={errors.company_name}
							maxLength={MaxLength.title}
						/>
					)}
				/>

				<Controller
					rules={{
						required: REQUIRED_PROFESSIONAL_EXPERIENCE_POSITION,
					}}
					control={control}
					name="position"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							label="Cargo"
							placeholder="Ex: Desenvolvedor de Software"
							error={errors.position}
							maxLength={MaxLength.title}
						/>
					)}
				/>

				<Controller
					rules={{
						required: REQUIRED_PROFESSIONAL_EXPERIENCE_LOCATION,
					}}
					control={control}
					name="location"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							label="Localidade"
							placeholder="Ex: Dubai"
							error={errors.location}
							maxLength={MaxLength.location}
						/>
					)}
				/>

				<S.SelectWrapper>
					<Select
						label="Modelo de trabalho"
						data-cy="work_model"
						options={workModelOptions.map((type) => ({
							value: type,
							label: translateWorkModel[type],
						}))}
						defaultValue=""
						register={register}
						requiredMessage={REQUIRED_JOB_WORK_MODEL}
						placeholder="Modelo de trabalho"
						name="work_model"
					/>

					<Select
						label="Tipo de Contratação"
						data-cy="employment_type"
						options={employmentTypeOptions.map((type) => ({
							value: type,
							label: translateEmploymentType[type],
						}))}
						defaultValue=""
						register={register}
						requiredMessage={REQUIRED_JOB_EMPLOYMENT_TYPE}
						placeholder="Tipo de Contratação"
						name="employment_type"
					/>
				</S.SelectWrapper>

				<Controller
					rules={{
						required: REQUIRED_PROFESSIONAL_EXPERIENCE_START_DATE,
					}}
					control={control}
					name="start_date"
					render={({ field: { ...field } }) => (
						<Input
							{...field}
							label="Início"
							type="date"
							error={errors.start_date}
						/>
					)}
				/>

				<Controller
					control={control}
					name="is_current"
					render={({ field: { ...field } }) => (
						<Checkbox {...field} label="Trabalho atualmente neste cargo" />
					)}
				/>

				{!isCurrentValue && (
					<Controller
						control={control}
						name="end_date"
						render={({ field: { ...field } }) => (
							<Input
								{...field}
								label="Término"
								type="date"
								error={errors.end_date}
							/>
						)}
					/>
				)}

				<Controller
					rules={{
						required: REQUIRED_PROFESSIONAL_EXPERIENCE_DESCRIPTION,
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
