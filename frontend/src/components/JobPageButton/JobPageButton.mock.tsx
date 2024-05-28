import { vi } from 'vitest';

vi.mock('components/JobPageButton/JobPageButton', () => ({
	JobPageButton: () => {
		return <div data-testid="Mock JobPageButton" />;
	},
}));
