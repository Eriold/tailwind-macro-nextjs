import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DefaultComponent from './CardShadow'

export default {
  title: 'atoms/Card Shadow',
  component: DefaultComponent,
  argTypes: {},
} as ComponentMeta<typeof DefaultComponent>

const Template: ComponentStory<typeof DefaultComponent> = () => (
  <DefaultComponent>
      Usage children props
  </DefaultComponent>
)

export const CardShadow = Template.bind({})
CardShadow.args = {}
