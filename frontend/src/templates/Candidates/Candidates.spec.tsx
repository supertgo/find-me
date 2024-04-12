import { render, screen } from 'utils/test/test-utils'
import { Candidates } from './Candidates'

describe('<Candidates />', () => {
  it('should render the component', () => {
    render(
      <Candidates />, {
        queryProvider: true
      }
    )

    expect(screen.getByText('Candidates')).toBeInTheDocument()
  })
})
