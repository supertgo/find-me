import { render, screen } from 'utils/test/test-utils';
import { recruiterUserMock } from 'test/mocks/external/users';
import { Sidebar } from './Sidebar';
import { vi } from 'vitest';

vi.mock('stores/loggedUserStore', () => ({
  useLoggedUserStore: () => {
    return recruiterUserMock;
  },
}));

describe('<Sidebar />', () => {
  it('should render the component', () => {
    render(<Sidebar />, {
      queryProvider: true,
    });

    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByTitle('Sair')).toBeInTheDocument()
  });
});
