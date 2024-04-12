import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Heading } from 'components/Heading/Heading';
import { Controller } from 'react-hook-form';
import * as S from './RegisterForm.styles';
import { useRegisterForm } from 'hooks/useRegisterForm/useRegisterForm';
import { LinkText } from 'components/LinkText/LinkText';
import { Checkbox } from 'components/Checkbox/Checkbox';

export type RegisterFormProps = {};

export const RegisterForm = ({}: RegisterFormProps) => {
  const { control, isValid, errors, isLoading, onSubmit, handleSubmit } =
    useRegisterForm();

  return (
    <S.Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Heading variant="h3" text="Crie a sua conta" />
      <Controller
        rules={{
          required: 'Digite um usuário válido',
        }}
        control={control}
        name="name"
        render={({ field: { ...field } }) => (
          <Input {...field} placeholder="Username" error={errors.name} />
        )}
      />
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
          required: 'Digite um número de celular válido.',
        }}
        control={control}
        name="phone"
        render={({ field: { ...field } }) => (
          <Input {...field} placeholder="Celular" error={errors.phone} />
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
      <Controller
        control={control}
        name="type"
        render={({ field: { ...field } }) => (
          <Checkbox label="Sou recrutador" {...field} />
        )}
      />
      <Button fullWidth type="submit" disabled={!isValid || isLoading}>
        Cadastrar
      </Button>
      <S.Text>
        Já tem uma conta?{' '}
        <LinkText href="/" text="Faça login" />
      </S.Text>
    </S.Form>
  );
};
