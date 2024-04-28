import { render, screen } from 'utils/test/test-utils';
import { Step, StepProps } from './Step';
import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';
import { expect } from 'vitest';

const props: StepProps = {
  icon: <DropboxIcon />,
  itemStep: 1,
  title: 'Step 1',
  currentStep: 1,
  maxStep: 3,
  onClick: () => ({}),
};

describe('<Step />', () => {
  it('should render the component', () => {
    render(<Step {...props} />);

    expect(
      screen.getByText(`Passo ${props.currentStep} / ${props.maxStep}`),
    ).toBeInTheDocument();

    expect(screen.getByText(props.title)).toBeInTheDocument()
  });
});
