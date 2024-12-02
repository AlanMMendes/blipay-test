import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

interface ResultsFormProps {
  type: any;
}

const ResultsForm: FunctionComponent<ResultsFormProps> = ({ type }) => {
  const { formDataPerson, formDataCompany } = useSelector(
    (state: any) => state.wizard
  );

  return (
    <>
      {type === "company" && (
        <div className="w-full h-[480px] flex justify-center items-center flex-col">
          <form className="flex flex-col h-full rounded-lg p-4 justify-center items-center max-w-[480px]">
            <h1 className="text-lg text-gray-800">Confirme os dados abaixo:</h1>
            <label className="text-gray-500 text-sm">
              Razão Social:
              <span className="text-black">{formDataCompany.name}</span>
            </label>
            <label className="text-gray-500 text-sm">
              CNPJ:
              <span className="text-black">{formDataCompany.document}</span>
            </label>
            <label className="text-gray-500 text-sm">
              Cidade: <span className="text-black">{formDataCompany.city}</span>
            </label>
            <label className="text-gray-500 text-sm">
              Faturamente Mensal:{" "}
              <span className="text-black">R${formDataCompany.revenue}</span>
            </label>
          </form>
        </div>
      )}
      {type === "person" && (
        <div className="w-full h-[480px] flex justify-center items-center flex-col">
          <form className="flex flex-col h-full rounded-lg p-4 justify-center items-center max-w-[480px]">
            <h1 className="text-lg text-gray-800">Confirme os dados abaixo:</h1>
            <label className="text-gray-500 text-sm">
              Nome:
              <span className="text-black">{formDataPerson.name}</span>
            </label>
            <label className="text-gray-500 text-sm">
              CPF:
              <span className="text-black">{formDataPerson.document}</span>
            </label>
            <label className="text-gray-500 text-sm">
              Idade:
              <span className="text-black">{formDataPerson.age}</span>
            </label>
            <label className="text-gray-500 text-sm">
              Cidade: <span className="text-black">{formDataPerson.city}</span>
            </label>
            <label className="text-gray-500 text-sm">
              Renda Mensal:{" "}
              <span className="text-black">R${formDataPerson.revenue}</span>
            </label>
          </form>
        </div>
      )}
    </>
  );
};

export default ResultsForm;
