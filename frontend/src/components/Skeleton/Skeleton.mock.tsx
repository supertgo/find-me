import { vi } from "vitest"

vi.mock('components/Skeleton', () => ({
  Skeleton: () => {
    return <div data-testid="Mock Skeleton" />
  },
}))
