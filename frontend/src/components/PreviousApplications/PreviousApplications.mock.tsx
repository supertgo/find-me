import { vi } from "vitest"

vi.mock('components/PreviousApplications/PreviousApplications', () => ({
  PreviousApplications: () => {
    return <div data-testid="Mock PreviousApplications" />
  },
}))
