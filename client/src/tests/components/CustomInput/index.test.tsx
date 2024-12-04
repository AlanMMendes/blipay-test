import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import CustomInput from "../../../components/CustomInput";

describe("CustomInput", () => {
  it("should render values from props, which are passed from the parent component (CustomInput)", () => {
    render(<CustomInput type="text" name="test" id="test" value="Test" />);
    screen.debug();
  });
});
