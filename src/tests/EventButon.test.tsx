import { render, screen, fireEvent } from "@testing-library/react";
import EventButton from "../components/EventButton";

// here we test button render, button appearance in DOM, click simulation and onClick handling
describe("EventButton", () => {
  test("renders button and triggers event on click", () => {
    const handleClick = jest.fn();
    render(<EventButton onClick={handleClick} />);
    const button = screen.getByRole("button", { name: "Load Today's Events" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
