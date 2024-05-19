import { render } from 'utils/test/test-utils';
import { Loading } from './Loading';

describe('<Loading />', () => {
  it('should render the component', () => {
    const { container } = render(<Loading />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        min-height: 100vh;
        width: 100vw;
        min-width: 100vw;
        background-color: #FFF;
      }

      .c1 {
        animation: ddgDUF 1s linear infinite;
        transform: translateZ(0);
        border-top: 2px solid #2563EB;
        border-right: 2px solid #2563EB;
        border-bottom: 2px solid #2563EB;
        border-left: 4px solid #2563EB;
        background: transparent;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
      }

      <div>
        <div
          class="Toastify"
        />
        <div
          aria-busy="true"
          class="c0"
        >
          <div
            class="c1"
          />
        </div>
      </div>
    `);
  });
});
