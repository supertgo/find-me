import { render, renderHook, screen } from 'utils/test/test-utils';
import { ModalRemoveCompetence } from '.';
import { useContextSelector } from 'use-context-selector';
import { RemoveCompetenceContext } from 'hooks/contexts/RemoveCompetence/RemoveCompetence';

describe('<ModalRemoveCompetence />', () => {
	it('should render the component', () => {
		renderHook(() =>
			useContextSelector(RemoveCompetenceContext, (context) => ({
				open: (context.open = true),
				competence: (context.competence = { name: 'Ruby on Rails', id: 106 }),
				setCompetence: context.setCompetence,
			})),
		);

		render(<ModalRemoveCompetence />, {
			queryProvider: true,
		});

		expect(screen.getByText('Ruby on Rails')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Tem certeza que deseja excluir essa competência?',
			),
		).toBeInTheDocument();
	});
});
