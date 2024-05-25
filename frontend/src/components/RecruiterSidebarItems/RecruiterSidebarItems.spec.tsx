import 'test/use-path-mock';
import { render, screen } from 'utils/test/test-utils';
import { RecruiterSidebarItems } from './RecruiterSidebarItems';

describe('<RecruiterSidebarItems />', () => {
	it('should render the component', () => {
		render(<RecruiterSidebarItems />);

		expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: 'Candidatos' }),
		).toBeInTheDocument();
	});
});
