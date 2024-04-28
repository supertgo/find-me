import 'components/ConfigInfoWrapper/ConfigInfoWrapper.mock';
import 'components/Sidebar/Sidebar.mock';
import { render, screen } from 'utils/test/test-utils';
import { Config } from './Config';

describe('<Config />', () => {
  it('should render the component', () => {
    render(<Config />, {
      queryProvider: true,
    });

    expect(screen.getAllByTestId('Mock ConfigInfoWrapper')).toHaveLength(3);

    expect(screen.getByText('Configurações')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Salvar Perfil' }),
    ).toBeInTheDocument();
  });
});
