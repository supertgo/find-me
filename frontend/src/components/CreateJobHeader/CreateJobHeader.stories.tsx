import type { Meta, StoryObj } from '@storybook/react';

import { CreateJobHeader, CreateJobHeaderProps } from '.';

export default {
	title: 'Components/CreateJobHeader',
	component: CreateJobHeader,
	tags: ['autodocs'],
} as Meta<CreateJobHeaderProps>;

export const Default: StoryObj<CreateJobHeaderProps> = {
	args: {
		title: 'Vagas',
	},
};
