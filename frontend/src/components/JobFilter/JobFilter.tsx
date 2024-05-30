import { Checkbox } from 'components/Checkbox';
import * as S from './JobFilter.styles';

export type JobFilterProps = {};

export const JobFilter = ({}: JobFilterProps) => {
  return (
    <S.Wrapper>
      <S.FilterWrapper>
        <S.Title>Tipo de Contratação</S.Title>
        <Checkbox label="Tempo integral" />
        <Checkbox label="Meio Período" />
        <Checkbox label="Remoto" />
        <Checkbox label="Estágio" />
        <Checkbox label="Contrato" />
      </S.FilterWrapper>

      <S.FilterWrapper>
        <S.Title>Categorias</S.Title>
        <Checkbox label="Design" />
        <Checkbox label="Vendas" />
        <Checkbox label="Marketing" />
        <Checkbox label="Negócio" />
        <Checkbox label="Recursos Humanos" />
        <Checkbox label="Finanças" />
        <Checkbox label="Engenharia" />
        <Checkbox label="Tecnologia" />
      </S.FilterWrapper>

      <S.FilterWrapper>
        <S.Title>Nível de cargo</S.Title>
        <Checkbox label="Nível Inicial" />
        <Checkbox label="Nível Intermediário" />
        <Checkbox label="Nível Sênior" />
      </S.FilterWrapper>

      <S.FilterWrapper>
        <S.Title>Faixa Salarial</S.Title>
        <Checkbox label="R$700 - R$1000" />
        <Checkbox label="R$1000 - R$1500" />
        <Checkbox label="R$1500 - R$2000" />
        <Checkbox label="R$3000 ou acima" />
      </S.FilterWrapper>
    </S.Wrapper>
  );
};
