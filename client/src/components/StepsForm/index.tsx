import { FunctionComponent } from "react";
import CheckForm from "../CheckForm";
import FormCompany from "../FormCompany";
import FormPerson from "../FormPerson";
import ResultForm from "../ResultForm";

interface StepsProps {
  type: string | undefined;
  formDataPerson: any;
  formDataCompany: any;
  status: any;
  currentStep: any;
}

const StepsForm: FunctionComponent<StepsProps> = ({
  type,
  formDataPerson,
  formDataCompany,
  status,
  currentStep,
}) => {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full h-auto flex justify-center items-center flex-col">
            {type === "person" && <FormPerson />}
            {type === "company" && <FormCompany />}
          </div>
        );
      case 2:
        return (
          <CheckForm
            type={type?.toString()}
            formDataCompany={formDataCompany}
            formDataPerson={formDataPerson}
          />
        );
      case 3:
        return <ResultForm status={status} />;
      default:
        return <h2>Passo Desconhecido</h2>;
    }
  };

  return renderStep();
};

export default StepsForm;
