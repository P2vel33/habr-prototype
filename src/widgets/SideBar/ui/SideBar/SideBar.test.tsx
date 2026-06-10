import { fireEvent, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";

describe("Sidebar", () => {
    test("one", () => {
        componentRender(<SideBar />);
        screen.debug();
    });
    test("have", () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("test toggle", () => {
        componentRender(<SideBar />);
        const toggle = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
        fireEvent.click(toggle);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
