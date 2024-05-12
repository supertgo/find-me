import { vi } from "vitest"

vi.mock('components/Table/TableData/TableData', () => ({
  TableData: () => {
    return <div data-testid="Mock TableData" />
  },
}))
