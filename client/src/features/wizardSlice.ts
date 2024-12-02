import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definindo os estados de cada etapa
interface WizardState {
  currentStep: number;
  maxSteps: number;
  status: "pending" | "success" | "denied";
  formDataPerson: {
    income: string;
    city: string;
    name: string;
    age: string;
    document: string;
  };
  formDataCompany: {
    revenue: string;
    name: string;
    city: string;
    document: string;
  };
}

const initialState: WizardState = {
  currentStep: 1,
  maxSteps: 3,
  status: "pending",
  formDataPerson: {
    income: "",
    city: "",
    name: "",
    age: "",
    document: "",
  },
  formDataCompany: {
    revenue: "",
    name: "",
    city: "",
    document: "",
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
    setStatus: (
      state,
      action: PayloadAction<{
        status: "pending" | "success" | "denied";
      }>
    ) => {
      state.status = action.payload.status;
    },
    setFormDataPerson: (
      state,
      action: PayloadAction<{
        income: string;
        city: string;
        name: string;
        age: string;
        document: string;
      }>
    ) => {
      state.formDataPerson = action.payload;
    },
    setFormDataCompany: (
      state,
      action: PayloadAction<{
        revenue: string;
        name: string;
        city: string;
        document: string;
      }>
    ) => {
      state.formDataCompany = action.payload;
    },
    resetWizard: () => initialState,
  },
});

export const {
  nextStep,
  prevStep,
  setFormDataPerson,
  setFormDataCompany,
  resetWizard,
  setStatus,
} = wizardSlice.actions;
export default wizardSlice.reducer;
