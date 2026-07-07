import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";

import BlackHoleImage from "~/public/blackhole.jpg";
// import BlackHoleImage from "@/../public/blackhole.jpg";
import { Avatar } from "./Avatar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
    title: "shared   /Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Size400 = Template.bind({});
Size400.args = {
    src: BlackHoleImage,
    alt: "Фото черной дыры",
    size: 400,
};
export const Size300 = Template.bind({});
Size300.args = {
    src: BlackHoleImage,
    alt: "Фото черной дыры",
    size: 300,
};
export const Size200 = Template.bind({});
Size200.args = {
    src: BlackHoleImage,
    alt: "Фото черной дыры",
    size: 200,
};
export const SizeDefault = Template.bind({});
SizeDefault.args = {
    src: BlackHoleImage,
    alt: "Фото черной дыры",
};

export const Dark = Template.bind({});
Dark.args = {
    src: BlackHoleImage,
    alt: "Фото черной дыры",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
