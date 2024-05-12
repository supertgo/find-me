import type { Meta, StoryObj } from '@storybook/react';

import { JobFilter, JobFilterProps } from './JobFilter';

export default {
  title: 'Components/JobFilter',
  component: JobFilter,
  tags: ['autodocs'],
} as Meta<JobFilterProps>;

export const Default: StoryObj<JobFilterProps> = {};
