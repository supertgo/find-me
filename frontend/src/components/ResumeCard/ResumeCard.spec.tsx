import 'components/Skeleton/Skeleton.mock'
import { render, screen } from 'utils/test/test-utils';
import { ResumeCard, ResumeCardProps } from './ResumeCard';
import { CompetenceItem } from 'components/CompetenceItem';
import { LoadingResumeCard } from './LoadingResumeCard';

const props: ResumeCardProps = {
	text: 'Competências',
	children: <CompetenceItem id={10} name="PHP" />,
};

describe('<ResumeCard />', () => {
	it('should render the component', () => {
		render(<ResumeCard {...props} />);

		expect(screen.getByText('PHP')).toBeInTheDocument();
		expect(screen.getByText(props.text)).toBeInTheDocument();
	});
});

describe('<LoadingResumeCard />', () => {
	it('should render the component', () => {
		render(<LoadingResumeCard />);

    expect(screen.getAllByTestId('Mock Skeleton')).toHaveLength(1)
	});
});
