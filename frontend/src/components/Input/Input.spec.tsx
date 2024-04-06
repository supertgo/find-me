import { render, screen } from 'utils/test-utils'
import Input from './Input'

describe('<Input />', () => {
  it('should render the component', () => {
    render(
      <Input />
    )

    expect(screen.getByText('Input')).toBeInTheDocument()
  })
})
