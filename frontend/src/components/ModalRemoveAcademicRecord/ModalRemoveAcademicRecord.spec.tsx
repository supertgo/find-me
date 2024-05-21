import { render, screen, renderHook } from 'utils/test/test-utils';
import { ModalRemoveAcademicRecord } from './ModalRemoveAcademicRecord';
import { useContextSelector } from 'use-context-selector';
import { RemoveAcademicRecordContext } from 'hooks/contexts/RemoveAcademicRecord/RemoveAcademicRecord';

describe('<ModalRemoveAcademicRecord />', () => {
	it('should render the component', () => {
		renderHook(() =>
			useContextSelector(RemoveAcademicRecordContext, (context) => ({
				open: (context.open = true),
				academicRecord: (context.academicRecord = { name: 'UFMG', id: 106 }),
				setAcademicRecord: context.setAcademicRecord,
			})),
		);

		render(<ModalRemoveAcademicRecord />, {
			queryProvider: true,
		});

		expect(screen.getByText('UFMG')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Tem certeza que deseja excluir esse registro acadêmico?',
			),
		).toBeInTheDocument();
	});
});
