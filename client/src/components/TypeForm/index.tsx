import { Link } from "react-router";
import logo from "../../assets/chat.png";

const TypeForm = () => {
  return (
    <section className="flex h-full flex-col lg:flex-row justify-start lg:justify-center items-center">
      <article className="justify-center h-auto lg:h-full lg:w-full items-center flex flex-col gap-4 text-[#2F1A4B] border-[#2F1A4B] border-opacity-20 p-4">
        <h2 className="font-semibold text-2xl text-center h-auto">
          Bem-vindo a Blipay-aval!
        </h2>
        <p className="text-sm text-center h-auto">
          Este é um formulário de teste para avaliar o processo de autorização
          de crédito.
        </p>
        <img
          src={logo}
          alt="Logo da Blipay"
          className="lg:w-auto w-64 h-auto relative"
        />
      </article>

      <nav className="flex flex-col w-full lg:w-full h-full justify-start items-center lg:justify-center gap-2 py-2 lg:bg-[#2F1A4B]">
        <Link
          className="border-2 max-w-64 max-h-12 bg-white text-center border-[#2F1A4B] dark:text-black text-black rounded-lg p-3 transition-all duration-200"
          to="/credit-score/person"
        >
          Pessoa Física
        </Link>
        <Link
          className="border-2 max-w-64 max-h-12 text-center bg-white border-[#2F1A4B] dark:text-black text-black rounded-lg p-3 transition-all duration-200"
          to="/credit-score/company"
        >
          Pessoa Jurídica
        </Link>
      </nav>
    </section>
  );
};

export default TypeForm;
