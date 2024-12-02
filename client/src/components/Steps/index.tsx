import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import Form from "../Form";

// Tipos de dados para as etapas e progresso
interface Step {
  id: number;
  title: string;
  completed: boolean;
  component: React.ReactNode;
}

const ProgressTracker: React.FC = () => {
  // Etapas iniciais do processo
  const initialSteps: Step[] = [
    {
      id: 1,
      title: "Passo 1: Preencher informações",
      completed: false,
      component: <Form />,
    },
    {
      id: 2,
      title: "Passo 2: Verificar e confirme",
      completed: false,
      component: <div></div>,
    },
    {
      id: 3,
      title: "Passo 3: Definir preferências de pagamento",
      completed: false,
      component: <div></div>,
    },
  ];

  const [steps, setSteps] = useState<Step[]>(initialSteps);

  const completeStep = (id: number) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) =>
        step.id === id ? { ...step, completed: true } : step
      )
    );
  };

  return (
    <div className="h-10 w-full flex flex-col justify-center items-center">
      <div className="h-12 flex flex-row justify-center items-center gap-4">
        {steps.map((step) => (
          <div className="border w-auto" key={step.id}>
            {step.completed ? (
              <FaCircle className="text-green-500 w-5" />
            ) : (
              <button onClick={() => completeStep(step.id)}>
                <FaCircle className="text-gray-500 w-5" />
              </button>
            )}
            {step.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
