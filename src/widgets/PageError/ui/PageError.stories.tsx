import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";

import { PageError } from "./PageError";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
    title: "widgets   /PageError",
    component: PageError,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
    <PageError {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
