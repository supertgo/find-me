import { render, renderHook, screen, act } from 'utils/test/test-utils';
import { CreateJobHeader, CreateJobHeaderProps } from './CreateJobHeader';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';

const props: CreateJobHeaderProps = {
	title: 'Vagas',
};

describe('<CreateJobHeader />', () => {
	it('should render the component', () => {
		render(<CreateJobHeader {...props} />);

		expect(
			screen.getByRole('heading', { name: props.title }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: /Anuncie uma vaga/i }),
		).toBeInTheDocument();
	});

	it('should not render create job button link for an employee', () => {
		const { result } = renderHook(() => useLoggedUserStore());

		act(() =>
			result.current.setUser({
				name: 'davi',
				type: 'employee',
				email: 'davi@onfly.com',
			}),
		);
		render(<CreateJobHeader {...props} />);

		expect(
			screen.queryByRole('link', { name: /Anuncie uma vaga/i }),
		).not.toBeInTheDocument();
	});
});
