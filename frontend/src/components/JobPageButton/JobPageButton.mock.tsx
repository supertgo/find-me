import { vi } from 'vitest';

vi.mock('components/JobPageButton', () => ({
	JobPageButton: () => {
		return <div data-testid="Mock JobPageButton" />;
	},
}));
