import type { Meta, StoryObj } from '@storybook/react';

import { AddSkills, AddSkillsProps } from './AddSkills';

export default {
	title: 'Components/AddSkills',
	component: AddSkills,
	tags: ['autodocs'],
} as Meta<AddSkillsProps>;

export const Default: StoryObj<AddSkillsProps> = {
	args: {
		setValue: () => ({}),
	},
};
