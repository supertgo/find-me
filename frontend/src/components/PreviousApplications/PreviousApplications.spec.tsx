import 'components/PreviousApplicationsItem/PreviousApplicationsItem.mock';
import { render, screen } from 'utils/test/test-utils';
import { LoadingPreviousApplication, PreviousApplications } from '.';
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

describe('<LoadingPreviousApplications />', () => {
	it('should render the component', () => {
		const { container } = render(<LoadingPreviousApplication  />);

		expect(container).toMatchInlineSnapshot(`
			.c0 {
			  width: 100%;
			  height: 1.12rem;
			  margin-bottom: 0.5rem;
			  border-radius: 0.25rem;
			  background-image: linear-gradient(     100deg,     rgba(255, 255, 255, 0),     rgba(255, 255, 255, 0.5) 60%,     rgba(255, 255, 255, 0) 80%   );
			  animation: fGXKiQ 1s infinite alternate;
			}

			<div>
			  <div
			    class="Toastify"
			  />
			  <div
			    class="c0"
			    style="height: 10rem;"
			  />
			  <div
			    class="c0"
			    style="height: 10rem;"
			  />
			  <div
			    class="c0"
			    style="height: 10rem;"
			  />
			</div>
		`);
	});
});
