import { Table } from '@tanstack/react-table';
import { Input } from 'components/Input/Input';
import { ModalApplication } from 'components/ModalApplication/ModalApplication';
import { Pagination } from 'components/Pagination/Pagination';
import { TableData } from 'components/Table/TableData/TableData';
import { CoverLetterProvider } from 'hooks/contexts/CoverLetter/CoverLetter';
import { JobApplication } from 'protocols/external/job/job-application';
import { Dispatch, SetStateAction } from 'react';
import * as S from './ApplicantsTable.styles';

export type ApplicantsTableProps = {
	applicantsData: JobApplication[] | undefined;
	itemsPerPage: number;
	currentPage: number;
	isLoading: boolean;
	globalFilter: string;
	setGlobalFilter: Dispatch<SetStateAction<string>>;
	table: Table<JobApplication>;
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

			<CoverLetterProvider>
				<ModalApplication />
				<TableData
					data={table}
					isLoading={isLoading}
					defaultMessage="Não há nada para essa configurações"
				/>
			</CoverLetterProvider>

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
