import { render, screen } from 'utils/test/test-utils';
import { expect, it, describe } from 'vitest';
import { NotFound } from './NotFound';

describe('<NotFound />', () => {
  it('should render the component', () => {
    render(<NotFound />, {
      queryProvider: true,
    });

    expect(screen.getByText('Opss :(')).toBeInTheDocument();
    expect(screen.getByText('Parece que algo deu errado')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Voltar para a home/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Algo deu errado!/i }),
    ).toBeInTheDocument();
  });
});
