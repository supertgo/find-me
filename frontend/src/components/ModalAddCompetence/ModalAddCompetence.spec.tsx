import { fireEvent, render, screen, act, waitFor } from 'utils/test/test-utils';
import { ModalAddCompetence } from './ModalAddCompetence';

describe('<ModalAddCompetence />', () => {
	it('should render the component', async () => {
		render(<ModalAddCompetence />);
		const addcompetenceTrigger = screen.getByLabelText('adicionar-competencia');

		expect(addcompetenceTrigger).toBeInTheDocument();

		act(() => fireEvent.click(addcompetenceTrigger));

		await waitFor(() =>
			expect(
				screen.getByPlaceholderText('Competência (ex: Laravel)'),
			).toBeInTheDocument(),
		);
	});
});
