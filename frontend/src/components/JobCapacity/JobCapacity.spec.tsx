import { render, screen } from 'utils/test/test-utils'
import { JobCapacity, JobCapacityProps } from '.'

const props: JobCapacityProps = {
  applicants: 50,
  applications_amount: 100
}

describe('<JobCapacity />', () => {
  it('should render the component', () => {
    render(
      <JobCapacity {...props} />
    )

    expect(screen.getByText(`${props.applicants} aplicados`)).toBeInTheDocument()
    expect(screen.getByText(`Máximo ${props.applications_amount}`)).toBeInTheDocument()
  })
  
  it('should not render bottom information', () => {
    render(
      <JobCapacity {...props} showBottomInformation={false} />
    )

    expect(screen.queryByText(`${props.applicants} aplicados`)).not.toBeInTheDocument()
    expect(screen.queryByText(`Máximo ${props.applications_amount}`)).not.toBeInTheDocument()
  })
})
