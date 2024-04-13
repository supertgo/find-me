import { render, screen } from 'utils/test/test-utils'
import { Pill } from './Pill'

describe('<Pill />', () => {
  it('should render the component', () => {
    render(
      <Pill text="Pill" />
    )

    expect(screen.getByText('Pill')).toBeInTheDocument()
  })
})
