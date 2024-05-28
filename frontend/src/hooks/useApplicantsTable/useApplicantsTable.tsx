import { useQuery } from '@tanstack/react-query';
import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import { Button } from 'components/Button/Button';
import { Pill } from 'components/Pill/Pill';
import * as S from 'components/Table/TableData/TableData.styles';
import { useJobApplication } from 'hooks/useJobApplication/useJobApplication';
import Image from 'next/image';
import Link from 'next/link';
import {
	JobApplication,
	JobApplicationResponse,
} from 'protocols/external/job/job-application';
import { useMemo, useState } from 'react';
import { getInitialData } from 'utils/initialData';
import { GetUsersRouteConst } from 'utils/routes';
import { ApplicantUrl } from 'utils/urls';

const columnHelper = createColumnHelper<JobApplication>();

export type UseApplicantsTableProps = {
	jobsId?: number[];
	initialData?: JobApplicationResponse;
};

export const useApplicantsTable = ({
	jobsId = [],
	initialData,
}: UseApplicantsTableProps) => {
	const [isSorting, setSorting] = useState<SortingState>([]);
	const [globalFilter, setGlobalFilter] = useState('');

	const { findJobApplications } = useJobApplication();

	const { data, isLoading } = useQuery({
		queryKey: [`/${GetUsersRouteConst}`],
		queryFn: () =>
			findJobApplications({
				includes: ['candidates'],
				jobsId,
			}),
		initialData: initialData
			? getInitialData<JobApplicationResponse>({
					initialData,
				})
			: undefined,
	});

	const tableData = useMemo(() => {
		return data?.data.data || [];
	}, [data?.data.data]);

	const columns = [
		columnHelper.accessor((row) => row.candidates![0].name, {
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
						quality={100}
					/>
					<p title={info.getValue()}>{info.getValue()}</p>
				</S.UserWrapperColumn>
			),
		}),
		columnHelper.accessor((row) => row.status, {
			id: 'applicant_state',
			header: () => <S.TableData>Status</S.TableData>,
			cell: (info) => {
				return (
					<Pill text={info.getValue() as unknown as string} variant={'info'} />
				);
			},
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
			cell: (info) => (
				<Link
					href={`/${ApplicantUrl(info.getValue().candidates![0].id)}`}
					target="_blank"
				>
					<Button variant="secondary">Ver Candidatura</Button>
				</Link>
			),
		}),
	];

	const table = useReactTable({
		data: tableData,
		columns,
		state: {
			sorting: isSorting,
			globalFilter,
		},
		onGlobalFilterChange: setGlobalFilter,
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
		globalFilter,
		setGlobalFilter,
	};
};
