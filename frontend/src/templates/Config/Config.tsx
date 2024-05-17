'use client';
import { Base } from 'templates/Base/Base';
import { ConfigInfoWrapper } from 'components/ConfigInfoWrapper/ConfigInfoWrapper';
import { Input } from 'components/Input/Input';
import { Title } from 'components/Title/Title';
import { Controller } from 'react-hook-form';
import { Button } from 'components/Button/Button';
import { useUserConfigForm } from 'hooks/useUserConfigForm/useUserConfigForm';
import { UserProps } from 'protocols/external/user/user';
import { formatCellphone } from 'utils/formatCellphone';
import { validateInputUserEmail } from 'utils/email';
import { HomeIcon } from 'icons/HomeIcon/HomeIcon';
import { Step } from 'components/Step/Step';
import {
	INVALID_EMAIL,
	REQUIRED_CELLPHONE,
	REQUIRED_NEW_PASSWORD,
	REQUIRED_USER,
} from 'utils/errors';
import { StepWrapper } from 'components/StepWrapper/StepWrapper';

import * as S from './Config.styles';
import { Children, useState } from 'react';
import { PersonIcon } from '@radix-ui/react-icons';
import { theme } from 'styles/theme';
import { CompetenceItem } from 'components/CompetenceItem/CompetenceItem';
import { ResumeCard } from 'components/ResumeCard/ResumeCard';
import { AcademicRecordItem } from 'components/AcademicRecordItem/AcademicRecordItem';
import { ProfessionalExperienceItem } from 'components/ProfessionalExperienceItem/ProfessionalExperienceItem';
import { ModalAddCompetence } from 'components/ModalAddCompetence/ModalAddCompetence';
import { ModalAddAcademicRecord } from 'components/ModalAddAcademicRecord/ModalAddAcademicRecord';

export type ConfigProps = {} & UserProps;

export const Config = ({
	name,
	email,
	phone,
	password,
	competences,
	about_me,
	academic_records,
	professional_experiences,
}: ConfigProps) => {
	const [currentStep, setCurrentStep] = useState(1);
	const { control, errors, isValid, onSubmit, isLoading, handleSubmit } =
		useUserConfigForm();
	const maxStep = 2;

	console.log(competences);

	return (
		<Base>
			<Title title="Configurações" />
			<StepWrapper>
				<Step
					icon={
						<PersonIcon
							width={24}
							height={24}
							color={theme.colors.officialGrey}
						/>
					}
					title="Informações da conta"
					itemStep={1}
					currentStep={currentStep}
					maxStep={maxStep}
					onClick={() => setCurrentStep(1)}
				/>
				<Step
					icon={<HomeIcon />}
					title="Descrição do emprego"
					itemStep={2}
					currentStep={currentStep}
					maxStep={maxStep}
					onClick={() => setCurrentStep(2)}
				/>
			</StepWrapper>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<ConfigInfoWrapper
					title="Foto de Perfil"
					description="Essa imagem será exibida publicamente como sua foto de perfil, e ajudará os recrutadores a reconhecê-lo!"
				>
					<S.AvatarCircle />
				</ConfigInfoWrapper>
				<ConfigInfoWrapper title="Detalhes Pessoais">
					<S.PersonalDetails>
						<Controller
							rules={{
								required: REQUIRED_USER,
							}}
							control={control}
							name="name"
							defaultValue={name}
							render={({ field: { ...field } }) => (
								<Input
									{...field}
									error={errors.name}
									label="Nome completo*"
									placeholder="Digite o seu nome completo"
								/>
							)}
						/>
						<S.PersonalDetailsGrid>
							<Controller
								rules={{
									required: REQUIRED_CELLPHONE,
								}}
								control={control}
								name="phone"
								defaultValue={formatCellphone(phone)}
								render={({ field: { ...field } }) => (
									<Input
										{...field}
										onChange={({ target: { value } }) =>
											field.onChange(formatCellphone(value))
										}
										label="Celular*"
										placeholder="Digite o seu celular"
										error={errors.phone}
									/>
								)}
							/>
							<Controller
								rules={{
									required: INVALID_EMAIL,
									validate: validateInputUserEmail,
								}}
								control={control}
								name="email"
								defaultValue={email}
								render={({ field: { ...field } }) => (
									<Input
										{...field}
										label="E-mail*"
										placeholder="Digite o seu e-mail"
										error={errors.email}
										type="email"
									/>
								)}
							/>
						</S.PersonalDetailsGrid>
					</S.PersonalDetails>
				</ConfigInfoWrapper>
				<ConfigInfoWrapper title="Nova senha">
					<S.ConfigEmailWrapper>
						<Controller
							rules={{
								required: REQUIRED_NEW_PASSWORD,
							}}
							control={control}
							name="password"
							defaultValue={password}
							render={({ field: { ...field } }) => (
								<Input
									{...field}
									type="password"
									label="Nova Senha"
									placeholder="Digite a sua nova senha"
									error={errors.password}
								/>
							)}
						/>
					</S.ConfigEmailWrapper>
				</ConfigInfoWrapper>
				<S.ButtonRow>
					<Button type="submit" disabled={!isValid || isLoading}>
						Salvar Perfil
					</Button>
				</S.ButtonRow>
			</S.Form>
			<>
				<Title title="Informaçãoes" />
				<ResumeCard text="Experiência" modalTitle="Adicionar Competência">
					{Children.toArray(
						professional_experiences?.map((professional_xp) => (
							<ProfessionalExperienceItem {...professional_xp} />
						)),
					)}
				</ResumeCard>
				<ResumeCard
					text="Formação Acadêmica"
					modalTitle="Adicionar Competência"
					addModal={<ModalAddAcademicRecord />}
				>
					{Children.toArray(
						academic_records?.map((academic_record) => (
							<AcademicRecordItem {...academic_record} />
						)),
					)}
				</ResumeCard>
				<ResumeCard
					text="Competências"
					modalTitle="Adicionar Competência"
					addModal={<ModalAddCompetence />}
				>
					{Children.toArray(
						competences?.map(({ name }) => <CompetenceItem name={name} />),
					)}
				</ResumeCard>
			</>
		</Base>
	);
};
