import { render, screen } from 'utils/test/test-utils';
import { Breadcrumb, BreadcrumbProps } from '.';

const props: BreadcrumbProps = {
	paths: [
		{
			name: 'Home',
			url: '/home',
		},
		{
			name: 'Jobs',
			url: '/jobs',
		},
	],
};

describe('<Breadcrumb />', () => {
	it('should render the component', () => {
		render(<Breadcrumb {...props} />);

		expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Jobs/i })).toBeInTheDocument();
	});
});
