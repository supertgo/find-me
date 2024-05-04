import { render, screen } from 'utils/test/test-utils'
import { Applicant } from './Applicant'

describe('<Applicant />', () => {
  it('should render the component', () => {
    render(
      <Applicant />
    )

    expect(screen.getByText('Applicant')).toBeInTheDocument()
  })
})
