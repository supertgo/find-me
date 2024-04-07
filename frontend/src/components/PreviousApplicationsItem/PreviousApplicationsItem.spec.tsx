import { render, screen } from 'utils/test/test-utils'
import { PreviousApplicationsItem } from './PreviousApplicationsItem'

describe('<PreviousApplicationsItem />', () => {
  it('should render the component', () => {
    render(
      <PreviousApplicationsItem />
    )

    expect(screen.getByText('PreviousApplicationsItem')).toBeInTheDocument()
  })
})
