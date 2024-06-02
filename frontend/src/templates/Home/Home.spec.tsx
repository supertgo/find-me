import 'components/PreviousApplications/PreviousApplications.mock';
import 'components/Sidebar/Sidebar.mock';
import { useLoggedUserStore } from 'stores/loggedUserStore';
import { act, render, renderHook, screen } from 'utils/test/test-utils';
import { Home } from './Home';

describe('<Home />', () => {
	it('should render the component', () => {
		const { result } = renderHook(() => useLoggedUserStore());
		render(<Home />, {
			queryProvider: true,
		});

		act(() => {
			result.current.setUser({
				type: 'employee',
			});
		});
    
		expect(screen.getByTestId('Mock PreviousApplications')).toBeInTheDocument();

		expect(
			screen.getByText('Visualizar histórico de todas as aplicações'),
		).toBeInTheDocument();
	});
});
