import { render, screen } from 'utils/test/test-utils';
import { AccountConfig, AccountConfigProps } from './AccountConfig';
import { formatCellphone } from 'utils/formatCellphone';

const props: AccountConfigProps = {
	name: 'test',
	email: 'thiago.teste@gmail.com',
	phone: '3131313131',
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

		const saveButton = screen.getByRole('button', { name: 'Salvar Perfil' });

		expect(nameField).toHaveValue(props.name);
		expect(phoneField).toHaveValue(formatCellphone(props.phone));
		expect(emailField).toHaveValue(props.email);

		expect(saveButton).toBeInTheDocument();
	});
});
