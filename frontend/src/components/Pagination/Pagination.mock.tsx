import { vi } from 'vitest';

vi.mock('components/Applicants/Applicants', () => ({
  Applicants: () => {
    return <div data-testid="Mock Applicants" />;
  },
}));
