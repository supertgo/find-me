import { render, screen } from 'utils/test/test-utils';
import { Select } from './Select';

describe('<Select />', () => {
	it('should render the component with options', () => {
		const options = [
			{ value: 'presencial', label: 'Presencial' },
			{ value: 'home-office', label: 'Home Office' },
		];

		render(
			<Select
				options={options}
				placeholder="Selecione um modelo"
				name="work_model"
			/>,
		);

		expect(screen.getByText('Selecione um modelo')).toBeInTheDocument();
		expect(screen.getByText('Presencial')).toBeInTheDocument();
		expect(screen.getByText('Home Office')).toBeInTheDocument();
	});
	it('should render the component with payment options', () => {
		const options = [
			{ value: 'monthly', label: 'Mensal' },
			{ value: 'weekly', label: 'Semanal' },
		];

		render(
			<Select
				options={options}
				placeholder="Selecione o período de pagamento"
				name="payment_period"
			/>,
		);

		expect(
			screen.getByText('Selecione o período de pagamento'),
		).toBeInTheDocument();
		expect(screen.getByText('Mensal')).toBeInTheDocument();
		expect(screen.getByText('Semanal')).toBeInTheDocument();
	});
});
