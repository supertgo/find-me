import type { Meta, StoryObj } from '@storybook/react';

import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} as Meta<TextareaProps>;

export const Default: StoryObj<TextareaProps> = {};
