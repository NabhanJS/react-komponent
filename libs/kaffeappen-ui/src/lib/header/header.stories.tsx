import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Primary = Template.bind({});
Primary.args = { label: 'Header' };
