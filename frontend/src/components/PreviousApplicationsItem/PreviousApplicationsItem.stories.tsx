import type { Meta, StoryObj } from '@storybook/react';

import {
  PreviousApplicationsItem,
  PreviousApplicationsItemProps,
} from './PreviousApplicationsItem';

export default {
  title: 'Components/PreviousApplicationsItem',
  component: PreviousApplicationsItem,
  tags: ['autodocs'],
} as Meta<PreviousApplicationsItemProps>;

export const Default: StoryObj<PreviousApplicationsItemProps> = {};
