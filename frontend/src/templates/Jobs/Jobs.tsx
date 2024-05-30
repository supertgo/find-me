import { useQuery } from '@tanstack/react-query';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { JobFilter } from 'components/JobFilter';
import { JobItem } from 'components/JobItem';
import { useJob } from 'hooks/useJob/useJob';
import { Children } from 'react';
import { Base } from 'templates/Base/Base';
import { LoadingJobs } from './LoadingJobs';
import { NoJobs } from './NoJobs';
import { CreateJobHeader } from 'components/CreateJobHeader';
import { JobsUrl } from 'utils/urls';
import * as S from './Jobs.styles';

export const Jobs = () => {
	const { findJobs } = useJob();

	const { data: jobsData, isLoading } = useQuery({
		queryKey: [`/${JobsUrl}`],
		queryFn: () => findJobs(),
	});

	const noJobs = !jobsData && !isLoading;
	const jobs = jobsData?.data.data;

	return (
		<Base>
			<CreateJobHeader title="Vagas" />
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
