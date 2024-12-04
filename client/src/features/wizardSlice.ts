import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WizardState {
  currentStep: number;
  maxSteps: number;
  status: "pending" | "success" | "denied";
  max_amount: number;
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
  max_amount: 0,
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
        max_amount: number;
      }>
    ) => {
      state.status = action.payload.status;
      state.max_amount = action.payload.max_amount;
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
