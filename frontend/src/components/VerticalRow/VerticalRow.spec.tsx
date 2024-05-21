import { render } from 'utils/test/test-utils';
import { VerticalRow } from './VerticalRow';

describe('<VerticalRow />', () => {
	it('should render the component', () => {
		const { container } = render(<VerticalRow />);
		expect(container).toMatchInlineSnapshot(`
			.c0 {
			  background: #d6ddeb;
			  width: 0.1rem;
			  height: 4rem;
			}

			<div>
			  <div
			    class="Toastify"
			  />
			  <div
			    class="c0"
			  />
			</div>
		`);
	});
});
