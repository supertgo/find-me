import { render, screen, renderHook } from 'utils/test/test-utils';
import { useContextSelector } from 'use-context-selector';
import { RemoveProfessionalExperienceContext } from 'hooks/contexts/RemoveProfessionalExperience/RemoveProfessionalExperience';
import { ModalRemoveProfessionalExperience } from './ModalRemoveProfessionalExperience';

describe('<ModalRemoveProfessionalExperience />', () => {
  it('should render the component', () => {
		renderHook(() =>
			useContextSelector(RemoveProfessionalExperienceContext, (context) => ({
				open: (context.open = true),
				professionalExperience: (context.professionalExperience = { name: 'EmCash', id: 106 }),
			})),
		);

		render(<ModalRemoveProfessionalExperience />, {
			queryProvider: true,
		});

		expect(screen.getByText('EmCash')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Tem certeza que deseja excluir essa experiência?',
			),
		).toBeInTheDocument();
  })
})
