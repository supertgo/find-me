import 'components/Sidebar/Sidebar.mock';
import 'components/Table/TableData/TableData.mock';
import 'components/Table/TableHeader/TableHeader.mock';
import { render, screen } from 'utils/test/test-utils';

import { Applicants } from './Applicants';
describe('<Applicants />', () => {
  it('should render the doots on loading', () => {
    render(<Applicants />, {
      queryProvider: true,
    });

    expect(screen.getByText('Total de Candidatos: ...')).toBeInTheDocument();
    expect(screen.getByTestId('Mock TableData')).toBeInTheDocument();
  });
});
