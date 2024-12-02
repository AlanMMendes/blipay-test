import { FunctionComponent } from "react";
import WizardForm from "../components/WizardForm";

interface FormPageProps {}

const CreditFormPage: FunctionComponent<FormPageProps> = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <WizardForm />
    </div>
  );
};

export default CreditFormPage;
