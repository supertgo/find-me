import { render, screen } from 'utils/test/test-utils'
import { Auth } from './Auth'

describe('<Auth />', () => {
  it('should render the component', () => {
    render(
      <Auth />
    )

    expect(screen.getByText('Entre com a sua conta')).toBeInTheDocument()
    expect(screen.getByText('Faça o seu cadastro')).toBeInTheDocument()
    expect(screen.getByText('Ainda não tem uma conta?')).toBeInTheDocument()
    expect(screen.getByText('Esqueci minha senha')).toBeInTheDocument()
    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })
})
