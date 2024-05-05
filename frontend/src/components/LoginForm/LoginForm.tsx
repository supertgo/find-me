import * as S from './LoginForm.styles';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Heading } from 'components/Heading/Heading';
import { Controller } from 'react-hook-form';
import { useSignInForm } from 'hooks/useSignInForm/useSignInForm';
import { LinkText } from 'components/LinkText/LinkText';

export type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
  const { control, isLoading, onSubmit, handleSubmit, isValid, errors } =
    useSignInForm();

  return (
    <S.Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Heading variant="h3" text="Entre com a sua conta" />
      <Controller
        rules={{
          required: 'Digite um e-mail válido.',
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
          required: 'A senha é obrigatória.',
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
      <LinkText text="Esqueci minha senha" href="auth/forgot-password" />
      <Button fullWidth type="submit" disabled={!isValid || isLoading}>
        Entrar
      </Button>
      <S.Text>
        Ainda não tem uma conta?{' '}
        <LinkText text="Faça o seu cadastro" href="auth/register" />
      </S.Text>
    </S.Form>
  );
};
