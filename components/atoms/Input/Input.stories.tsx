import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DefaultComponent from './Input'

export default {
  title: 'atoms/Input',
  component: DefaultComponent,
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
  },
} as ComponentMeta<typeof DefaultComponent>

const Template: ComponentStory<typeof DefaultComponent> = args => (
  <DefaultComponent {...args} />
)

export const Input = Template.bind({})
Input.args = {
  placeholder: 'ejemplo@correo.com'
}
