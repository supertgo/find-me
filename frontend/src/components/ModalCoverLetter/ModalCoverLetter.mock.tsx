import { vi } from "vitest"

vi.mock('components/ModalCoverLetter', () => ({
  ModalCoverLetter: () => {
    return <div data-testid="Mock ModalCoverLetter" />
  },
}))
