'use client';
import { LoadingPreviousApplication } from 'components/PreviousApplications';
import { PreviousApplicationsItem } from 'components/PreviousApplicationsItem';
import {
	JobApplication,
	JobApplicationResponse,
} from 'protocols/external/job/job-application';
import { Children } from 'react';
import { Base } from 'templates/Base/Base';
import { filterJobLocation } from 'utils/job';
import * as S from './MyApplications.styles';
import { useMyApplications, NoDataFound } from '.';
import { Title } from 'components/Title';

export type MyApplicationsProps = {
	initialData: JobApplicationResponse;
};

type ApplicationsProps = {
	applications: JobApplication[] | undefined;
};

export const Applications = ({ applications }: ApplicationsProps) => {
	return Children.toArray(
		applications?.map((item, key) => {
			const isEven = (key + 1) % 2 === 0;
			const { name, location, work_model, is_available, id } = item.job!;

			return (
				<PreviousApplicationsItem
					jobTitle={name}
					company={'Google'}
					location={filterJobLocation(location)}
					workModel={work_model}
					isAvaliable={!!is_available}
					white={isEven}
					id={id}
				/>
			);
		}),
	);
};

export const MyApplications = ({ initialData }: MyApplicationsProps) => {
	const {
		name,
    data: applications,
    isLoading,
  } = useMyApplications({
		initialData,
	});

  const noData = (!applications || applications.length === 0) && !isLoading

	return (
		<Base>
			<S.Wrapper>
				<Title title="Minhas Candidaturas" />
        {noData ? <NoDataFound /> :
          <>
					<S.WelcomeMessage>Continue assim, {`${name}`}</S.WelcomeMessage>
          <S.PreviousJobs>
            <S.WelcomeMessage>Histórico de Candidaturas</S.WelcomeMessage>
            {isLoading ? (
              <LoadingPreviousApplication />
            ) : (
              <Applications applications={applications} />
            )}
            </S.PreviousJobs>
          </>
          }
			</S.Wrapper>
		</Base>
	);
};
