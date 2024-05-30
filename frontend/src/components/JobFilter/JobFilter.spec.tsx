import { render, screen } from 'utils/test/test-utils';
import { JobFilter } from '.';

const textsToMatch = [
  'Tipo de Contratação',
  'Categorias',
  'Nível de cargo',
  'Faixa Salarial',
];

describe('<JobFilter />', () => {
  it('should render the component', () => {
    render(<JobFilter />);

    textsToMatch.forEach((text) =>
      expect(screen.getByText(text)).toBeInTheDocument(),
    );
  });
});
