import { vi } from "vitest"

vi.mock('components/ConfigInfoWrapper', () => ({
  ConfigInfoWrapper: () => {
    return <div data-testid="Mock ConfigInfoWrapper" />
  },
}))
