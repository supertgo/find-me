import { vi } from "vitest"

vi.mock('icons/HomeIcon/HomeIcon', () => ({
  HomeIcon: () => {
    return <div data-testid="Mock HomeIcon" />
  },
}))
