import 'components/Sidebar/Sidebar.mock';
import { fireEvent, render, screen } from 'utils/test/test-utils';
import { Opportunity } from './Opportunity';

const textsToMatch = [
  'Informações do emprego',
  'Título do Emprego',
  'Tipo de Contratação',
  'Tempo Integral',
  'Meio Período',
  'Remoto',
  'Estágio',
  'Contrato',
  'Salário',
];

const textsToMatchNextSection = [
  'Responsabilidades',
  'Qualificações',
  'Preferências',
];

describe('<Opportunity />', () => {
  it('should render the first content in component', () => {
    render(<Opportunity />, {
      queryProvider: true,
    });

    textsToMatch.forEach((text) =>
      expect(screen.getByText(text)).toBeInTheDocument()
    );
  });
  it('should render the first content in component', () => {
    render(<Opportunity />, {
      queryProvider: true,
    });

    fireEvent.click(
      screen.getByText('Descrição do emprego')
    )

    textsToMatchNextSection.forEach((text) =>
      expect(screen.getByText(text)).toBeInTheDocument()
    );
  });
});
