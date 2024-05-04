import { Table } from '@tanstack/react-table';
import { TableLoader } from 'components/Table/TableLoader/TableLoader';
import { TableRows } from 'components/Table/TableRows/TableRows';
import { ResponsiveTable } from 'components/Table/Table.styles';
import TableHeader from 'components/Table/TableHeader/TableHeader';
import { UserProps } from 'protocols/external/user/user';

import * as S from 'components/Table/TableData/TableData.styles';

type TableDataProps = {
  isLoading?: boolean;
  data: Table<UserProps>;
  defaultMessage: string;
  rowsLoader?: number;
  columnsLoader?: number;
};

export const TableData = ({
  isLoading,
  data,
  defaultMessage,
  columnsLoader = 6,
  rowsLoader = 6,
}: TableDataProps) => {
  if (!(data.getRowModel().rows.length || isLoading)) {
    return (
      <>
        <ResponsiveTable>
          <S.Table>
            <S.Thead>
              <TableHeader table={data} />
            </S.Thead>
            <S.Tbody></S.Tbody>
          </S.Table>
        </ResponsiveTable>
        <S.DefaultText>{defaultMessage}</S.DefaultText>
      </>
    );
  }

  return (
    <ResponsiveTable>
      <S.Table>
        <S.Thead>
          <TableHeader table={data} />
        </S.Thead>
        <S.Tbody>
          {isLoading ? (
            <TableLoader rows={rowsLoader} columns={columnsLoader} />
          ) : (
            <TableRows table={data} />
          )}
        </S.Tbody>
      </S.Table>
    </ResponsiveTable>
  );
};

