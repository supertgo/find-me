import { render } from 'utils/test/test-utils';
import { VerticalRow } from './VerticalRow';

describe('<VerticalRow />', () => {
	it('should render the component', () => {
		const { container } = render(<VerticalRow />);
		expect(container.firstChild).toMatchInlineSnapshot(`
			<div
			  class="Toastify"
			/>
		`);
	});
});
