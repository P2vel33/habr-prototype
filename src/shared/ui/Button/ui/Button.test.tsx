import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
    test("test render", () => {
        render(<Button>SSS</Button>);
        expect(screen.getByText("SSS")).toBeInTheDocument();
    });
    test("test class", () => {
        render(<Button theme={ThemeButton.CLEAR}>SSS</Button>);
        expect(screen.getByText("SSS")).toHaveClass("clear");
    });
});
