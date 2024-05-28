import { useApplicantsTable } from 'hooks/useApplicantsTable/useApplicantsTable';
import { useEffect } from 'react';
import { Base } from 'templates/Base/Base';
import { ApplicantsTable } from 'components/ApplicantsTable/ApplicantsTable';
import { ApplicationHeader } from 'components/ApplicationHeader/ApplicationHeader';
import * as S from './Applicants.styles';

export const Applicants = () => {
  const { data, table, isLoading, globalFilter, setGlobalFilter } =
  useApplicantsTable({
    jobsId: []
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
