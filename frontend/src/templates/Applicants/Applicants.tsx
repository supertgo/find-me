import { Base } from 'components/Base/Base';
import { Button } from 'components/Button/Button';
import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';
import { useApplicantsTable } from 'hooks/useApplicantsTable/useApplicantsTable';
import { useEffect } from 'react';

import * as S from './Applicants.styles';
import { ApplicantsTable } from 'components/ApplicantsTable/ApplicantsTable';

export const Applicants = () => {
  const { data, table, isLoading, globalFilter, setGlobalFilter } =
    useApplicantsTable();

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
        <S.Header>
          <S.CompanyWrapper>
            <DropboxIcon />
            <S.CompanyTextsWrapper>
              <span>Empresa</span>
              <p>Onfly</p>
            </S.CompanyTextsWrapper>
          </S.CompanyWrapper>
          <Button>Publicar uma vaga</Button>
        </S.Header>

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
