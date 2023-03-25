import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Modal} from "./Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}><div>This is a Modal!</div></Modal>;

export const modal = Template.bind({});
modal.args = {
    isOpen: true,
  };