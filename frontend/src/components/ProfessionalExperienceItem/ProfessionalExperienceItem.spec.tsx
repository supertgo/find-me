import { render, screen } from 'utils/test/test-utils';
import {
	ProfessionalExperienceItem,
	ProfessionalExperienceItemProps,
} from './ProfessionalExperienceItem';

const props: ProfessionalExperienceItemProps = {
	id: 46,
	user_id: 106,
	company_name: 'ABC Company',
	position: 'Software Engineer',
	description: 'Developed web applications using modern technologies.',
	start_date: '2020-06-15',
	end_date: '2022-08-30',
	is_current: 0,
	location: 'New York',
	work_model: 'hybrid',
	employment_type: 'full-time',
};

describe('<ProfessionalExperienceItem />', () => {
	it('should render the component', () => {
		render(<ProfessionalExperienceItem {...props} />);

    expect(screen.getByText(props.position)).toBeInTheDocument()
    expect(screen.getByText(`${props.company_name}, ${props.employment_type}`)).toBeInTheDocument()
    expect(screen.getByText(props.location)).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
	});
});
