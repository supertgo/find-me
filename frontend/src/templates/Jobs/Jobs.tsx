import { Base } from 'components/Base/Base';
import { useQuery } from '@tanstack/react-query';
import { Title } from 'components/Title/Title';
import * as S from './Jobs.styles';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { JobItem } from 'components/JobItem/JobItem';
import { JobFilter } from 'components/JobFilter/JobFilter';
import { useJobs } from 'hooks/useJob/useJobs';
import { Children } from 'react';
import { LoadingJobs } from './LoadingJobs';
import { NoJobs } from './NoJobs';

export const Jobs = () => {
  const { findJobs } = useJobs();

  const { data: jobsData, isLoading } = useQuery({
    queryKey: [`/jobs`],
    queryFn: () => findJobs(),
  });

  const noJobs = !jobsData && !isLoading;
  const jobs = jobsData?.data.data;

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
          {isLoading && <LoadingJobs />}
          {noJobs && <NoJobs />}
          {jobs && <p>{`Mostrando todos os ${jobs.length} resultados`}</p>}
          {Children.toArray(jobs?.map((job) => <JobItem {...job} />))}
        </S.Opportunities>
      </S.OpportunitiesWrapper>
    </Base>
  );
};
