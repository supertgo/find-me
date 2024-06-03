import 'components/Sidebar/Sidebar.mock';
import 'components/Skeleton/Skeleton.mock';
import 'components/ResumeCard/ResumeCard.mock';
import { render, screen } from 'utils/test/test-utils';
import { Config, ConfigProps, LoadingConfig } from '.';
import { formatCellphone } from 'utils/formatCellphone';

const props: ConfigProps = {
	id: 10,
	name: 'test',
	email: 'thiago.teste@gmail.com',
	phone: '3131313131',
	type: 'recruiter',
	about_me: 'oi',
};

describe('<Config />', () => {
	it('should render the component', () => {
		render(<Config {...props} />, {
			queryProvider: true,
		});

		const nameField: HTMLInputElement = screen.getByPlaceholderText(
			'Digite o seu nome completo',
		);
		const phoneField: HTMLInputElement = screen.getByPlaceholderText(
			'Digite o seu celular',
		);
		const emailField: HTMLInputElement = screen.getByPlaceholderText(
			'Digite o seu e-mail',
		);

		const saveButton = screen.getByRole('button', { name: 'Salvar Perfil' });

		expect(nameField).toHaveValue(props.name);
		expect(phoneField).toHaveValue(formatCellphone(props.phone));
		expect(emailField).toHaveValue(props.email);

		expect(saveButton).toBeInTheDocument();
	});

	it('should render resume card if the user is an employee', () => {
		render(<Config {...props} type="employee" />, {
			queryProvider: true,
		});

		expect(screen.getAllByTestId('Mock ResumeCard')).toHaveLength(3);
	});
});

describe('<LoadingConfig />', () => {
	it('should render the component', () => {
		render(<LoadingConfig />);

		expect(screen.getAllByTestId('Mock Skeleton')).toHaveLength(19);
	});
});
