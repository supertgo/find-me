'use client';
import { Base } from 'components/Base/Base';
import { ConfigInfoWrapper } from 'components/ConfigInfoWrapper/ConfigInfoWrapper';
import { Input } from 'components/Input/Input';
import { Title } from 'components/Title/Title';
import { Controller } from 'react-hook-form';
import { Button } from 'components/Button/Button';
import { useUserConfigForm } from 'hooks/useUserConfigForm/useUserConfigForm';

import * as S from './Config.styles';

export type ConfigProps = {};

export const Config = ({}: ConfigProps) => {
  const { control, errors, isValid, onSubmit, isLoading, handleSubmit } =
    useUserConfigForm();

  return (
    <Base>
      <Title title="Configurações" />
      <S.Wrapper>
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
                required: 'Digite um usuário válido',
              }}
              control={control}
              name="name"
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
                  required: 'Digite um celular válido',
                }}
                control={control}
                name="phone"
                render={({ field: { ...field } }) => (
                  <Input
                    {...field}
                    label="Celular*"
                    placeholder="Digite o seu celular"
                    error={errors.phone}
                  />
                )}
              />
              <Controller
                rules={{
                  required: 'Digite um email válido',
                }}
                control={control}
                name="email"
                render={({ field: { ...field } }) => (
                  <Input
                    {...field}
                    label="E-mail*"
                    placeholder="Digite o seu e-mail"
                    error={errors.email}
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
                required: 'Você deve digitar a sua senha antiga',
              }}
              control={control}
              name="old_password"
              render={({ field: { ...field } }) => (
                <Input
                  {...field}
                  type="password"
                  label="Senha Antiga"
                  placeholder="Digite a sua senha antiga"
                  error={errors.old_password}
                />
              )}
            />
            <Controller
              rules={{
                required: 'Você deve digitar a sua nova senha',
              }}
              control={control}
              name="new_password"
              render={({ field: { ...field } }) => (
                <Input
                  {...field}
                  type="password"
                  label="Nova Senha"
                  placeholder="Digite a sua nova senha"
                  error={errors.new_password}
                />
              )}
            />
          </S.ConfigEmailWrapper>
        </ConfigInfoWrapper>
        <S.ButtonRow>
          <Button disabled={!isValid}>Salvar Perfil</Button>
        </S.ButtonRow>
      </S.Wrapper>
    </Base>
  );
};
