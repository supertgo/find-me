'use client';
import { LoadingPreviousApplication } from 'components/PreviousApplications';
import { PreviousApplicationsItem } from 'components/PreviousApplicationsItem';
import { JobApplicationResponse } from 'protocols/external/job/job-application';
import { Children } from 'react';
import { Base } from 'templates/Base/Base';
import { filterJobLocation } from 'utils/job';
import * as S from './MyApplications.styles';
import { useMyApplications } from '.';
import { Title } from 'components/Title';

export type MyApplicationsProps = {
	initialData: JobApplicationResponse;
};

export const MyApplications = ({ initialData }: MyApplicationsProps) => {
	const { data: applications, name, isLoading } = useMyApplications({
		initialData,
	});

	return (
		<Base>
			<S.Wrapper>
				<Title title="Minhas Candidaturas" />
				<S.WelcomeMessage>Continue assim, {`${name}`}</S.WelcomeMessage>
        <S.PreviousJobs>
          <S.WelcomeMessage>Histórico de Candidaturas</S.WelcomeMessage>
          {isLoading ? (
            <LoadingPreviousApplication />
          ) : (
            Children.toArray(
              applications?.map((item, key) => {
                const isEven = (key + 1) % 2 === 0;
                const { name, location, work_model, is_available, id } =
                  item.job!;

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
            )
          )}
        </S.PreviousJobs>
			</S.Wrapper>
		</Base>
	);
};
