import { ApplicantsTable } from 'components/ApplicantsTable/ApplicantsTable';
import { useApplicantsTable } from 'hooks/useApplicantsTable/useApplicantsTable';
import { useEffect } from 'react';
import { Base } from 'templates/Base/Base';
import * as S from './Applicants.styles';

export const Applicants = () => {
	const {
		applicantsData,
		itemsPerPage,
		currentPage,
		table,
		isLoading,
		globalFilter,
		setGlobalFilter,
	} = useApplicantsTable({
		jobsId: [],
	});

	useEffect(() => {
		return () => {
			setGlobalFilter('');
		};
	}, []);

	return (
		<Base>
			<S.Wrapper>
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
