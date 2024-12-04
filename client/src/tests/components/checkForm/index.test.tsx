import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import CheckForm from "../../../components/CheckForm";

describe("CheckForm", () => {
  it("should render values from props, which are passed from the parent component (CheckForm)", () => {
    render(
      <CheckForm
        type="company"
        formDataPerson={[
          {
            name: "Test Person",
            document: "12345678901",
            age: 30,
            city: "São Paulo",
            income: 1000,
          },
        ]}
        formDataCompany={{
          name: "Test Company",
          document: "12345678901234",
          city: "São Paulo",
          revenue: 1000,
        }}
      />
    );
    screen.debug();
  });
});
