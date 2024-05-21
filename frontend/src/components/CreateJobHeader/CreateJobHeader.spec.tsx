import { render, screen } from 'utils/test/test-utils';
import { CreateJobHeader, CreateJobHeaderProps } from './CreateJobHeader';

const props: CreateJobHeaderProps = {
	title: 'Vagas',
};

describe('<CreateJobHeader />', () => {
	it('should render the component', () => {
		render(<CreateJobHeader {...props} />);

		expect(
			screen.getByRole('heading', { name: props.title }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: /Anuncie uma vaga/i }),
		).toBeInTheDocument();
	});
});
