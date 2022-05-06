import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DefaultComponent from './InputInfo'

export default {
  title: 'molecules/Input Info',
  component: DefaultComponent,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof DefaultComponent>

const Template: ComponentStory<typeof DefaultComponent> = args => (
  <DefaultComponent {...args} />
)

export const InputInfo = Template.bind({})
InputInfo.args = {
  title: 'Email',
  inputProps: {
      name: 'email',
      placeholder: 'example@email.com.co',
  }
}
