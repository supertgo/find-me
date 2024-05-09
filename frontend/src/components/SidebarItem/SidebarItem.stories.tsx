import type { Meta, StoryObj } from '@storybook/react';

import { SidebarItem, SidebarItemProps } from './SidebarItem';
import { HomeIcon } from '@radix-ui/react-icons';

export default {
  title: 'Components/SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
} as Meta<SidebarItemProps>;

export const Default: StoryObj<SidebarItemProps> = {
  args: {
    href: 'link',
    text: 'Text',
    icon: <HomeIcon />,
    selected: false,
  },
};

export const Selected: StoryObj<SidebarItemProps> = {
  args: {
    href: 'link',
    text: 'Text',
    icon: <HomeIcon />,
    selected: true,
  },
};
