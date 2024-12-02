import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definindo os estados de cada etapa
interface WizardState {
  currentStep: number;
  maxSteps: number;
  formData: {
    nome: string;
    cpf: string;
    rendaMensal: string;
    idade: string;
    cidade: string;
    razaoSocial: string;
    cnpj: string;
    faturamentoMensal: string;
  };
}

const initialState: WizardState = {
  currentStep: 1,
  maxSteps: 3,
  formData: {
    nome: "",
    cpf: "",
    rendaMensal: "",
    idade: "",
    cidade: "",
    razaoSocial: "",
    cnpj: "",
    faturamentoMensal: "",
  },
};

const wizardSlice = createSlice({
  name: "wizard",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setFormData: (
      state,
      action: PayloadAction<{
        nome: string;
        cpf: string;
        rendaMensal: string;
        idade: string;
        cidade: string;
        razaoSocial: string;
        cnpj: string;
        faturamentoMensal: string;
      }>
    ) => {
      state.formData = action.payload;
    },
    resetWizard: () => initialState,
  },
});

export const { nextStep, prevStep, setFormData, resetWizard } =
  wizardSlice.actions;
export default wizardSlice.reducer;
