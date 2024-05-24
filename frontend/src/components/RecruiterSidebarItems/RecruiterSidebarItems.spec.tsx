import { render, screen } from 'utils/test/test-utils';
import { RecruiterSidebarItems } from './RecruiterSidebarItems';
import { vi } from 'vitest';

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

describe('<RecruiterSidebarItems />', () => {
	it('should render the component', () => {
		render(<RecruiterSidebarItems />);

		expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: 'Candidatos' }),
		).toBeInTheDocument();
	});
});
