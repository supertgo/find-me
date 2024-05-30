import type { Meta, StoryObj } from '@storybook/react';
import { AcademicRecordItem, AcademicRecordItemProps } from '.';

export default {
	title: 'Components/AcademicRecordItem',
	component: AcademicRecordItem,
	tags: ['autodocs'],
} as Meta<AcademicRecordItemProps>;

export const Default: StoryObj<AcademicRecordItemProps> = {
	args: {
		institution: 'Universidade Federal de Minas Gerais',
		description:
			'Atividades e grupos: Passei por matérias como:\n● Introdução à Lógica Computacional\n● Geometria Analítica e Álgebra Linear\n● Programação e Desenvolvimento de Software\n● Administração\n● ÁLGEBRA LINEAR COMPUTACIONAL\n● CALCULO DIFERENCIAL E INTEGRAL I\n● MATEMÁTICA DISCRETA\n● ECONOMIA',
		start_date: '2022-08-25',
		end_date: null,
		is_in_progress: 1,
		degree: 'Bachelor',
		field_of_study: 'Computer Science',
	},
};
