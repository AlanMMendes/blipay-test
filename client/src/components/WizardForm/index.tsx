import axios from "axios";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { prevStep } from "../../features/wizardSlice";
import { AppDispatch } from "../../store/store";
import CreditForm from "../Form";

const WizardForm: React.FC = () => {
  const { currentStep, formData } = useSelector((state: any) => state.wizard);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); // Hook para navegação

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full h-auto flex justify-center items-center flex-col">
            <CreditForm />
          </div>
        );
      case 2:
        return (
          <div className="w-full h-[480px] flex justify-center items-center flex-col">
            <form className="flex flex-col h-full rounded-lg p-4 justify-center items-center max-w-[480px]">
              <h1 className="text-lg text-gray-800">
                Confirme os dados abaixo:
              </h1>
              <label className="text-gray-500 text-sm">
                Seu nome: <span className="text-black">{formData.nome}</span>
              </label>

              <label className="text-gray-500 text-sm">
                CPF: <span className="text-black">{formData.cpf}</span>
              </label>

              <label className="text-gray-500 text-sm">
                Renda Mensal:{" "}
                <span className="text-black">R${formData.rendaMensal}</span>
              </label>

              <label className="text-gray-500 text-sm">
                Sua idade: <span className="text-black">{formData.idade}</span>
              </label>

              <label className="text-gray-500 text-sm">
                Cidade: <span className="text-black">{formData.cidade}</span>
              </label>

              <label className="text-gray-500 text-sm">
                Razão Social:{" "}
                <span className="text-black">{formData.razaoSocial}</span>
              </label>

              <label className="text-gray-500 text-sm">
                CNPJ: <span className="text-black">{formData.cnpj}</span>
              </label>

              <label className="text-gray-500 text-sm">
                Seu faturamento mensal:{" "}
                <span className="text-black">
                  R${formData.faturamentoMensal}
                </span>
              </label>
            </form>
          </div>
        );
      case 3:
        return <h2>Passo 3: Concluído!</h2>;
      default:
        return <h2>Passo Desconhecido</h2>;
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
      console.log(response);
      if (response.data.status === "APPROVED") {
        navigate("/sucesso");
      } else {
        navigate("/denied");
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
            onClick={() => resultsData(formData)}
          >
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
};

export default WizardForm;
