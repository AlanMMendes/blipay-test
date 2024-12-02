import { FunctionComponent } from "react";

interface CustomButtonProps {
  text: string;
  customClass?: string;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  text,
  customClass,
}) => {
  return (
    <button
      className={`${
        customClass ? customClass : ""
      } w-64 hover:border-[#2F1A4B] border-2 max-h-16 justify-center items-center flex  dark:text-black text-black rounded-lg p-4 transition-all duration-200`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
