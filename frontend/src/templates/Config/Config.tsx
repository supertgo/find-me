'use client';
import { Base } from 'templates/Base/Base';
import { ConfigInfoWrapper } from 'components/ConfigInfoWrapper/ConfigInfoWrapper';
import { Input } from 'components/Input/Input';
import { Title } from 'components/Title/Title';
import { Controller } from 'react-hook-form';
import { Button } from 'components/Button/Button';
import { useUserConfigForm } from 'hooks/useUserConfigForm/useUserConfigForm';

import * as S from './Config.styles';
import { UserProps } from 'protocols/external/user/user';
import { formatCellphone, revertFormatCellphone } from 'utils/formatCellphone';
import { validateInputUserEmail } from 'utils/email';
import {
	INVALID_EMAIL,
	REQUIRED_CELLPHONE,
	REQUIRED_NEW_PASSWORD,
	REQUIRED_USER,
} from 'utils/errors';

export type ConfigProps = {} & UserProps;

export const Config = ({ name, email, phone, password }: ConfigProps) => {
	const { control, errors, isValid, onSubmit, isLoading, handleSubmit } =
		useUserConfigForm();

	return (
		<Base>
			<Title title="Configurações" />
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
					<Button
						type="submit"
						disabled={!isValid || isLoading}
						isLoading={isLoading}
					>
						Salvar Perfil
					</Button>
				</S.ButtonRow>
			</S.Form>
		</Base>
	);
};
