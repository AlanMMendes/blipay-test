import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import CheckForm from "../../../components/CheckForm";
describe("CheckForm", () => {
  it("deve renderizar o formulário correto com base no tipo 'person' || 'company'", () => {
    render(
      <CheckForm
        type={"person"}
        formDataPerson={undefined}
        formDataCompany={undefined}
      />
    );
  });
});
