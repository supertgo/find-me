import { render, screen } from 'utils/test/test-utils';
import { TableLoader, TableLoaderProps } from './TableLoader';

const props: TableLoaderProps = {
  rows: 10,
  columns: 10,
};

describe('<TableLoader />', () => {
  it('should render the component', () => {
    render(<TableLoader {...props} />);

    screen.debug();

    expect(screen.getAllByTestId('loading-td')).toHaveLength(
      props.columns * props.rows,
    );
  });
});
