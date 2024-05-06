import { render, screen } from 'utils/test/test-utils';
import { ApplicationHeader } from './ApplicationHeader';

describe('<ApplicationHeader />', () => {
  it('should render the component', () => {
    render(<ApplicationHeader />);

    expect(screen.getByText('Empresa')).toBeInTheDocument();
    expect(screen.getByText('Onfly')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Anuncie uma vaga/i }),
    ).toBeInTheDocument();
  });
});
