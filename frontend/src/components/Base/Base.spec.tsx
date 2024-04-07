import { render, screen } from 'utils/test/test-utils';
import { Base } from './Base';

describe('<Base />', () => {
  it('should render the component', () => {
    render(
      <Base>
        <p>Base</p>
      </Base>,
      {
        queryProvider: true
      }
    );

    expect(screen.getByText('Base')).toBeInTheDocument();
  });
});
