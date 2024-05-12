import type { Meta, StoryObj } from '@storybook/react';

import { ApplicationHeader, ApplicationHeaderProps } from './ApplicationHeader';

export default {
  title: 'Components/ApplicationHeader',
  component: ApplicationHeader,
  tags: ['autodocs'],
} as Meta<ApplicationHeaderProps>;

export const Default: StoryObj<ApplicationHeaderProps> = {};
