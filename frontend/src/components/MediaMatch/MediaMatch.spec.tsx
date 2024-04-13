import { render, screen } from 'utils/test/test-utils'
import { MediaMatch } from './MediaMatch'

describe('<MediaMatch />', () => {
  it('should render the component', () => {
    const { container } = render(
      <MediaMatch />
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="Toastify"
      />
    `)
  })
})
