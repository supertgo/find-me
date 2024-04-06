import { render, screen } from 'utils/test-utils'
import Button from './Button'

describe('<Button />', () => {
  it('should render the component', () => {
    render(
      <Button />
    )

    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
