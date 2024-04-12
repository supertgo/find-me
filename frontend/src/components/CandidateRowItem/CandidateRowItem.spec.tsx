import { render, screen } from 'utils/test/test-utils'
import { CandidateRowItem } from './CandidateRowItem'

describe('<CandidateRowItem />', () => {
  it('should render the component', () => {
    render(
      <CandidateRowItem />
    )

    expect(screen.getByText('CandidateRowItem')).toBeInTheDocument()
  })
})
