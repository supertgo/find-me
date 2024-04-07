import { render, screen } from 'utils/test/test-utils'
import { Home } from './Home'

describe('<Home />', () => {
  it('should render the component', () => {
    render(
      <Home />
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
