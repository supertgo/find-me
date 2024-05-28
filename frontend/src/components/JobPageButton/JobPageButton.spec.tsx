import 'components/ModalCoverLetter/ModalCoverLetter.mock';
import { render, screen } from 'utils/test/test-utils';
import { JobPageButton, JobPageButtonProps } from './JobPageButton';
import { vi } from 'vitest';
import { mockJobApplication } from 'test/mocks/external/job-application';

const props: JobPageButtonProps = {
	job: {
		id: 10,
		is_available: true,
	},
	user: {
		id: 1,
		type: 'recruiter',
	},
};

const mocks = vi.hoisted(() => {
	return {
		useQuery: vi.fn(),
	};
});

vi.mock('@tanstack/react-query', () => {
	return {
		useQuery: mocks.useQuery,
	};
});

describe('<JobPageButton />', () => {
	it('should render a link to applicants if the user is a recruiter', () => {
		mocks.useQuery.mockReturnValueOnce({
			data: {
        data: {
          data: []
        },
			},
			isLoading: false,
		});
		render(<JobPageButton {...props} />);

		expect(
			screen.getByRole('link', { name: /Visualizar Candidatos/i }),
		).toBeInTheDocument();
	});

	it('should be able to apply to a job as an employee if job is available', () => {
		mocks.useQuery.mockReturnValueOnce({
			data: {
				data: {
					data: mockJobApplication,
				},
			},
			isLoading: false,
		});

		render(
			<JobPageButton {...props} user={{ ...props.user, type: 'employee' }} />,
		);

		expect(screen.getByTestId('Mock ModalCoverLetter')).toBeInTheDocument();
	});
});
