import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Text, ThemeText } from "./Text";

export default {
    title: "shared   /Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    title: "TEST",
    text: "test",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "TEST",
    text: "test",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight = Template.bind({});
ErrorLight.args = {
    title: "TEST",
    text: "test",
    theme: ThemeText.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: "TEST",
    text: "test",
    theme: ThemeText.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTilte = Template.bind({});
OnlyTilte.args = {
    title: "TEST",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: "test",
};
