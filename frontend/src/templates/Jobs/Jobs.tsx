import { Base } from 'components/Base/Base';
import { Title } from 'components/Title/Title';
import * as S from './Jobs.styles';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { JobItem } from 'components/JobItem/JobItem';
import { JobFilter } from 'components/JobFilter/JobFilter';

export type JobsProps = {};

export const Jobs = ({}: JobsProps) => {
  return (
    <Base>
      <Title title="Vagas" />
      <S.SearchWrapper>
        <Input placeholder="Buscar vaga" />
        <Button>Buscar</Button>
      </S.SearchWrapper>
      <S.OpportunitiesWrapper>
        <JobFilter />
        <S.Opportunities>
          <h5>Todas as Vagas</h5>
          <p>Mostrando todos os 10 resultados</p>
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
        </S.Opportunities>
      </S.OpportunitiesWrapper>
    </Base>
  );
};
