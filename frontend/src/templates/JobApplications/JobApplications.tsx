'use client';
import { ApplicantsTable } from 'components/ApplicantsTable/ApplicantsTable';
import { ApplicationHeader } from 'components/ApplicationHeader/ApplicationHeader';
import { useApplicantsTable } from 'hooks/useApplicantsTable/useApplicantsTable';
import {
  JobApplicationResponse,
} from 'protocols/external/job/job-application';
import { useEffect } from 'react';
import { Base } from 'templates/Base/Base';
import * as S from './JobApplications.styles';

export type JobApplicationsProps = {
	jobId: number;
	initialData: JobApplicationResponse;
};

export const JobApplications = ({
	jobId,
	initialData,
}: JobApplicationsProps) => {
	const { data, table, isLoading, globalFilter, setGlobalFilter } =
		useApplicantsTable({
			jobsId: [jobId],
			initialData,
		});

	const applicantsData = data?.data.data;

	const currentPage = table.getState().pagination.pageIndex + 1;
	const itemsPerPage = 10;

	useEffect(() => {
		return () => {
			setGlobalFilter('');
		};
	}, []);

	return (
		<Base>
			<S.Wrapper>
				<ApplicationHeader />

				<ApplicantsTable
					table={table}
					applicantsData={applicantsData}
					isLoading={isLoading}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					currentPage={currentPage}
					itemsPerPage={itemsPerPage}
				/>
			</S.Wrapper>
		</Base>
	);
};
