import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  nextStep,
  prevStep,
  resetWizard,
  setStatus,
} from "../../features/wizardSlice";
import { AppDispatch } from "../../store/store";
import CustomButton from "../CustomButton";
import ProgressCircle from "../ProgressCircle";
import StepsForm from "../StepsForm";

const WizardForm: React.FC = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { currentStep, formDataPerson, formDataCompany, status } = useSelector(
    (state: any) => state.wizard
  );

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleClick = () => {
    if (type === "person") {
      handleData({
        persons: [
          {
            person: formDataPerson,
          },
        ],
      });
    } else {
      handleData({
        companies: [
          {
            company: formDataCompany,
          },
        ],
      });
    }
  };

  const handleData = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/credit-score/results",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const dataResponse = response.data;
      dispatch(nextStep());

      if (
        dataResponse?.statusCompany?.status === "APPROVED" ||
        dataResponse?.statusPerson?.status === "APPROVED"
      ) {
        dispatch(setStatus({ status: "success" }));
      } else {
        dispatch(setStatus({ status: "denied" }));
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  };

  return (
    <section className="flex flex-col gap-4 px-2 justify-start items-center">
      <ProgressCircle currentStep={currentStep} />
      <StepsForm
        type={type}
        currentStep={currentStep}
        formDataCompany={formDataCompany}
        formDataPerson={formDataPerson}
        status={status}
      />

      <nav className="flex flex-row gap-4 justify-center items-center h-auto">
        {currentStep > 1 && currentStep !== 3 && (
          <CustomButton onClick={handlePrev} text="Voltar" />
        )}

        {currentStep < 3 && currentStep !== 1 && (
          <CustomButton onClick={handleClick} text="Finalizar" />
        )}

        {currentStep === 3 && (
          <div className="flex flex-row gap-4 justify-center items-center">
            <CustomButton
              onClick={() => {
                dispatch(resetWizard());
                navigate("/");
              }}
              text="Refazer"
            />
            <CustomButton
              onClick={() => {
                navigate("/credit-score/list");
                dispatch(resetWizard());
              }}
              text="Resultados"
            />
          </div>
        )}
      </nav>
    </section>
  );
};

export default WizardForm;
