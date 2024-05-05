import { Base } from 'components/Base/Base';
import { TableData } from 'components/Table/TableData/TableData';
import { Title } from 'components/Title/Title';
import { Button } from 'components/Button/Button';
import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';
import { useApplicantsTable } from 'hooks/useApplicantsTable/useApplicantsTable';

import * as S from './Applicants.styles';
import { Pagination } from 'components/Pagination/Pagination';

export const Applicants = () => {
  const { data, table, isLoading } = useApplicantsTable();

  const applicantsData = data?.data.data;

  const currentPage = table.getState().pagination.pageIndex + 1;
  const itemsPerPage = 10;

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

        <Title
          title={`Total de Candidatos: ${applicantsData?.length || '...'}`}
        />

        <TableData
          data={table}
          isLoading={isLoading}
          defaultMessage="Não há nada para essa configurações"
        />

        {applicantsData && (
          <S.PaginationWrapper>
            <Pagination
              hasNextPage={table.getCanNextPage()}
              hasPrevPage={table.getCanPreviousPage()}
              page={currentPage}
              limit={itemsPerPage}
              totalItems={applicantsData.length || 0}
              totalPages={table.getPageCount() || 0}
              onPageChange={table.setPageIndex}
              goNextPage={table.nextPage}
              goPreviousPage={table.previousPage}
              hasDetails={true}
            />
          </S.PaginationWrapper>
        )}
      </S.Wrapper>
    </Base>
  );
};
