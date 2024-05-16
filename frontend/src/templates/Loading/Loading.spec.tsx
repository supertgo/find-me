import { render, screen } from 'utils/test/test-utils'
import { Loading } from './Loading'

describe('<Loading />', () => {
  it('should render the component', () => {
    render(
      <Loading />
    )

    expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})
