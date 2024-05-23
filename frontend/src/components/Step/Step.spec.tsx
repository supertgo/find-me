import { render, screen } from 'utils/test/test-utils';
import { Step, StepProps } from './Step';
import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';
import { expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const props: StepProps = {
	icon: <DropboxIcon />,
	itemStep: 1,
	title: 'Step 1',
	currentStep: 1,
	maxStep: 3,
	onClick: () => ({}),
	isActive: false,
};

describe('<Step />', () => {
	it('should render the component', () => {
		render(<Step {...props} />);

		expect(
			screen.getByText(`Passo ${props.currentStep} / ${props.maxStep}`),
		).toBeInTheDocument();

		expect(screen.getByText(props.title)).toBeInTheDocument();
	});
	it('should have active icon when currentStep is greater than itemStep', () => {
		render(<Step {...props} currentStep={2} itemStep={1} />);

		const iconWrapper = screen.getByTestId('icon-wrapper');
		expect(iconWrapper).toHaveStyle(`background: ${theme.colors.primary}`);
	});
	it('should have active icon when currentStep is equal to itemStep', () => {
		render(<Step {...props} currentStep={2} itemStep={2} />);

		const iconWrapper = screen.getByTestId('icon-wrapper');
		expect(iconWrapper).toHaveStyle(`background: ${theme.colors.primary}`);
	});

	it('should have inactive icon when currentStep is less than itemStep', () => {
		render(<Step {...props} currentStep={0} itemStep={1} />);

		const iconWrapper = screen.getByTestId('icon-wrapper');
		expect(iconWrapper).toHaveStyle(`background: ${theme.colors.lightGrey}`);
	});
});
