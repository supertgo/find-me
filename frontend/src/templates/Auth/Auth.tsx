'use client';
import * as S from './Auth.styles';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Heading } from 'components/Heading/Heading';
import { UseSignInForm } from 'hooks/UseSignInForm';
import { Controller } from 'react-hook-form';

type AuthProps = {};

export const Auth = ({}: AuthProps) => {
  const { control, isLoading, onSubmit, handleSubmit, isValid } =
    UseSignInForm();

  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.LeftSideContent>
          <S.LogoText>FindMe</S.LogoText>
          {/* <Image src="logo.svg" width="400" height="400" alt="Logo" /> */}
          <S.Description>
            <S.Copy>Está duro? Chame o Findme para te ajudar!</S.Copy>
            <S.BottomText>
              A melhor plataforma para você encontrar seu novo trampo
            </S.BottomText>
          </S.Description>
        </S.LeftSideContent>
      </S.LeftSide>
      <S.RightSide>
        <S.Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Heading variant="h3" text="Entre com a sua conta" />
          <Controller
            rules={{
              required: 'Digite um e-mail válido.',
            }}
            control={control}
            name="email"
            render={({ field: { ...field } }) => (
              <Input {...field} placeholder="E-mail" />
            )}
          />
          <Controller
            rules={{
              required: 'A senha é obrigatória.',
            }}
            control={control}
            name="password"
            render={({ field: { ...field } }) => (
              <Input {...field} type="password" placeholder="Senha" />
            )}
          />
          <S.ForgotPasswordLink href="auth/forgot-password">
            Esqueci minha senha
          </S.ForgotPasswordLink>
          <Button fullWidth type="submit" disabled={!isValid || isLoading}>
            Entrar
          </Button>
          <S.Text>
            Ainda não tem uma conta?{' '}
            <S.ForgotPasswordLink href="auth/register">
              Faça o seu cadastro
            </S.ForgotPasswordLink>
          </S.Text>
        </S.Form>
      </S.RightSide>
    </S.Wrapper>
  );
};
