import { render, screen } from 'utils/test/test-utils';
import { JobItem } from './JobItem';

describe('<JobItem />', () => {
  it('should render the component', () => {
    render(<JobItem />);

    expect(
      screen.getByRole('button', { name: /Aplicar/i }),
    ).toBeInTheDocument();
  });
});
