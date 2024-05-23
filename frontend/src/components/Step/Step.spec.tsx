import { render, screen } from 'utils/test/test-utils';
import { Step, StepProps } from './Step';
import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';
import { expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { IconWrapper } from './Step.styles';

const props: StepProps = {
	icon: <DropboxIcon />,
	itemStep: 1,
	title: 'Step 1',
	currentStep: 1,
	maxStep: 3,
	onClick: () => ({}),
	isActive: false,
	IconWrapper: function (IconWrapper: any): HTMLElement {
		throw new Error('Function not implemented.');
	},
};

describe('<Step />', () => {
	it('should render the component', () => {
		render(<Step {...props} />);

		expect(
			screen.getByText(`Passo ${props.currentStep} / ${props.maxStep}`),
		).toBeInTheDocument();

		expect(screen.getByText(props.title)).toBeInTheDocument();
	});
	it('should have active icon when currentStep is greater than or equal to itemStep', () => {
		render(
			<ThemeProvider theme={theme}>
				<Step {...props} currentStep={2} itemStep={1} />
			</ThemeProvider>,
		);

		const iconWrapper = screen.getByTestId('icon-wrapper');
		expect(iconWrapper).toHaveStyle(`background: ${theme.colors.primary}`);
	});

	it('should have inactive icon when currentStep is less than itemStep', () => {
		render(
			<ThemeProvider theme={theme}>
				<Step {...props} currentStep={0} itemStep={1} />
			</ThemeProvider>,
		);

		const iconWrapper = screen.getByTestId('icon-wrapper');
		expect(iconWrapper).toHaveStyle(`background: ${theme.colors.lightGrey}`);
	});
});
