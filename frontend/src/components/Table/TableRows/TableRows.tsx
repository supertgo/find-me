import { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import * as S from 'components/Table/Table.styles';
import {  UserProps } from 'protocols/external/user/user';

type TableProposalsRowsProps = {
  table: Table<UserProps>;
};

export const TableRows = ({ table }: TableProposalsRowsProps) => {
  return (
    <>
      {table.getRowModel().rows.map((row, index) => {
        return (
          <S.Tr key={row.id} $isWhite={(index % 2) !== 0}>
            {row.getVisibleCells().map((cell) => (
              <S.Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </S.Td>
            ))}
          </S.Tr>
        );
      })}
    </>
  );
};
