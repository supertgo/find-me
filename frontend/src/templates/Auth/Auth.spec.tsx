import { render, screen } from 'utils/test/test-utils';
import { Auth } from './Auth';

describe('<Auth />', () => {
  it('should render the component', () => {
    render(
      <Auth>
        <h1>children</h1>
      </Auth>,
    );

    expect(screen.getByText('FindMe')).toBeInTheDocument();
    expect(
      screen.getByText(
        'A melhor plataforma para você encontrar seu novo trampo',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /children/i }),
    ).toBeInTheDocument();
  });
});
