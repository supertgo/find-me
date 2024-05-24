import 'components/Sidebar/Sidebar.mock';
import 'components/PreviousApplications/PreviousApplications.mock';
import { render, screen } from 'utils/test/test-utils';
import { Home } from './Home';

describe('<Home />', () => {
	it('should render the component', () => {
		render(<Home />, {
			queryProvider: true,
		});

		expect(screen.getByTestId('Mock PreviousApplications')).toBeInTheDocument();

		expect(
			screen.getByText('Visualizar histórico de todas as aplicações'),
		).toBeInTheDocument();
	});
});
