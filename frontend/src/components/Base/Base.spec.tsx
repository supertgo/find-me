import { render, screen } from 'utils/test/test-utils'
import { Base } from './Base'

describe('<Base />', () => {
  it('should render the component', () => {
    render(
      <Base />
    )

    expect(screen.getByText('Base')).toBeInTheDocument()
  })
})
