import { render, screen } from 'utils/test/test-utils'
import { Sidebar } from './Sidebar'

describe('<Sidebar />', () => {
  it('should render the component', () => {
    render(
      <Sidebar />
    )

    expect(screen.getByText('Sidebar')).toBeInTheDocument()
  })
})
