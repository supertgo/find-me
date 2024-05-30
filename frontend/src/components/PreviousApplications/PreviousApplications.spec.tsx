import 'components/PreviousApplicationsItem/PreviousApplicationsItem.mock';
import { render, screen } from 'utils/test/test-utils';
import { PreviousApplications } from '.';
import { applications } from 'test/mocks/external/previous-applications';
import { vi } from 'vitest';
import { isLoading } from 'components/Button/Button.stories';

const mocks = vi.hoisted(() => {
	return {
		usePreviousApplications: vi.fn(),
	};
});

vi.mock('hooks/usePreviousApplications/usePreviousApplications', () => {
	return {
		usePreviousApplications: mocks.usePreviousApplications,
	};
});

describe('<PreviousApplications />', () => {
	it('should render the component', () => {
		mocks.usePreviousApplications.mockReturnValueOnce({
			data: applications,
			isLoading: false,
		});
		render(<PreviousApplications title="Test" />);

		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});
