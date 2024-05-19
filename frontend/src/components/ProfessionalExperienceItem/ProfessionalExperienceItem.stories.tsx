import type { Meta, StoryObj } from '@storybook/react';

import {
	ProfessionalExperienceItem,
	ProfessionalExperienceItemProps,
} from './ProfessionalExperienceItem';

export default {
	title: 'Components/ProfessionalExperienceItem',
	component: ProfessionalExperienceItem,
	tags: ['autodocs'],
} as Meta<ProfessionalExperienceItemProps>;

export const Default: StoryObj<ProfessionalExperienceItemProps> = {
	args: {
		id: 46,
		user_id: 106,
		company_name: 'ABC Company',
		position: 'Software Engineer',
		description: 'Developed web applications using modern technologies.',
		start_date: '2020-06-15',
		end_date: '2022-08-30',
		is_current: 0,
		location: 'New York',
		work_model: 'hybrid',
		employment_type: 'full-time',
	},
};
