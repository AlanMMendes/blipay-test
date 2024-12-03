import axios from "axios";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  nextStep,
  prevStep,
  resetWizard,
  setStatus,
} from "../../features/wizardSlice";
import { AppDispatch } from "../../store/store";
import CheckForm from "../CheckForm";
import FormCompany from "../FormCompany";
import FormPerson from "../FormPerson";
import ResultForm from "../ResultForm";

const WizardForm: React.FC = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { currentStep, status, formDataPerson, formDataCompany } = useSelector(
    (state: any) => state.wizard
  );
  const dispatch = useDispatch<AppDispatch>();

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full h-auto flex justify-center items-center flex-col">
            {type === "person" && <FormPerson />}
            {type === "company" && <FormCompany />}
          </div>
        );
      case 2:
        return <CheckForm type={type?.toString()} />;
      case 3:
        return <ResultForm status={status} />;
      default:
        return <h2>Passo Desconhecido</h2>;
    }
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

  const renderProgressCircles = () => {
    const totalSteps = 3;
    const circles = [];

    for (let i = 1; i <= totalSteps; i++) {
      const isActive = i === currentStep;
      const isCompleted = i < currentStep;
      const isPrevious = i === currentStep - 1;

      circles.push(
        <div
          key={i}
          className={`w-4 h-4 rounded-full flex justify-center items-center text-white font-bold ${
            isActive
              ? "bg-[#2F1A4B] scale-110"
              : isPrevious
              ? "bg-[#442370]"
              : isCompleted
              ? "bg-[#442370]"
              : "bg-gray-500"
          } transition-all`}
        ></div>
      );
    }

    return (
      <div className="flex justify-center gap-2 h-auto py-3">{circles} </div>
    );
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
      {renderProgressCircles()}
      {renderStep()}

      <nav className="flex flex-row gap-4 justify-center items-center h-auto">
        {currentStep > 1 && currentStep !== 3 && (
          <button
            className="border bg-white flex justify-between items-center max-w-64 max-h-12 border-[#2F1A4B] dark:text-black text-black rounded-full p-3 transition-all duration-200"
            onClick={handlePrev}
            aria-label="Voltar"
          >
            <FaArrowLeft className="w-5 h-5 text-[#2F1A4B]" />
            <span>Voltar</span>
          </button>
        )}

        {currentStep < 3 && currentStep !== 1 && (
          <button
            className="border bg-[#2F1A4B] flex text-white justify-center items-center max-w-64 max-h-12 border-[#2F1A4B] rounded-full p-3 transition-all duration-200"
            onClick={handleClick}
            aria-label="Finalizar"
          >
            Finalizar
          </button>
        )}

        {currentStep === 3 && (
          <div className="flex flex-row gap-4 justify-center items-center">
            <button
              className="border bg-[#2F1A4B] flex text-white justify-center items-center max-w-64 max-h-12 border-[#2F1A4B] rounded-full p-3 transition-all duration-200"
              onClick={() => {
                dispatch(resetWizard());
                navigate("/");
              }}
              aria-label="Refazer"
            >
              Refazer
            </button>
            <button
              className="border bg-[#2F1A4B] flex text-white justify-center items-center max-w-64 max-h-12 border-[#2F1A4B] rounded-full p-3 transition-all duration-200"
              onClick={() => {
                navigate("/credit-score/list");
              }}
              aria-label="Resultados"
            >
              Resultados
            </button>
          </div>
        )}
      </nav>
    </section>
  );
};

export default WizardForm;
