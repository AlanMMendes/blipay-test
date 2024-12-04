import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, setFormDataPerson } from "../../features/wizardSlice";
import { AppDispatch } from "../../store/store";
import CustomButton from "../CustomButton";
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
      newErrors.city = "Cidade não pode ser vazia";
    }

    if (formDataPerson.document.length < 11) {
      newErrors.document = "CPF deve ter no mínimo 11 caracteres";
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
    }
  };

  return (
    <section className="flex flex-col min-h-full justify-between items-center max-w-[480px] p-4">
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-col justify-start items-center gap-4"
        aria-labelledby="form-title"
      >
        <header className="h-auto">
          <h1 id="form-title" className="font-medium text-lg text-[#2F1A4B]">
            Insira as suas informações:
          </h1>
        </header>

        <fieldset className="flex flex-col gap-4 w-full justify-start items-start h-full">
          <div className="h-auto flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="text-[#2F1A4B] text-sm">
                Razão Social
              </label>
              <CustomInput
                type="text"
                id="name"
                placeholder={errors.name || "Nome"}
                name="name"
                value={formDataPerson.name}
                errorName={errors.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="city" className="text-[#2F1A4B] text-sm">
                Cidade
              </label>
              <CustomInput
                type="text"
                id="city"
                placeholder={errors.city || "Cidade"}
                name="city"
                value={formDataPerson.city}
                errorName={errors.city}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="age" className="text-[#2F1A4B] text-sm">
                Idade
              </label>
              <CustomInput
                type="text"
                id="age"
                placeholder={errors.age || "Idade"}
                name="age"
                value={formDataPerson.age}
                errorName={errors.age}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="document" className="text-[#2F1A4B] text-sm">
                CNPJ
              </label>
              <CustomInput
                type="text"
                id="document"
                placeholder={errors.document || "CPF"}
                name="document"
                value={formDataPerson.document}
                errorName={errors.document}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="income" className="text-[#2F1A4B] text-sm">
                Seu faturamento mensal
              </label>
              <CustomInput
                type="number"
                id="income"
                placeholder={errors.income || "Renda Mensal"}
                name="income"
                value={formDataPerson.income}
                errorName={errors.income}
                onChange={handleChange}
              />
            </div>
          </div>
          <legend className="sr-only">Informações do Usuário</legend>
        </fieldset>

        <footer className="h-auto justify-center items-center flex">
          <CustomButton text="Próximo" type={"submit"}>
            <FaArrowRight className="w-5 h-5 text-[#2F1A4B]" />
          </CustomButton>
        </footer>
      </form>
    </section>
  );
};

export default FormPerson;
