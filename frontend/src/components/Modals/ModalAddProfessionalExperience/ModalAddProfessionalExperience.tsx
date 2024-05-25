import { PlusIcon } from '@radix-ui/react-icons';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { Input } from 'components/Input/Input';
import { BaseModal } from 'components/Modals/BaseModal/BaseModal';
import { Textarea } from 'components/Textarea/Textarea';
import { useModalAddProfessionalExperience } from 'hooks/useModalAddProfessionalExperience/useModalAddProfessionalExperience';
import {
	employmentTypeOptions,
	workModelOptions,
} from 'protocols/external/job/job';
import { Controller } from 'react-hook-form';
import {
	REQUIRED_PROFESSIONAL_EXPERIENCE_COMPANY,
	REQUIRED_PROFESSIONAL_EXPERIENCE_DESCRIPTION,
	REQUIRED_PROFESSIONAL_EXPERIENCE_LOCATION,
	REQUIRED_PROFESSIONAL_EXPERIENCE_POSITION,
	REQUIRED_PROFESSIONAL_EXPERIENCE_START_DATE,
} from 'utils/errors';
import { translateEmploymentType, translateWorkModel } from 'utils/job';
import * as S from './ModalAddProfessionalExperience.styles';

export type ModalAddProfessionalExperienceProps = {
	user_id: number;
};

export const ModalAddProfessionalExperience = ({
	user_id,
}: ModalAddProfessionalExperienceProps) => {
	const {
		isValid,
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
							placeholder="Ex: FindMe"
							error={errors.company_name}
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
							placeholder="Ex: Desenvolvedor de Software"
							error={errors.position}
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
						<Input {...field} placeholder="Ex: Dubai" error={errors.location} />
					)}
				/>

				<select
          data-cy="work_model"
					defaultValue=""
					{...register('work_model', {
						required: true,
					})}
				>
					<option value="" disabled>
						Modelo de trabalho
					</option>
					{workModelOptions.map((model) => (
						<option key={model} value={model}>
							{translateWorkModel[model]}
						</option>
					))}
				</select>

				<select
          data-cy="employment_type"
					defaultValue=""
					{...register('employment_type', {
						required: true,
					})}
				>
					<option value="" disabled>
						Tipo de Contratação
					</option>
					{employmentTypeOptions.map((employmentType) => (
						<option key={employmentType} value={employmentType}>
							{translateEmploymentType[employmentType]}
						</option>
					))}
				</select>

				<Controller
					rules={{
						required: REQUIRED_PROFESSIONAL_EXPERIENCE_START_DATE,
					}}
					control={control}
					name="start_date"
					render={({ field: { ...field } }) => (
						<Input {...field} type="date" error={errors.start_date} />
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
							<Input {...field} type="date" error={errors.end_date} />
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
						<Textarea {...field} error={errors.description} />
					)}
				/>
			</S.Wrapper>
		</BaseModal>
	);
};
