import { vi } from "vitest"

vi.mock('components/ResumeCard/ResumeCard', () => ({
  ResumeCard: () => {
    return <div data-testid="Mock ResumeCard" />
  },
}))
