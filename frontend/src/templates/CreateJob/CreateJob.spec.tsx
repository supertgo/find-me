import { fireEvent, render, screen } from 'utils/test/test-utils';
import { CreateJob } from './CreateJob';

const textsToMatch = [
	'Informações do emprego',
	'Título do Emprego',
	'Tipo de Contratação',
	'Tempo Integral',
	'Meio Período',
	'Remoto',
	'Estágio',
	'Contrato',
	'Salário',
];

const textsToMatchNextSection = [
	'Responsabilidades',
	'Qualificações',
	'Preferências',
];

describe('<CreateJob />', () => {
	it('should render the component', () => {
		render(<CreateJob />, {
			queryProvider: true,
		});

		textsToMatch.forEach((text) =>
			expect(screen.getByText(text)).toBeInTheDocument(),
		);
	});

	it('should render the second content in component', () => {
		render(<CreateJob />, {
			queryProvider: true,
		});

		fireEvent.click(screen.getByText('Descrição do emprego'));

		textsToMatchNextSection.forEach((text) =>
			expect(screen.getByText(text)).toBeInTheDocument(),
		);
	});
});
