import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, setFormDataPerson } from "../../features/wizardSlice";
import { AppDispatch } from "../../store/store";
import CustomInput from "../CustomInput";

const FormPerson: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { formDataPerson } = useSelector((state: any) => state.wizard);

  const [errors, setErrors] = useState({
    name: "",
    document: "",
    city: "",
    age: "",
    income: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFormDataPerson({ ...formDataPerson, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (formDataPerson.name.length < 8) {
      newErrors.name = "Razão social deve ter no mínimo 8 caracteres";
    }
    if (!formDataPerson.age) {
      newErrors.age = "Mínimo de idade deve ser maior que 18";
    }
    if (!formDataPerson.city) {
      newErrors.cidade = "Cidade não pode ser vazia";
    }

    if (formDataPerson.document.length < 14) {
      newErrors.document = "CNPJ deve ter no mínimo 14 caracteres";
    }

    if (formDataPerson.income <= 0) {
      newErrors.income = "Faturamento mensal deve ser maior que 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(nextStep());
    } else {
      console.log("Erro no formulário. Corrija os campos.");
    }
  };

  return (
    <div className="flex h-auto justify-center items-center flex-col w-full max-w-[480px] rounded-lg ">
      <form
        onSubmit={handleSubmit}
        className="h-auto flex flex-col justify-start items-center"
      >
        <div className="flex flex-col gap-4 h-auto rounded-lg p-4 justify-center items-center ">
          <h1 className="font-medium text-lg text-[#2F1A4B]">
            Insira as suas informações
          </h1>

          <div className="flex flex-col gap-4">
            <label className="text-[#2F1A4B] text-sm">Razão Social</label>
            <CustomInput
              type="text"
              placeholder={errors.name || "Nome"}
              name="name"
              value={formDataPerson.name}
              errorName={errors.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[#2F1A4B] text-sm">Cidade</label>
            <CustomInput
              type="text"
              placeholder={errors.city || "Cidade"}
              name="city"
              value={formDataPerson.city}
              errorName={errors.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-[#2F1A4B] text-sm">Cidade</label>
            <CustomInput
              type="text"
              placeholder={errors.age || "Idade"}
              name="age"
              value={formDataPerson.age}
              errorName={errors.age}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[#2F1A4B] text-sm">CNPJ</label>
            <CustomInput
              type="text"
              placeholder={errors.document || "CPF"}
              name="document"
              value={formDataPerson.document}
              errorName={errors.document}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[#2F1A4B] text-sm">
              Seu faturamento mensal
            </label>
            <CustomInput
              type="number"
              placeholder={errors.income || "Renda Mensal"}
              name="income"
              value={formDataPerson.income}
              errorName={errors.income}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="relative justify-center h-auto items-center flex flex-row gap-4 px-2 py-2 ">
          <button
            className="border bg-[#2F1A4B] bottom-0 max-w-64 flex text-white justify-center items-center max-h-12 border-[#2F1A4B] rounded-full p-3 transition-all duration-200"
            type="submit"
          >
            <span className="text-white">Próximo</span>
            <FaArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPerson;
