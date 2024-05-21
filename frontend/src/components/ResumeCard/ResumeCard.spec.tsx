import { render, screen } from 'utils/test/test-utils';
import { ResumeCard, ResumeCardProps } from './ResumeCard';
import { CompetenceItem } from 'components/CompetenceItem/CompetenceItem';

const props: ResumeCardProps = {
	text: 'Competências',
	children: <CompetenceItem name="PHP" />,
};

describe('<ResumeCard />', () => {
	it('should render the component', () => {
		render(<ResumeCard {...props} />);

		expect(screen.getByText('PHP')).toBeInTheDocument();
    expect(screen.getByText(props.text)).toBeInTheDocument()
	});
});
