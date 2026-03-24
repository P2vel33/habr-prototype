import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";

import { SideBar } from "./SideBar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
    title: "shared   /SideBar",
    component: SideBar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
    <SideBar {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
