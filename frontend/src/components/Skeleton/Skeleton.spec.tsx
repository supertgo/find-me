import { render } from 'utils/test/test-utils';
import { Skeleton } from './Skeleton';

describe('<Skeleton />', () => {
  it('should render the component', () => {
    const { container } = render(<Skeleton />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="Toastify"
      />
    `);
  });
});
