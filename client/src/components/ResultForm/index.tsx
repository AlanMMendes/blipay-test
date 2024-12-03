import { FunctionComponent } from "react";
import { FaCheck } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

interface ResultFormProps {
  status: any;
}

const ResultForm: FunctionComponent<ResultFormProps> = ({ status }) => {
  return (
    <section className="flex justify-center items-center flex-col w-full h-auto p-10">
      <article className="w-full h-auto flex justify-start items-start flex-col">
        {status === "pending" && (
          <div
            className="w-full h-full flex flex-col justify-center items-center"
            aria-live="polite"
          >
            <h1 className="text-lg text-gray-800">
              Aguarde um momento, o resultado será exibido em breve.
            </h1>
          </div>
        )}

        {status === "denied" && (
          <div
            className="w-full h-full flex flex-col justify-center items-center"
            aria-live="assertive"
          >
            <RiCloseLargeFill className="max-w-32 text-red-500" />
            <h1 className="text-lg text-center text-gray-800">
              Desculpe, você não foi aprovado.
            </h1>
          </div>
        )}

        {status === "success" && (
          <div
            className="w-full h-full flex flex-col justify-center items-center"
            aria-live="assertive"
          >
            <FaCheck className="max-w-32 text-green-500" />
            <h1 className="text-lg text-center text-gray-800">
              Obrigado por sua contribuição, seu crédito foi aprovado!
            </h1>
          </div>
        )}
      </article>
    </section>
  );
};

export default ResultForm;
