import { render, screen } from 'utils/test/test-utils'
import { Title } from './Title'

describe('<Title />', () => {
  it('should render the component', () => {
    render(
      <Title />
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
  })
})
