import { render, screen, act, fireEvent } from 'utils/test/test-utils';
import { ModalAddProfessionalExperience } from './ModalAddProfessionalExperience';

describe('<ModalAddProfessionalExperience />', () => {
	it('should render the component', () => {
		render(<ModalAddProfessionalExperience user_id={100} />, {
			queryProvider: true,
		});

		const addAcademicRecordTrigger = screen.getByLabelText(
			'adicionar experiência',
		);

		expect(addAcademicRecordTrigger).toBeInTheDocument();

		act(() => fireEvent.click(addAcademicRecordTrigger));

		expect(screen.getByText('Adicionar Experiência')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Ex: FindMe')).toBeInTheDocument();

		expect(
			screen.getByPlaceholderText('Ex: Desenvolvedor de Software'),
		).toBeInTheDocument();

		expect(screen.getByPlaceholderText('Ex: Dubai')).toBeInTheDocument();

		expect(screen.getByText('Meio Período')).toBeInTheDocument();
		expect(screen.getByText('Tempo integral')).toBeInTheDocument();

		expect(screen.getByText('Presencial')).toBeInTheDocument();
		expect(screen.getByText('Híbrido')).toBeInTheDocument();
		expect(screen.getByText('Home Office')).toBeInTheDocument();

		expect(
			screen.getByRole('checkbox', {
				name: /Trabalho atualmente neste cargo/i,
			}),
		).toBeInTheDocument();
	});
});
