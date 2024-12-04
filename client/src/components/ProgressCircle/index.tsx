import { FunctionComponent } from "react";

interface ProgressCircleProps {
  currentStep: any;
}

const ProgressCircle: FunctionComponent<ProgressCircleProps> = ({
  currentStep,
}) => {
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

export default ProgressCircle;
