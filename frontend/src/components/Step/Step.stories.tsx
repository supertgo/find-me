import type { Meta, StoryObj } from '@storybook/react';

import { Step, StepProps } from './Step';

export default {
  title: 'Components/Step',
  component: Step,
  tags: ['autodocs'],
} as Meta<StepProps>;

export const Default: StoryObj<StepProps> = {
  args: {
    title: 'Step',
    maxStep: 4,
    itemStep: 1,
    currentStep: 1,
  },
};
