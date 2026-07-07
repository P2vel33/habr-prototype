import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";
import { CountrySelect } from "./CountrySelect";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Country } from "../../model/types/country";

export default {
    title: "entities   /CountrySelect",
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

export const Default = Template.bind({});
Default.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Italy = Template.bind({});
Italy.args = {
    value: Country.ITALY,
};
