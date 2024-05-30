import 'components/PreviousApplicationsItem/PreviousApplicationsItem.mock'
import { render, screen } from 'utils/test/test-utils';
import { PreviousApplications } from '.';
import { applications } from 'test/mocks/external/previous-applications';

describe('<PreviousApplications />', () => {
  it('should render the component', () => {
    render(<PreviousApplications applications={applications} title="Test" />);

    expect(screen.getAllByTestId('Mock PreviousApplicationsItem')).toHaveLength(applications.length);
  });
});
