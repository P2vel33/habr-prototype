import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";
import { Select } from "./Select";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
    title: "shared   /Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Size400 = Template.bind({});
Size400.args = {
    label: "label",
    options: [
        { value: "123", content: "First" },
        { value: "234", content: "Second" },
    ],
};
