import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb, BreadcrumbProps } from '.';

export default {
	title: 'Components/Breadcrumb',
	component: Breadcrumb,
	tags: ['autodocs'],
} as Meta<BreadcrumbProps>;

export const Default: StoryObj<BreadcrumbProps> = {
	args: {
		paths: [
			{
				name: 'Home',
				url: '/home',
			},
			{
				name: 'Jobs',
				url: '/jobs',
			},
		],
	},
};
