import { render, screen } from 'utils/test/test-utils'
import { Avatar } from './Avatar'

describe('<Avatar />', () => {
  it('should render the component', () => {
    render(
      <Avatar user="user name" />
    )

    expect(screen.getByText('user name')).toBeInTheDocument()
  })
  
  it('should return only the first name', () => {
    render(
      <Avatar user="user name" showOnlyFirstName />
    )

    expect(screen.getByText('user')).toBeInTheDocument()
  })
  
  it('should render with circle only', () => {
    render(
      <Avatar user="user name" showUsername={false} />
    )

    expect(screen.queryByText('user')).not.toBeInTheDocument()
    expect(screen.queryByText('user name')).not.toBeInTheDocument()
  })
})
