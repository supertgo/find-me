import { render, screen } from 'utils/test/test-utils';
import {
	AcademicRecordItem,
	AcademicRecordItemProps,
} from './AcademicRecordItem';

const props: AcademicRecordItemProps = {
	id: 1,
	user_id: 3131,
	degree: 'bachelor',
	field_of_study: 'Computer Science',
	institution: 'Universidade Federal de Minas Gerais',
	description:
		'Atividades e grupos: Passei por matérias como:\n● Introdução à Lógica Computacional\n● Geometria Analítica e Álgebra Linear\n● Programação e Desenvolvimento de Software\n● Administração\n● ÁLGEBRA LINEAR COMPUTACIONAL\n● CALCULO DIFERENCIAL E INTEGRAL I\n● MATEMÁTICA DISCRETA\n● ECONOMIA',
	start_date: '2022-08-25',
	end_date: null,
	is_in_progress: 1,
};

describe('<AcademicRecordItem />', () => {
	it('should render the component', () => {
		render(<AcademicRecordItem {...props} />);

		expect(screen.getByText(props.institution)).toBeInTheDocument();
		expect(
			screen.getByText(`${props.degree}, ${props.field_of_study}`),
		).toBeInTheDocument();
	});
});
