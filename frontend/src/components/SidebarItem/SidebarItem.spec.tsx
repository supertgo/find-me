import 'icons/HomeIcon/HomeIcon.mock';
import { render, screen } from 'utils/test/test-utils';
import { SidebarItem } from '.';
import { HomeIcon } from 'icons/HomeIcon/HomeIcon';
import { vi } from 'vitest';
import { theme } from 'styles/theme';

vi.mock('next/navigation', () => ({
	useRouter() {
		return {
			push: () => vi.fn(),
			replace: () => vi.fn(),
		};
	},
	usePathname() {
		return '/home';
	},
}));

describe('<SidebarItem />', () => {
	it('should render the component', () => {
		render(
			<SidebarItem
				href="/new-page"
				icon={<HomeIcon />}
				text="Vagas"
				keyword="job"
			/>,
		);

		expect(screen.getByTestId('Mock HomeIcon')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Vagas' })).toBeInTheDocument();
	});
	it('should render a blue icon when selected', () => {
		render(
			<SidebarItem
				href="/new-page"
				icon={<HomeIcon />}
				text="Início"
				keyword="home"
			/>,
		);

		expect(screen.getByTestId('Mock HomeIcon')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument();
		expect(screen.getByText('Início').parentElement).toHaveStyleRule(
			'background',
			`${theme.colors.cleanBlue}`,
		);
	});
});
