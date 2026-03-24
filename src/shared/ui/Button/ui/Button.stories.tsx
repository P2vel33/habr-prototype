import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";

import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
    title: "shared   /Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Usually = Template.bind({});
Usually.args = {
    children: "Text",
};
Usually.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
    theme: ThemeButton.CLEAR,
};
export const Outline = Template.bind({});
Outline.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
};
