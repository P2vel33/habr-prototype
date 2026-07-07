import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@/app/styles/index.scss";
import { CurrencySelect } from "./CurrencySelect";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Currency } from "../../model/types/currency";

export default {
    title: "entities   /CurrencySelect",
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

export const Default = Template.bind({});
Default.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Euro = Template.bind({});
Euro.args = {
    value: Currency.EUR,
};
export const Usd = Template.bind({});
Usd.args = {
    value: Currency.USD,
};
