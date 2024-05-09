import type { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
