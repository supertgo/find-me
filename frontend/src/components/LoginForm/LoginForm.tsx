import * as S from './LoginForm.styles';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Heading } from 'components/Heading/Heading';
import { Controller } from 'react-hook-form';
import { useSignInForm } from 'hooks/useSignInForm/useSignInForm';
import { LinkText } from 'components/LinkText/LinkText';
import { validateInputUserEmail } from 'utils/email';
import { INVALID_EMAIL, REQUIRED_PASSWORD } from 'utils/errors';
import { ForgotPasswordUrl, RegisterUrl } from 'utils/urls';

export type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
	const { control, isLoading, onSubmit, handleSubmit, isValid, errors } =
		useSignInForm();

	return (
		<S.Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
			<Heading variant="h3" text="Entre com a sua conta" />
			<Controller
				rules={{
					required: INVALID_EMAIL,
					validate: validateInputUserEmail,
				}}
				control={control}
				name="email"
				render={({ field: { ...field } }) => (
					<Input
						{...field}
						placeholder="E-mail"
						type="email"
						error={errors.email}
					/>
				)}
			/>
			<Controller
				rules={{
					required: REQUIRED_PASSWORD,
				}}
				control={control}
				name="password"
				render={({ field: { ...field } }) => (
					<Input
						{...field}
						type="password"
						placeholder="Senha"
						error={errors.password}
					/>
				)}
			/>
			<LinkText text="Esqueci minha senha" href={`/${ForgotPasswordUrl}`} />
			<Button
				fullWidth
				type="submit"
				disabled={!isValid || isLoading}
				isLoading={isLoading}
			>
				Entrar
			</Button>
			<S.Text>
				Ainda não tem uma conta?{' '}
				<LinkText text="Faça o seu cadastro" href={`/${RegisterUrl}`} />
			</S.Text>
		</S.Form>
	);
};
