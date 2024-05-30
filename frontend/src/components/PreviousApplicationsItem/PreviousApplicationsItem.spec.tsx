import { render, screen } from 'utils/test/test-utils';
import { PreviousApplicationsItem, PreviousApplicationsItemProps } from '.';

const props: PreviousApplicationsItemProps = {
	jobTitle: 'Assistente de Redes Sociais',
	company: 'Nomad',
	workModel: 'Tempo Integral',
	isAvaliable: true,
	location: 'Paris, France',
	id: 0,
};

describe('<PreviousApplicationsItem />', () => {
	it('should render the component', () => {
		render(<PreviousApplicationsItem {...props} />);

		expect(screen.getByText(props.jobTitle)).toBeInTheDocument();
		expect(screen.getByText(/Nomad/i)).toBeInTheDocument();
		expect(screen.getByText(/Paris, France/i)).toBeInTheDocument();
		expect(screen.getByText(/Tempo Integral/i)).toBeInTheDocument();
	});
});
