import { Base } from 'templates/Base/Base';
import * as S from './Opportunity.styles';
import { Step } from 'components/Step/Step';
import { HomeIcon } from 'icons/HomeIcon/HomeIcon';
import { Title } from 'components/Title/Title';
import { Button } from 'components/Button/Button';
import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';
import { ConfigInfoWrapper } from 'components/ConfigInfoWrapper/ConfigInfoWrapper';
import { Input } from 'components/Input/Input';
import { Controller } from 'react-hook-form';
import {
  Control,
  useForm,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { useState } from 'react';
import { Textarea } from 'components/Textarea/Textarea';

export type OpportunityProps = {};

export const Opportunity = ({}: OpportunityProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const maxStep = 2;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <Base>
      <S.Wrapper>
        <S.Header>
          <DropboxIcon />
          <Button>Anuncie uma vaga</Button>
        </S.Header>
        <Title title="Anuncie uma vaga" />
        <S.StepWrapper>
          <Step
            icon={<HomeIcon />}
            title="Informações do emprego"
            itemStep={1}
            currentStep={currentStep}
            maxStep={maxStep}
            onClick={() => setCurrentStep(1)}
          />
          <S.VerticalRow />
          <Step
            icon={<HomeIcon />}
            title="Descrição do emprego"
            itemStep={2}
            currentStep={currentStep}
            maxStep={maxStep}
            onClick={() => setCurrentStep(2)}
          />
        </S.StepWrapper>
        <S.Form>
          {currentStep === 1 && (
            <>
              <ConfigInfoWrapper
                title="Título do Emprego"
                description="Os títulos de emprego devem descrever uma posição"
              >
                <Controller
                  rules={{
                    required: 'Digite um título válido',
                  }}
                  control={control}
                  name="name"
                  render={({ field: { ...field } }) => (
                    <Input
                      {...field}
                      placeholder="e.g Engenheiro de Software"
                    />
                  )}
                />
              </ConfigInfoWrapper>
              <ConfigInfoWrapper
                title="Tipo de Contratação"
                description="Você pode selecionar múltiplos tipos de contratação"
              >
                <S.ContractTypeWrapper>
                  <Checkbox label="Tempo Integral" />
                  <Checkbox label="Meio Período" />
                  <Checkbox label="Remoto" />
                  <Checkbox label="Estágio" />
                  <Checkbox label="Contrato" />
                </S.ContractTypeWrapper>
              </ConfigInfoWrapper>
              <ConfigInfoWrapper
                title="Salário"
                description="Por favor, especifique a faixa salarial estimada para a função. *Você pode deixar isso em branco"
              >
                <Input type="range" />
              </ConfigInfoWrapper>
              <ConfigInfoWrapper title="Número máximo de candidatos">
                <Input type="number" min={1} />
              </ConfigInfoWrapper>
              <S.BottomRow>
                <Button onClick={() => setCurrentStep(2)}>Próximo Passo</Button>
              </S.BottomRow>
            </>
          )}
          {currentStep === 2 && (
            <>
              <ConfigInfoWrapper
                title="Descrição do emprego"
                description="Os títulos de emprego devem descrever uma posição"
              >
                <Controller
                  rules={{
                    required: 'Digite um título válido',
                  }}
                  control={control}
                  name="name"
                  render={({ field: { ...field } }) => (
                    <Textarea
                      {...field}
                      maxLength={500}
                      placeholder="Digite a descrição do emprego"
                    />
                  )}
                />
              </ConfigInfoWrapper>
              <ConfigInfoWrapper
                title="Responsabilidades"
                description="Descreva as principais responsabilidades da posição."
              >
                <Controller
                  rules={{
                    required: 'Digite um título válido',
                  }}
                  control={control}
                  name="name"
                  render={({ field: { ...field } }) => (
                    <Textarea
                      {...field}
                      placeholder="Digite as responsabilidades do emprego"
                    />
                  )}
                />
              </ConfigInfoWrapper>
              <ConfigInfoWrapper
                title="Qualificações"
                description="Adicione as qualificações preferenciais dos candidatos."
              >
                <Controller
                  rules={{
                    required: 'Digite um título válido',
                  }}
                  control={control}
                  name="name"
                  render={({ field: { ...field } }) => (
                    <Textarea
                      {...field}
                      placeholder="Digite as qualificações"
                    />
                  )}
                />
              </ConfigInfoWrapper>
              <ConfigInfoWrapper
                title="Preferências"
                description="Adicione habilidades e qualificações desejáveis para a função para incentivar uma variedade mais diversificada de candidatos a se candidatarem."
              >
                <Controller
                  rules={{
                    required: 'Digite um título válido',
                  }}
                  control={control}
                  name="name"
                  render={({ field: { ...field } }) => (
                    <Textarea
                      {...field}
                      placeholder="Digite suas preferências"
                    />
                  )}
                />
              </ConfigInfoWrapper>
              <S.BottomRow>
                <Button onClick={() => setCurrentStep(currentStep - 1)}>
                  Voltar
                </Button>
                <Button>Concluir</Button>
              </S.BottomRow>
            </>
          )}
        </S.Form>
      </S.Wrapper>
    </Base>
  );
};
