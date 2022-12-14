import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textbox from './textbox';

export default {
  title: 'Example/Textbox',
  component: Textbox,
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />;

export const Primary = Template.bind({});
Primary.args = { placeholder: 'Username', type:"text" };

export const Secondary = Template.bind({});
Secondary.args = { placeholder: 'Password', type:"password"};