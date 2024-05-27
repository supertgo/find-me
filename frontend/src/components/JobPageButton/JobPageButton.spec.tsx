import 'components/ModalCoverLetter/ModalCoverLetter.mock';
import { render, screen } from 'utils/test/test-utils';
import { JobPageButton, JobPageButtonProps } from './JobPageButton';

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

describe('<JobPageButton />', () => {
	it('should render a link to applicants if the user is a recruiter', () => {
		render(<JobPageButton {...props} />, {
			queryProvider: true,
		});

		expect(
			screen.getByRole('button', { name: /Visualizar Candidatos/i }),
		).toBeInTheDocument();
	});

	it('should be able to apply to a job as an employee if job is available', () => {
		render(
			<JobPageButton {...props} user={{ ...props.user, type: 'employee' }} />,
			{
				baseElement: true,
			},
		);

		expect(screen.getByTestId('Mock ModalCoverLetter')).toBeInTheDocument();
	});
});
