import 'components/Skeleton/Skeleton.mock'
import { render, screen } from 'utils/test/test-utils';
import { ConfigInfoWrapper, ConfigInfoWrapperProps } from './ConfigInfoWrapper';
import { LoadingConfigInfoWrapper } from './LoadingConfigInfoWrapper';

const props: ConfigInfoWrapperProps = {
	title: 'Informações',
	children: <p>ConfigInfoWrapper</p>,
};

describe('<ConfigInfoWrapper />', () => {
	it('should render the component', () => {
		render(<ConfigInfoWrapper {...props} />);

		expect(screen.getByText('ConfigInfoWrapper')).toBeInTheDocument();
	});

	it('should render description when provided', () => {
		render(<ConfigInfoWrapper {...props} description="a new description" />);

		expect(screen.getByText('ConfigInfoWrapper')).toBeInTheDocument();
		expect(screen.getByText('a new description')).toBeInTheDocument();
	});
});

describe('<LoadingConfigInfoWrapper />', () => {
	it('should render the component', () => {
		render(<LoadingConfigInfoWrapper />);

    expect(screen.getAllByTestId('Mock Skeleton')).toHaveLength(4)
	});
});
