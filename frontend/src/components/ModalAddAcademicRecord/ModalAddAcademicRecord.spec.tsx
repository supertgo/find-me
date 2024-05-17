import { render, screen, act, waitFor, fireEvent } from 'utils/test/test-utils';
import { ModalAddAcademicRecord } from './ModalAddAcademicRecord';

describe('<ModalAddAcademicRecord />', () => {
	it('should render the component', async () => {
		render(<ModalAddAcademicRecord />);

		const addAcademicRecordTrigger = screen.getByLabelText(
			'adicionar formação acadêmica',
		);

		expect(addAcademicRecordTrigger).toBeInTheDocument();

		act(() => fireEvent.click(addAcademicRecordTrigger));

		await waitFor(() => {
			expect(
				screen.getByText('Adicionar Formação Acadêmica'),
			).toBeInTheDocument();
			expect(
        screen.getByPlaceholderText('Ex: UFMG'),
			).toBeInTheDocument();
      
      expect(
        screen.getByPlaceholderText('Ex: Bacharelado'),
			).toBeInTheDocument();
      
      expect(
        screen.getByPlaceholderText('Ex: Ciência da Computação'),
			).toBeInTheDocument();
		});
	});
});
