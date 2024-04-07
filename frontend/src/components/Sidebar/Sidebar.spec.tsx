import { render, screen } from 'utils/test/test-utils';
import 'components/Button/Button.mock';
import { Sidebar } from './Sidebar';

describe('<Sidebar />', () => {
  it('should render the component', () => {
    render(<Sidebar />, {
      queryProvider: true,
    });

    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Button')).toBeInTheDocument();
  });
});
