import 'components/Input/Input.mock';
import 'components/JobFilter/JobFilter.mock';
import 'components/JobItem/JobItem.mock';
import { render, screen } from 'utils/test/test-utils';
import { Jobs } from './Jobs';

describe('<Jobs />', () => {
  it('should render the component', () => {
    render(<Jobs />, {
      queryProvider: true,
    });

    expect(screen.getByTestId('Mock JobFilter')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock JobItem')).toHaveLength(4);
  });
});
