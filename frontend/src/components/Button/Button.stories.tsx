import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Button size(`small`, `medium` e `large`)',
    },
    fullWidth: {
      description: 'When `true`, hits a width of 100%',
    },
    isLoading: {
      description: 'Beeing `true`, the button will be loading',
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
  },
};

export const IsLoadingDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    fullWidth: true,
    disabled: true,
  },
};

export const IsLoadingNotDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    fullWidth: true,
  },
};

export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    fullWidth: true,
  },
};
