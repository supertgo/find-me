import 'components/PreviousApplicationsItem/PreviousApplicationsItem.mock';
import { render, screen } from 'utils/test/test-utils';
import { PreviousApplications } from '.';
import { vi } from 'vitest';

const mocks = vi.hoisted(() => {
	return {
		usePreviousApplications: vi.fn(),
	};
});

vi.mock('./usePreviousApplications', () => {
	return {
		usePreviousApplications: mocks.usePreviousApplications,
	};
});

describe('<PreviousApplications />', () => {
	it('should render the component', () => {
		mocks.usePreviousApplications.mockReturnValueOnce({
			data: {
				data: [],
			},
			isLoading: false,
		});
		render(<PreviousApplications title="Test" />);

		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});
