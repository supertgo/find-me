'use client';
import { Avatar } from 'components/Avatar';
import { Button } from 'components/Button';
import { ConfigInfoWrapper } from 'components/ConfigInfoWrapper';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';
import { Title } from 'components/Title';
import { UserProps } from 'protocols/external/user/user';
import { Controller } from 'react-hook-form';
import { validateInputUserEmail } from 'utils/email';
import {
	INVALID_EMAIL,
	REQUIRED_ABOUT_ME,
	REQUIRED_CELLPHONE,
	REQUIRED_NEW_PASSWORD,
	REQUIRED_USER,
} from 'utils/errors';
import { formatCellphone } from 'utils/formatCellphone';
import { MaxLength } from 'utils/maxLengths';
import * as S from './AccountConfig.styles';
import { useUserConfigForm } from './useUserConfigForm';

export type AccountConfigProps = {} & Pick<
	UserProps,
	'name' | 'email' | 'phone' | 'about_me'
>;

export const AccountConfig = ({
	name,
	email,
	phone,
	about_me,
}: AccountConfigProps) => {
	const { control, errors, isValid, onSubmit, isLoading, handleSubmit } =
		useUserConfigForm();

	return (
		<>
			<Title title="Configurações" />
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<ConfigInfoWrapper
					title="Foto de Perfil"
					description="Essa imagem será exibida publicamente como sua foto de perfil, e ajudará os recrutadores a reconhecê-lo!"
				>
					<Avatar user={name} showUsername={false} size="large" />
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
									maxLength={MaxLength.name}
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
										maxLength={MaxLength.email}
									/>
								)}
							/>
						</S.PersonalDetailsGrid>
					</S.PersonalDetails>
				</ConfigInfoWrapper>
				<ConfigInfoWrapper title="Senha">
					<S.ConfigEmailWrapper>
						<Controller
							rules={{
								required: REQUIRED_NEW_PASSWORD,
							}}
							control={control}
							name="password"
							render={({ field: { ...field } }) => (
								<Input
									{...field}
									type="password"
									label="Senha*"
									placeholder="Digite a sua nova senha"
									error={errors.password}
									maxLength={MaxLength.password}
								/>
							)}
						/>
					</S.ConfigEmailWrapper>
				</ConfigInfoWrapper>
				<ConfigInfoWrapper title="Sobre" hasBorder={false}>
					<S.ConfigEmailWrapper>
						<Controller
							rules={{
								required: REQUIRED_ABOUT_ME,
							}}
							control={control}
							defaultValue={about_me || ''}
							name="about_me"
							render={({ field: { ...field } }) => (
								<Textarea
									{...field}
									label="Sobre mim*"
									placeholder="Descreva um pouco sobre você"
									error={errors.about_me}
								/>
							)}
						/>
					</S.ConfigEmailWrapper>
				</ConfigInfoWrapper>
				<S.ButtonRow>
					<Button
						type="submit"
						disabled={!isValid || isLoading}
						isLoading={isLoading}
					>
						Salvar Perfil
					</Button>
				</S.ButtonRow>
			</S.Form>
		</>
	);
};
