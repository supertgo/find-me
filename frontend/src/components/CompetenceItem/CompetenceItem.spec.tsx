import { render, screen } from 'utils/test/test-utils'
import { CompetenceItem, CompetenceItemProps } from './CompetenceItem'

const props: CompetenceItemProps = {
  name: 'PHP',
  id: 10
}

describe('<CompetenceItem />', () => {
  it('should render the component', () => {
    render(
      <CompetenceItem {...props} />
    )

    expect(screen.getByText(props.name)).toBeInTheDocument()
  })
})
