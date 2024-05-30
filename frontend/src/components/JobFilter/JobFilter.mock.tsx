import { vi } from "vitest"

vi.mock('components/JobFilter', () => ({
  JobFilter: () => {
    return <div data-testid="Mock JobFilter" />
  },
}))
