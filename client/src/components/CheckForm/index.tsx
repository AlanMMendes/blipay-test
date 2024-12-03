import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

interface ResultsFormProps {
  type: any;
}

const CheckForm: FunctionComponent<ResultsFormProps> = ({ type }) => {
  const { formDataPerson, formDataCompany } = useSelector(
    (state: any) => state.wizard
  );

  return (
    <>
      {type === "company" && (
        <section className="w-full max-h-[480px] h-full flex justify-start items-center flex-col">
          <article className="flex flex-col h-auto gap-4 rounded-lg p-4 justify-center items-center max-w-[480px]">
            <h1 className="text-lg text-gray-800">Confirme os dados abaixo:</h1>
            <p className="text-gray-500 text-sm">
              <strong>Razão Social:</strong>
              <span className="text-black">{formDataCompany.name}</span>
            </p>
            <p className="text-gray-500 text-sm">
              <strong>CNPJ:</strong>
              <span className="text-black">{formDataCompany.document}</span>
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Cidade:</strong>
              <span className="text-black">{formDataCompany.city}</span>
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Faturamento Mensal:</strong>
              <span className="text-black">R${formDataCompany.revenue}</span>
            </p>
          </article>
        </section>
      )}

      {type === "person" && (
        <section className="w-full max-h-[480px] h-full flex justify-start items-center flex-col">
          <article className="flex flex-col h-auto gap-4 rounded-lg p-4 justify-center items-center max-w-[480px]">
            <h1 className="text-lg text-gray-800">Confirme os dados abaixo:</h1>
            <p className="text-gray-500 text-sm">
              <strong>Nome:</strong>
              <span className="text-black">{formDataPerson.name}</span>
            </p>
            <p className="text-gray-500 text-sm">
              <strong>CPF:</strong>
              <span className="text-black">{formDataPerson.document}</span>
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Idade:</strong>
              <span className="text-black">{formDataPerson.age}</span>
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Cidade:</strong>
              <span className="text-black">{formDataPerson.city}</span>
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Renda Mensal:</strong>
              <span className="text-black">R${formDataPerson.income}</span>
            </p>
          </article>
        </section>
      )}
    </>
  );
};

export default CheckForm;
