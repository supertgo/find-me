import { render, renderHook, screen } from 'utils/test/test-utils';
import { ModalApplication } from '.';
import { useContextSelector } from 'use-context-selector';
import { CoverLetterContext } from 'hooks/contexts/CoverLetter/CoverLetter';

describe('<ModalApplication />', () => {
	it('should render the component', () => {
		const coverLetter = {
			user: {
				id: 10,
				name: 'Candidato',
				email: 'candidato@gmail.com',
				phone: '1231313131',
			},
			jobApplication: {
				id: 15,
				cover_letter: 'Gostaria de me candidtar à vaga',
			},
		};

		renderHook(() =>
			useContextSelector(CoverLetterContext, (context) => ({
				open: (context.open = true),
				competence: (context.coverLetter = coverLetter),
			})),
		);

		render(<ModalApplication />);

		expect(screen.getByText('Carta de Apresentação')).toBeInTheDocument();
		expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Visitar Perfil/i })).toBeInTheDocument();
	});
});
