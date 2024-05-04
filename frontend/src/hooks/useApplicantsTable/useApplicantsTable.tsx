import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { UserProps } from 'protocols/external/user/user';
import { useMemo, useState } from 'react';
import { useUser } from 'hooks/useUser/useUser';
import { GetUsersRouteConst } from 'utils/routes';
import { Pill } from 'components/Pill/Pill';
import { Button } from 'components/Button/Button';
import * as S from 'components/Table/TableData/TableData.styles';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

const columnHelper = createColumnHelper<UserProps>();

export const useApplicantsTable = () => {
  const [isSorting, setSorting] = useState<SortingState>([]);

  const { showUsers } = useUser();
  const { data, isLoading } = useQuery({
    queryKey: [`/${GetUsersRouteConst}`],
    queryFn: () => showUsers(),
  });

  const tableData = useMemo(() => {
    return data?.data.data || [];
  }, [data?.data.data]);

  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: 'applicant_full_name',
      header: () => <S.TableData>Nome completo</S.TableData>,
      cell: (info) => (
        <S.UserWrapperColumn>
          <Image
            src={`https://source.unsplash.com/random/?avatar&${info.row.index}`}
            width="40"
            height="40"
            alt={`${info.getValue()} avatar`}
            style={{
              borderRadius: '50%',
            }}
            loading="lazy"
          />
          <p title={info.getValue()}>{info.getValue()}</p>
        </S.UserWrapperColumn>
      ),
    }),
    columnHelper.accessor((row) => row, {
      id: 'applicant_state',
      header: () => <S.TableData>Status</S.TableData>,
      cell: () => <Pill text="Em análise" />,
    }),
    columnHelper.accessor((row) => row, {
      id: 'applicant_application_date',
      header: () => <S.TableData>Data</S.TableData>,
      cell: () => <S.TableData>13 de Julho 2021</S.TableData>,
    }),
    columnHelper.accessor((row) => row, {
      id: 'applicant_job_function',
      header: () => <S.TableData>Cargo</S.TableData>,
      cell: () => <S.TableData>Dev PHP</S.TableData>,
    }),
    columnHelper.accessor((row) => row, {
      id: 'applicant_application_button',
      enableSorting: false,
      header: () => null,
      cell: () => <Button>Currículo</Button>,
    }),
    columnHelper.accessor((row) => row, {
      id: 'applicant_action_column',
      header: () => <S.TableData>Ação</S.TableData>,
      enableSorting: false,
      cell: () => <DotsHorizontalIcon />,
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting: isSorting,
    },
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return {
    data,
    table,
    isLoading,
  };
};
