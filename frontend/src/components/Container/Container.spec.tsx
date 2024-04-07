import { theme } from 'styles/theme';
import { render } from 'utils/test/test-utils';
import { Container } from './Container';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>Won Games</span>
      </Container>,
    );

    // expect(container.firstChild).toHaveStyleRule(
    //   'max-width',
    //   theme.grid.container,
    // );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="Toastify"
      />
    `);
  });
});
