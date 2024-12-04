// FormCompany.test.tsx

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import FormCompany from "../../../components/FormCompany";
import { store } from "../../../store/store";

const renderWithRedux = (store: any) => {
  return render(
    <Provider store={store}>
      <FormCompany />
    </Provider>
  );
};

describe("FormCompany component", () => {
  it("should render form inputs with initial values", () => {
    renderWithRedux(store);

    expect(screen.getByPlaceholderText(/Razão Social/));
    expect(screen.getByPlaceholderText(/Cidade/));
    expect(screen.getByPlaceholderText(/CNPJ/));
    expect(screen.getByPlaceholderText(/Faturamento Mensal/));
    screen.debug();
  });

  it("should update the Redux store when inputs change", async () => {
    renderWithRedux(store);

    fireEvent.change(screen.getByPlaceholderText(/Razão Social/), {
      target: { value: "Empresa X" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Cidade/), {
      target: { value: "São Paulo" },
    });
    fireEvent.change(screen.getByPlaceholderText(/CNPJ/), {
      target: { value: "12345678000123" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Faturamento Mensal/), {
      target: { value: 10000 },
    });
    screen.debug();
  });
});
