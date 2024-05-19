import { render, screen } from 'utils/test/test-utils';
import { StepWrapper } from './StepWrapper';

describe('<StepWrapper />', () => {
	it('should render the component', () => {
		render(
			<StepWrapper>
				<p>step wrapper children</p>
			</StepWrapper>,
		);

		expect(screen.getByText('step wrapper children')).toBeInTheDocument();
	});
});
