import { render, screen } from 'utils/test/test-utils';
import { Heading, HeadingProps } from './Heading';

const props: HeadingProps = {
  variant: 'h3',
  text: 'heading',
};

describe('<Heading />', () => {
  it('should render the variant h3', () => {
    render(<Heading {...props} />);

    expect(
      screen.getByRole('heading', { name: props.text }),
    ).toBeInTheDocument();
  });
});
