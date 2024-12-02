import axios from "axios";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { nextStep, prevStep, setStatus } from "../../features/wizardSlice";
import { AppDispatch } from "../../store/store";
import FormCompany from "../FormCompany";
import FormPerson from "../FormPerson";
import ResultsForm from "../ResultsForm";

const WizardForm: React.FC = () => {
  const { type } = useParams();
  const { currentStep, status, formDataPerson, formDataCompany } = useSelector(
    (state: any) => state.wizard
  );
  const dispatch = useDispatch<AppDispatch>();
  console.log(formDataPerson);
  console.log(formDataCompany);

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
        return <ResultsForm type={type?.toString()} />;
      case 3:
        return (
          <div>
            {status === "pending" && (
              <div className="w-full h-[480px] flex justify-center items-center flex-col">
                <h1 className="text-lg text-gray-800">
                  Aguarde um momento, o resultado será exibido em breve.
                </h1>
              </div>
            )}
            {status === "denied" && (
              <div className="w-full h-[480px] flex justify-center items-center flex-col">
                <h1 className="text-lg text-gray-800">
                  Desculpe, você não foi aprovado.
                </h1>
              </div>
            )}
            {status === "success" && (
              <div className="w-full h-[480px] flex justify-center items-center flex-col">
                <h1 className="text-lg text-gray-800">
                  Obrigado por sua contribuição, seu credito foi aprovado!
                </h1>
              </div>
            )}
          </div>
        );
      default:
        return <h2>Passo Desconhecido</h2>;
    }
  };

  const handleClick = () => {
    if (type === "person") {
      resultsData(formDataPerson);
    } else {
      resultsData(formDataCompany);
    }
  }

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
              ? "bg-gray-300"
              : "bg-gray-500"
          } transition-all`}
        ></div>
      );
    }

    return <div className="flex justify-center gap-2">{circles} </div>;
  };

  const API_URL = "http://localhost:5000/credit-score/person";

  const resultsData = async (data: {
    nome: string;
    cpf: string;
    rendaMensal: string;
    idade: string;
    cidade: string;
    razaoSocial: string;
    cnpj: string;
    faturamentoMensal: string;
  }) => {
    try {
      const response: any = await axios.post(API_URL, data);
      dispatch(nextStep());
      if (response.data.status === "APPROVED") {
        dispatch(setStatus({ status: "success" }));
      } else {
        dispatch(setStatus({ status: "denied" }));
      }
    } catch (error) {
      console.error("Erro na requisição POST:", error);
      return null;
    }
  };

  return (
    <div className="h-full w-full flex flex-col gap-2">
      <div className="flex justify-center relative items-center h-auto mt-5">
        {renderProgressCircles()}
      </div>
      {renderStep()}
      <div className="justify-center h-auto items-center flex flex-row gap-4 px-2 py-2 absolute bottom-0">
        {currentStep > 1 && (
          <button
            className="border bg-white bottom-0 max-w-64 flex justify-between items-center max-h-12 border-[#2F1A4B] dark:text-black text-black rounded-full p-3 transition-all duration-200"
            onClick={handlePrev}
          >
            <FaArrowLeft className="w-5 h-5 text-[#2F1A4B]" />
            <span>Voltar</span>
          </button>
        )}
        {currentStep < 3 && currentStep !== 1 && (
          <button
            className="border bg-[#2F1A4B] bottom-0 max-w-64 flex text-white justify-center items-center max-h-12 border-[#2F1A4B] rounded-full p-3 transition-all duration-200"
            onClick={handleClick}
          >
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
};

export default WizardForm;
