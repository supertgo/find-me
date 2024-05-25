import 'test/use-path-mock';
import { render, screen } from 'utils/test/test-utils';
import { ApplicantSidebarItems } from './ApplicantSidebarItems';

describe('<ApplicantSidebarItems />', () => {
	it('should render the component', () => {
		render(<ApplicantSidebarItems />);

		expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Vagas' })).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: 'Perfil Público' }),
		).toBeInTheDocument();
	});
});
