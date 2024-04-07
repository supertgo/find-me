import { render, screen } from 'utils/test/test-utils'
import { PreviousApplications } from './PreviousApplications'

describe('<PreviousApplications />', () => {
  it('should render the component', () => {
    render(
      <PreviousApplications />
    )

    expect(screen.getByText('PreviousApplications')).toBeInTheDocument()
  })
})
