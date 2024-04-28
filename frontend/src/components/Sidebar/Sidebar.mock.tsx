import { vi } from "vitest"

vi.mock('components/Sidebar/Sidebar', () => ({
  Sidebar: () => {
    return <div data-testid="Mock Sidebar" />
  },
}))
