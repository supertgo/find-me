import { render, screen } from 'utils/test/test-utils';
import { vi } from 'vitest'
import { ModalRemoveJob } from './ModalRemoveJob';

describe('<ModalRemoveJob />', () => {
	it('should render the component', () => {
		const job = {
			name: 'Dev Front Junior III',
			id: 106,
			companyName: 'EmCash',
		};

		render(<ModalRemoveJob open job={job} setOpen={vi.fn()} />, {
			queryProvider: true,
		});

		expect(screen.getByText('Dev Front Junior III')).toBeInTheDocument();
		expect(
			screen.getByText('Tem certeza que deseja excluir essa vaga?'),
		).toBeInTheDocument();
	});
});
