import { render, screen } from 'utils/test/test-utils';
import { AccountConfig, AccountConfigProps } from './AccountConfig';
import { formatCellphone } from 'utils/formatCellphone';

const props: AccountConfigProps = {
	name: 'test',
	email: 'thiago.teste@gmail.com',
	phone: '3131313131',
	about_me: 'Working on FindMe right now!!!!',
};

describe('<AccountConfig />', () => {
	it('should render the component', () => {
		render(<AccountConfig {...props} />);
		const nameField: HTMLInputElement = screen.getByPlaceholderText(
			'Digite o seu nome completo',
		);
		const phoneField: HTMLInputElement = screen.getByPlaceholderText(
			'Digite o seu celular',
		);
		const emailField: HTMLInputElement = screen.getByPlaceholderText(
			'Digite o seu e-mail',
		);

		const aboutMeField: HTMLInputElement = screen.getByPlaceholderText(
			'Descreva um pouco sobre você',
		);

		const saveButton = screen.getByRole('button', { name: 'Salvar Perfil' });

		expect(nameField).toHaveValue(props.name);
		expect(phoneField).toHaveValue(formatCellphone(props.phone));
		expect(emailField).toHaveValue(props.email);
		expect(aboutMeField).toHaveValue(props.about_me);

		expect(saveButton).toBeInTheDocument();
	});

	it('should render an empty string if there is not about_me', () => {
		render(<AccountConfig {...props} about_me={null} />);

		const aboutMeField: HTMLInputElement = screen.getByPlaceholderText(
			'Descreva um pouco sobre você',
		);

		expect(aboutMeField).toHaveValue('');
	});
});
