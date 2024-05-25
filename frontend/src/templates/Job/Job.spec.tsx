import 'components/Sidebar/Sidebar.mock';
import 'components/ModalCoverLetter/ModalCoverLetter.mock';
import { jobMock } from 'test/mocks/external/job';
import { render, renderHook, screen, act } from 'utils/test/test-utils';
import { Job, JobProps } from './Job';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';

const props: JobProps = {
	...jobMock,
};

describe('<Job />', () => {
	it('should render the component', () => {
		render(<Job {...props} />, {
			queryProvider: true,
		});

		expect(screen.getAllByText(props.name)).toHaveLength(2);
		expect(screen.getByText(/Salário/i)).toBeInTheDocument();

		if (!!props.competences?.length) {
			expect(screen.getByText('Não há competências')).toBeInTheDocument();
		}

		expect(screen.getByText(props.description)).toBeInTheDocument();
	});

	it('should show apply text if the user is a employee', () => {
		const { result } = renderHook(() => useLoggedUserStore());

		act(() => {
			result.current.setUser({
				name: 'Legolas',
				id: 1337,
				type: 'employee',
				email: 'legolas@gmail.com',
			});
		});

		render(<Job {...props} user_id={1337} />, {
			queryProvider: true,
		});

    expect(screen.getByTestId('Mock ModalCoverLetter')).toBeInTheDocument
	});

	it('should show apply text disabled button as employee', () => {
		const { result } = renderHook(() => useLoggedUserStore());

		render(<Job {...props} user_id={1337} is_available={false} />, {
			queryProvider: true,
		});

		act(() => {
			result.current.setUser({
				name: 'Legolas',
				id: 1337,
				type: 'employee',
				email: 'legolas@gmail.com',
			});
		});

    expect(screen.getByTestId('Mock ModalCoverLetter')).toBeInTheDocument()
	});

	it('should show delete job icon if the current user is the owner', () => {
		const { result } = renderHook(() => useLoggedUserStore());

		render(<Job {...props} user_id={1337} />, {
			queryProvider: true,
		});

		act(() => {
			result.current.setUser({
				name: 'Legolas',
				id: 1337,
				type: 'recruiter',
				email: 'legolas@gmail.com',
			});
		});

		expect(
			screen.getByRole('button', { name: /Excluir Vaga/i }),
		).toBeInTheDocument();
	});
});
