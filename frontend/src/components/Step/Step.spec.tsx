import { render, screen } from 'utils/test/test-utils'
import { Step } from './Step'

describe('<Step />', () => {
  it('should render the component', () => {
    render(
      <Step />
    )

    expect(screen.getByText('Step')).toBeInTheDocument()
  })
})
