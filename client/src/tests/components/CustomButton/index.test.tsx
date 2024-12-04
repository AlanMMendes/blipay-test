import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import CustomButton from "../../../components/CustomButton";

describe("CustomButton", () => {
  it("should render values from props, which are passed from the parent component (CustomButton)", () => {
    render(<CustomButton type="button" text={"Test"} />);
    screen.debug();
  });
});
