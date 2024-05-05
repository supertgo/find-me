import { TableData } from 'components/Table/TableData/TableData';
import { Pagination } from 'components/Pagination/Pagination';
import { Input } from 'components/Input/Input';
import { UserProps } from 'protocols/external/user/user';
import { Dispatch, SetStateAction } from 'react';
import { Table } from '@tanstack/react-table';

import * as S from './ApplicantsTable.styles';

export type ApplicantsTableProps = {
  applicantsData: UserProps[] | undefined;
  itemsPerPage: number;
  currentPage: number;
  isLoading: boolean;
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  table: Table<UserProps>
};

export const ApplicantsTable = ({
  table,
  applicantsData,
  itemsPerPage,
  currentPage,
  isLoading,
  globalFilter,
  setGlobalFilter,
}: ApplicantsTableProps) => {
  return (
    <>
      <S.TableTopContent>
        <h3>{`Total de Candidatos: ${applicantsData?.length || '...'}`}</h3>

        <Input
          placeholder="Pesquisar Candidatos"
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
          value={globalFilter}
        />
      </S.TableTopContent>

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
    </>
  );
};
