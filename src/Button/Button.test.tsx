import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Button title="Click me" />);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button title="Click me" onClick={handleClick} />
    );
    getByText("Click me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});