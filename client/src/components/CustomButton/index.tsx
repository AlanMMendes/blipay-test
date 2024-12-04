import { FunctionComponent } from "react";

interface CustomButtonProps {
  text: string;
  customClass?: string;
  id?: string;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  type?: any;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  text,
  customClass,
  id,
  name,
  onClick,
  children,
  type,
}) => {
  return (
    <button
      name={name}
      id={id}
      onClick={onClick}
      className={`${
        customClass ? customClass : ""
      } w-auto min-w-32 hover:border-[#2F1A4B] border-2 max-h-16 justify-center items-center flex dark:text-black text-black rounded-lg p-4 transition-all duration-200`}
      aria-label={text}
      type={type || "button"}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        {text}
        {children}
      </div>
    </button>
  );
};

export default CustomButton;
