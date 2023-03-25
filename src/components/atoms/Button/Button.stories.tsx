import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Button} from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>test</Button>;

export const primary = Template.bind({});
primary.args = {
    className: "primary",
    color:'purple'
  };

export const outlined = Template.bind({});
outlined.args = {
    className: "outlined",
    color:'purple'
  };