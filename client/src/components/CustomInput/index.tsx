import { FunctionComponent } from "react";

interface CustomInputProps {
  customClass?: string;
  type?: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  errorName?: any;
  id?: string;
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  errorName,
  id,
  name,
}) => {
  return (
    <input
      className="w-full rounded-md p-3 max-h-10 dark:text-black text-black"
      type={type}
      id={id}
      name={name}
      placeholder={errorName || placeholder}
      value={value}
      onChange={onChange}
      style={{
        borderColor: errorName ? "red" : "gray",
        borderWidth: errorName ? "1px" : "1px",
      }}
    />
  );
};

export default CustomInput;
