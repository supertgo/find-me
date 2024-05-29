import { render, screen } from 'utils/test/test-utils';
import { SeeApplication, SeeApplicationProps } from './SeeApplication';

const props: SeeApplicationProps = {
	id: 10,
	jobId: 15,
	name: 'Tobias',
	email: 'tobias@gmail.com',
	phone: '991892875',
	coverLetter: 'quero trabalhar',
};

describe('<SeeApplication />', () => {
	it('should render the component', () => {
		render(<SeeApplication {...props} />);

		expect(
			screen.getByRole('button', { name: /Ver Candidatura/i }),
		).toBeInTheDocument();
	});
});
