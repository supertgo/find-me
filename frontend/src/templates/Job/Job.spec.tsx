import { render, screen } from 'utils/test/test-utils'
import { Job } from './Job'

describe('<Job />', () => {
  it('should render the component', () => {
    render(
      <Job />
    )

    expect(screen.getByText('Job')).toBeInTheDocument()
  })
})
