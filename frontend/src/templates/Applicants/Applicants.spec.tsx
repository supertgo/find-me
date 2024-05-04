import { render, screen } from 'utils/test/test-utils'
import { Applicants } from './Applicants'

describe('<Applicants />', () => {
  it('should render the component', () => {
    render(
      <Applicants />, {
        queryProvider: true
      }
    )

    expect(screen.getByText('Applicants')).toBeInTheDocument()
  })
})
