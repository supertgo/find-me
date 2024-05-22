import { render, screen } from 'utils/test/test-utils';
import { LogoFindme } from './LogoFindme';
import { theme } from 'styles/theme';

describe('<LogoFindme />', () => {
	it('should render the component', () => {
		render(<LogoFindme />);

		expect(screen.getByText('FindMe')).toBeInTheDocument();
		expect(screen.getByText('FindMe')).toHaveStyleRule(
			'color',
			`${theme.colors.primary}`,
		);
	});
	it('should render the component', () => {
		render(<LogoFindme variant={'secondary'} />);

		expect(screen.getByText('FindMe')).toBeInTheDocument();
		expect(screen.getByText('FindMe')).toHaveStyleRule(
			'color',
			`${theme.colors.white}`,
		);
	});
});
