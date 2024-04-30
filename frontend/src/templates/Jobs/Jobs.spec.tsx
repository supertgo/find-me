import 'components/Input/Input.mock';
import 'components/JobFilter/JobFilter.mock';
import { render, screen } from 'utils/test/test-utils';
import { Jobs } from './Jobs';

describe('<Jobs />', () => {
  it('should render the component', () => {
    const { container } = render(<Jobs />, {
      queryProvider: true,
    });

    expect(container.getElementsByClassName('sc-blmEgr sc-dJGMql ddGRwL kDPwos').length).toBe(4);
    expect(screen.getByTestId('Mock JobFilter')).toBeInTheDocument();
  });
});
