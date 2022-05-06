import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DefaultComponent from './Title'

export default {
  title: 'atoms/Title',
  component: DefaultComponent,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof DefaultComponent>

const Template: ComponentStory<typeof DefaultComponent> = args => (
  <DefaultComponent {...args} />
)

export const Title = Template.bind({})
Title.args = {
  text: 'Example title',
}
