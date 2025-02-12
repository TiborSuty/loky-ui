import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe(`Component`, () => {
    it("should render", () => {
      const { container } = render(<Button title="My button" />);

      const button = container.querySelector("button");

      expect(button).toBeInTheDocument();
    });
  });