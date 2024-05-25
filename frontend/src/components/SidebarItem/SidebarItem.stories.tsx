import type { Meta, StoryObj } from '@storybook/react';

import { SidebarItem, SidebarItemProps } from './SidebarItem';
import { HomeIcon } from 'icons/HomeIcon/HomeIcon';

export default {
	title: 'Components/SidebarItem',
	component: SidebarItem,
	tags: ['autodocs'],
} as Meta<SidebarItemProps>;

export const Default: StoryObj<SidebarItemProps> = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/job',
			},
		},
	},
	args: {
		href: 'link',
		text: 'Text',
		icon: <HomeIcon />,
		keyword: 'job',
	},
};

export const Selected: StoryObj<SidebarItemProps> = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/job',
			},
		},
	},
	args: {
		href: 'link',
		text: 'Text',
		icon: <HomeIcon />,
		keyword: 'job',
	},
};
