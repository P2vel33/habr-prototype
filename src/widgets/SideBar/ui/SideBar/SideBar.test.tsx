import { fireEvent, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
    test("have", () => {
        renderWithTranslation(<SideBar />);

        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("test toggle", () => {
        renderWithTranslation(<SideBar />);
        const toggle = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
        fireEvent.click(toggle);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
