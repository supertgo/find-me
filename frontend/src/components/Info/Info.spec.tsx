import { render, screen } from 'utils/test/test-utils'
import { Info, InfoProps } from '.'

const props: InfoProps = {
  title: 'Salário',
  text: 'R$ 5892,00'
}

describe('<Info />', () => {
  it('should render the component', () => {
    render(
      <Info {...props} />
    )

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.text)).toBeInTheDocument()
  })
})
