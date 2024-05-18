import { fireEvent, render, screen, act, waitFor } from 'utils/test/test-utils';
import { ModalAddCompetence } from './ModalAddCompetence';

describe('<ModalAddCompetence />', () => {
	it('should render the component', async () => {
		render(<ModalAddCompetence user_id={1} />, {
			queryProvider: true,
		});

		const addcompetenceTrigger = screen.getByLabelText('Adicionar Competencia');

		expect(addcompetenceTrigger).toBeInTheDocument();

		await act(async () => fireEvent.click(addcompetenceTrigger));

		await waitFor(() =>
			expect(
				screen.getByPlaceholderText('Competência (ex: Laravel)'),
			).toBeInTheDocument(),
		);
	});
});
