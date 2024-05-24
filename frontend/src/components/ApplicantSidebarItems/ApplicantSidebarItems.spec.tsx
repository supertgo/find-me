import { render, screen } from 'utils/test/test-utils';
import { ApplicantSidebarItems } from './ApplicantSidebarItems';
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

describe('<ApplicantSidebarItems />', () => {
	it('should render the component', () => {
		render(<ApplicantSidebarItems />);

		expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Vagas' })).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: 'Meu Perfil Público' }),
		).toBeInTheDocument();
	});
});
