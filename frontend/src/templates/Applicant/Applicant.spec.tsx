import 'components/Sidebar/Sidebar.mock';
import { render, screen } from 'utils/test/test-utils';
import { Applicant } from './Applicant';
import { completeUserMock } from 'test/mocks/external/users';

describe('<Applicant />', () => {
  it('should render the component', () => {
    render(<Applicant user={completeUserMock} />);

    expect(screen.getByText('Detalhes do Candidato')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText(completeUserMock.email)).toBeInTheDocument();
    expect(screen.getByText('Sobre mim')).toBeInTheDocument();
    expect(screen.getByText(completeUserMock.about_me!)).toBeInTheDocument();
    expect(screen.getByText('Emprego Atual')).toBeInTheDocument();
    expect(screen.getByText('Desempregado')).toBeInTheDocument();
    expect(screen.getByText('Qualificação Acadêmica')).toBeInTheDocument();
    expect(
      screen.getByText(completeUserMock.academic_records![0].institution),
    ).toBeInTheDocument();
    expect(screen.getByText('Área de Estudo')).toBeInTheDocument();
    expect(
      screen.getByText(completeUserMock.academic_records![0].field_of_study),
    ).toBeInTheDocument();
  });
});
