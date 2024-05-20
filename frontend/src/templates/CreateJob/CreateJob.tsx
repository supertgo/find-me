import { BackpackIcon, ReaderIcon } from '@radix-ui/react-icons';
import { AddSkills } from 'components/AddSkills/AddSkills';
import { Button } from 'components/Button/Button';
import { ConfigInfoWrapper } from 'components/ConfigInfoWrapper/ConfigInfoWrapper';
import { Input } from 'components/Input/Input';
import { Step } from 'components/Step/Step';
import { StepWrapper } from 'components/StepWrapper/StepWrapper.styles';
import { Textarea } from 'components/Textarea/Textarea';
import { Title } from 'components/Title/Title';
import { VerticalRow } from 'components/VerticalRow/VerticalRow';
import { useCreateJob } from 'hooks/useCreateJob/useCreateJob';
import {
  employmentTypeOptions,
  salaryTimeUnitOptions,
  workModelOptions,
} from 'protocols/external/job/job';
import { Controller } from 'react-hook-form';
import { theme } from 'styles/theme';
import { Base } from 'templates/Base/Base';
import {
  REQUIRED_JOB_ACCEPT_APPLICATION,
  REQUIRED_JOB_APPLICATIONS_AMOUNT,
  REQUIRED_JOB_DESCRIPTION,
  REQUIRED_JOB_EMPLOYMENT_TYPE,
  REQUIRED_JOB_NAME,
  REQUIRED_JOB_SALARY,
  REQUIRED_JOB_SALARY_TIME_UNIT,
  REQUIRED_JOB_WORK_MODEL,
} from 'utils/errors';
import {
  translateEmploymentType,
  translateSalaryTimeUnit,
  translateWorkModel,
} from 'utils/job';
import * as S from './CreateJob.styles';

export type CreateJobProps = {};

