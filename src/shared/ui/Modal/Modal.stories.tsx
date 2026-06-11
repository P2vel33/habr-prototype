import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
    title: "shared   /Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: "Че, ты, сутулый хуй хочешь?",
};
export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: "Че, ты, сутулый хуй хочешь?",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
