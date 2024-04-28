import { render, screen } from 'utils/test/test-utils';
import { ConfigInfoWrapper, ConfigInfoWrapperProps } from './ConfigInfoWrapper';

const props: ConfigInfoWrapperProps = {
  title: 'Informações',
  children: <p>ConfigInfoWrapper</p>,
};

describe('<ConfigInfoWrapper />', () => {
  it('should render the component', () => {
    render(<ConfigInfoWrapper {...props} />);

    expect(screen.getByText('ConfigInfoWrapper')).toBeInTheDocument();
  });
  it('should render descripiton when provided', () => {
    render(<ConfigInfoWrapper {...props} description="a new description" />);

    expect(screen.getByText('ConfigInfoWrapper')).toBeInTheDocument();
    expect(screen.getByText('a new description')).toBeInTheDocument();
  });
});
