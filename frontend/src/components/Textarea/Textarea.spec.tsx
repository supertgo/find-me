import { render, screen } from 'utils/test/test-utils'
import { Textarea } from './Textarea'

describe('<Textarea />', () => {
  it('should render the component', () => {
    render(
      <Textarea />
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('should render additional information when maxLength is provided', () => {
    const props = {
      maxLength: 10
    }
    render(
      <Textarea {...props} />
    )

    expect(screen.getByText(`Máximo: ${props.maxLength} caracteres`)).toBeInTheDocument()
    expect(screen.getByText(`0/${props.maxLength}`)).toBeInTheDocument()
  })
})
