import 'components/Sidebar/Sidebar.mock';
import { render, screen } from 'utils/test/test-utils';
import { MyApplications, MyApplicationsProps, NoDataFound } from '.';
import { mockJobApplication } from 'test/mocks/external/job-application';

const props: MyApplicationsProps = {
	initialData: {
		data: mockJobApplication,
	},
};

describe('<MyApplications />', () => {
	it('should render the component', () => {
		render(<MyApplications {...props} />, {
			queryProvider: true,
		});

    expect(screen.getByRole('heading', { name: /Minhas Candidaturas/i })).toBeInTheDocument()
		expect(screen.getByText(/Continue assim/i)).toBeInTheDocument();
    expect(screen.getByText(mockJobApplication[0].job!.name)).toBeInTheDocument()
	});
});

describe('<NoDataFound />', () => {
	it('should render the component', () => {
		render(<NoDataFound />);

    expect(screen.getByText('Opss :(')).toBeInTheDocument()
    expect(screen.getByText('Parece que você não se candidatou à nenhuma vaga')).toBeInTheDocument()
	});
});
