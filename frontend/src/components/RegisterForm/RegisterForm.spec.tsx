import { render, screen } from 'utils/test/test-utils';
import { RegisterForm } from './RegisterForm';

describe('<RegisterForm />', () => {
  it('should render the component', () => {
    render(<RegisterForm />);

    expect(screen.getByText('Crie a sua conta')).toBeInTheDocument();
    expect(screen.getByText('Sou recrutador')).toBeInTheDocument();
    expect(screen.getByText('Já tem uma conta?')).toBeInTheDocument();
    expect(screen.getByText('Faça login')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Cadastrar/i }),
    ).toBeInTheDocument();
  });
});
