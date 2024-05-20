import type { Meta, StoryObj } from '@storybook/react';

import { JobItem, JobItemProps } from './JobItem';

export default {
	title: 'Components/JobItem',
	component: JobItem,
	tags: ['autodocs'],
} as Meta<JobItemProps>;

export const Default: StoryObj<JobItemProps> = {
	args: {
		id: 1,
		name: 'Designer',
		description:
			'Quis amet enim magnam voluptas nostrum. Et officiis fuga quo quia ut minima. Et assumenda dolor et harum accusamus autem pariatur. Ea autem facere itaque eos. Velit sed commodi ipsum facilis eum sint.',
		is_available: true,
		applications_amount: 743,
		salary: 49273,
		salary_time_unit: 'month',
		accept_application_until: '2024-09-25 17:51:04',
		work_model: 'homeOffice',
		employment_type: 'part-time',
		week_workload: 10,
		location: '600 Predovic Loop Suite 775\nSouth Pietromouth, IA 29993-3155',
		company_id: 1,
		user_id: 70,
	},
};
