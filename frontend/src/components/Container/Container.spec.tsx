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
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div>
        <div
          class="Toastify"
        />
        <div
          class="c0"
        >
          <span>
            Won Games
          </span>
        </div>
      </div>
    `);
  });
});
