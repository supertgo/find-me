import type { Meta, StoryObj } from '@storybook/react';

import { Pill, PillProps } from './Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  tags: ['autodocs'],
} as Meta<PillProps>;

export const Default: StoryObj<PillProps> = {
  args: {
    text: 'Pill'
  }
};
