import { render, screen } from 'utils/test-utils'
import Auth from './Auth'

describe('<Auth />', () => {
  it('should render the component', () => {
    render(
      <Auth />
    )

    expect(screen.getByText('Auth')).toBeInTheDocument()
  })
})
