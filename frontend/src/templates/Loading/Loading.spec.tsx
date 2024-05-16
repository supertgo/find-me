import { render, screen } from 'utils/test/test-utils';
import { Loading } from './Loading';

describe('<Loading />', () => {
  it('should render the component', () => {
    const { container } = render(<Loading />);

    expect(screen.getByLabelText('Carregando...')).toBeInTheDocument()

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Toastify"
        />
        <div
          aria-label="Carregando..."
          class="sc-beySPh khesAl"
        >
          <div
            class="sc-guDLey irBXjj"
          />
        </div>
      </div>
    `);
  });
});