export const CreateJob = ({}: CreateJobProps) => {
	const {
		onSubmit,
		control,
		handleSubmit,
		errors,
		isValid,
		isLoading,
		currentStep,
		setCurrentStep,
		maxStep,
		register,
		setValue,
	} = useCreateJob();

	return (
		<Base>
			<S.Wrapper>
				<Title title="Anuncie uma vaga" />
				<StepWrapper>
					<Step
						icon={
							<BackpackIcon width={24} height={24} color={theme.colors.white} />
						}
						title="Informações do emprego"
						itemStep={1}
						currentStep={currentStep}
						maxStep={maxStep}
						onClick={() => setCurrentStep(1)}
					/>
					<VerticalRow />
					<Step
						icon={
							<ReaderIcon width={24} height={24} color={theme.colors.white} />
						}
						title="Descrição do emprego"
						itemStep={2}
						currentStep={currentStep}
						maxStep={maxStep}
						onClick={() => setCurrentStep(2)}
					/>
				</StepWrapper>
			</S.Wrapper>

			<S.Form onSubmit={handleSubmit(onSubmit)}>
				{currentStep === 1 && (
					<>
						<ConfigInfoWrapper
							title="Título do Emprego"
							description="Os títulos de emprego devem descrever uma posição"
						>
							<Controller
								rules={{
									required: REQUIRED_JOB_NAME,
								}}
								control={control}
								name="name"
								render={({ field: { ...field } }) => (
									<Input
										{...field}
										placeholder="e.g Engenheiro de Software"
										error={errors.name}
									/>
								)}
							/>
						</ConfigInfoWrapper>

						<ConfigInfoWrapper title="Tipo de Contratação">
							<S.ContractTypeWrapper>
								<select
									defaultValue=""
									{...register('employment_type', {
										required: REQUIRED_JOB_EMPLOYMENT_TYPE,
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
							</S.ContractTypeWrapper>
						</ConfigInfoWrapper>

						<ConfigInfoWrapper title="Modelo de Trabalho">
							<S.ContractTypeWrapper>
								<select
									defaultValue=""
									{...register('work_model', {
										required: REQUIRED_JOB_WORK_MODEL,
									})}
								>
									<option value="" disabled>
										Modelo de Trabalho
									</option>
									{workModelOptions.map((workModel) => (
										<option key={workModel} value={workModel}>
											{translateWorkModel[workModel]}
										</option>
									))}
								</select>
							</S.ContractTypeWrapper>
						</ConfigInfoWrapper>

						<ConfigInfoWrapper
							title="Salário"
							description="Por favor, especifique o salário."
						>
							{/* //TODO Ana / Eduardo -> Criar input que formata para moeda */}
							<Controller
								rules={{
									required: REQUIRED_JOB_SALARY,
								}}
								control={control}
								name="salary"
								render={({ field: { ...field } }) => (
									<Input {...field} type="number" error={errors.salary} />
								)}
							/>
						</ConfigInfoWrapper>

						<ConfigInfoWrapper title="Período de pagamento">
							<S.ContractTypeWrapper>
								<select
									defaultValue=""
									{...register('salary_time_unit', {
										required: REQUIRED_JOB_SALARY_TIME_UNIT,
									})}
								>
									<option value="" disabled>
										Selecione o período de pagamento
									</option>
									{salaryTimeUnitOptions.map((salaryTimeUnit) => (
										<option key={salaryTimeUnit} value={salaryTimeUnit}>
											{translateSalaryTimeUnit[salaryTimeUnit]}
										</option>
									))}
								</select>
							</S.ContractTypeWrapper>
						</ConfigInfoWrapper>

						<ConfigInfoWrapper title="Número máximo de candidatos">
							{/* //TODO Ana / Eduardo -> Permitir somente números nesse select*/}
							<Controller
								rules={{
									required: REQUIRED_JOB_APPLICATIONS_AMOUNT,
								}}
								control={control}
								name="applications_amount"
								render={({ field: { ...field } }) => (
									<Input
										{...field}
										type="number"
										min={1}
										error={errors.applications_amount}
									/>
								)}
							/>
						</ConfigInfoWrapper>

						<ConfigInfoWrapper
							title="Prazo para submissão de candidatos"
							description="Selecione uma data a partir de hoje e não mais que um ano."
						>
							{/* //TODO Ana / Eduardo -> Não permitir datas menor que o dia atual e não permitir ultrapassar 1 ano em relação a data atual */}
							<Controller
								rules={{
									required: REQUIRED_JOB_ACCEPT_APPLICATION,
								}}
								control={control}
								name="accept_application_until"
								render={({ field: { ...field } }) => (
									<Input
										{...field}
										type="date"
										error={errors.accept_application_until}
									/>
								)}
							/>
						</ConfigInfoWrapper>

						<ConfigInfoWrapper
							title="Competências"
							description="Adicione as competências necessárias para essa vaga"
						>
							<AddSkills setValue={setValue} />
						</ConfigInfoWrapper>

						<S.BottomRow>
							<Button
								type="button"
								onClick={() => setCurrentStep(currentStep + 1)}
							>
								Próximo Passo
							</Button>
						</S.BottomRow>
					</>
				)}

				{currentStep === 2 && (
					<>
						<ConfigInfoWrapper title="Descrição do emprego">
							<Controller
								rules={{
									required: REQUIRED_JOB_DESCRIPTION,
								}}
								control={control}
								name="description"
								render={({ field: { ...field } }) => (
									<Textarea
										{...field}
										maxLength={2000}
										// error={errors.description}
										placeholder="Digite a descrição do emprego"
										style={{
											height: '50rem',
										}}
									/>
								)}
							/>
						</ConfigInfoWrapper>

						<S.BottomRow>
							<Button
								type="button"
								onClick={() => setCurrentStep(currentStep - 1)}
							>
								Voltar
							</Button>
							<Button
								type="submit"
								disabled={!isValid || isLoading}
								isLoading={isLoading}
							>
								Concluir
							</Button>
						</S.BottomRow>
					</>
				)}
			</S.Form>
		</Base>
	);
};
