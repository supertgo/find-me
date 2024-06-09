import { render, screen } from 'utils/test/test-utils'
import { MyApplications } from './MyApplications'

describe('<MyApplications />', () => {
  it('should render the component', () => {
    render(
      <MyApplications />
    )

    expect(screen.getByText('MyApplications')).toBeInTheDocument()
  })
})
