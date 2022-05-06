import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DefaultComponent from './Button'

export default {
  title: 'atoms/Button',
  component: DefaultComponent,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'select' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
} as ComponentMeta<typeof DefaultComponent>

const Template: ComponentStory<typeof DefaultComponent> = args => (
  <DefaultComponent {...args} />
)

export const Button = Template.bind({})
Button.args = {
  children: 'Button',
  color: 'primary',
  disabled: false,
  fullWidth: false,
}
