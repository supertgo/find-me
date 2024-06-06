import { render, screen } from 'utils/test/test-utils';
import { Textarea } from './Textarea';

describe('<Textarea />', () => {
	it('should render the component', () => {
		render(<Textarea defaultValue="test" />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});
});
