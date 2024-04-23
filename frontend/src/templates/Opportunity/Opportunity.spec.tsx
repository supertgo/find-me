import { render, screen } from 'utils/test/test-utils'
import { Opportunity } from './Opportunity'

describe('<Opportunity />', () => {
  it('should render the component', () => {
    render(
      <Opportunity />,
      {
        queryProvider: true
      }
    )

    expect(screen.getByText('Opportunity')).toBeInTheDocument()
  })
})
