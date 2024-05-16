import { render } from 'utils/test/test-utils';
import { Container } from './Container';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>Won Games</span>
      </Container>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Toastify"
        />
        <div
          class="sc-beySPh kmpbji"
        >
          <span>
            Won Games
          </span>
        </div>
      </div>
    `);
  });
});
