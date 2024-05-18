import { render, screen, act, fireEvent } from 'utils/test/test-utils';
import { ModalAddAcademicRecord } from './ModalAddAcademicRecord';

describe('<ModalAddAcademicRecord />', () => {
	it('should render the component', async () => {
		render(<ModalAddAcademicRecord user_id={10} />, {
			queryProvider: true,
		});

		const addAcademicRecordTrigger = screen.getByLabelText(
			'adicionar formação acadêmica',
		);

		expect(addAcademicRecordTrigger).toBeInTheDocument();

		await act(async () => fireEvent.click(addAcademicRecordTrigger));

		expect(
			screen.getByText('Adicionar Formação Acadêmica'),
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Ex: UFMG')).toBeInTheDocument();

		expect(screen.getByPlaceholderText('Ex: Bacharelado')).toBeInTheDocument();

		expect(
			screen.getByPlaceholderText('Ex: Ciência da Computação'),
		).toBeInTheDocument();
	});
});
