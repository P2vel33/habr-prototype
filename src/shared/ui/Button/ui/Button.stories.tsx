import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";

import { Button, ButtonSize, ThemeButton } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
    title: "shared   /Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
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
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
};
export const Background = Template.bind({});
Background.args = {
    children: "Text",
    theme: ThemeButton.BACKGROUND,
};
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: "Text",
    theme: ThemeButton.BACKGROUND_INVERTED,
};
export const Square = Template.bind({});
Square.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    square: true,
};
export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    size: ButtonSize.M,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    size: ButtonSize.L,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    size: ButtonSize.XL,
};
