import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DefaultComponent from './index';
import GlobalStyles from '../../styles/GlobalStyles';

export default {
  title: 'Components/Buttons/Button',
  component: DefaultComponent,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = (args) => <><DefaultComponent {...args} /></>;

export const Button = Template.bind({});
Button.args = {};
