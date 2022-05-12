import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DefaultComponent from './Footer'

export default {
  title: 'atoms/Footer',
  component: DefaultComponent,
  argTypes: {},
} as ComponentMeta<typeof DefaultComponent>

const Template: ComponentStory<typeof DefaultComponent> = () => (
  <DefaultComponent />
)

export const Footer = Template.bind({})
Footer.args = {}
