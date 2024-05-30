import { vi } from "vitest"

vi.mock('components/PreviousApplicationsItem', () => ({
  PreviousApplicationsItem: () => {
    return <div data-testid="Mock PreviousApplicationsItem" />
  },
}))

