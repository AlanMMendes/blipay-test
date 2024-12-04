import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "./DataTable";

const ResultList = () => {
  const [activeTab, setActiveTab] = useState("person");
  const [person, setPerson] = useState<any>([]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const handleData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/credit-score/list"
      );
      setPerson(response.data);
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="container mx-auto max-w-[480px] w-full h-auto">
      <div className="flex justify-center border-b h-auto px-2">
        <button
          onClick={() => handleTabClick("person")}
          className={`py-2  font-medium text-lg rounded-tl-lg rounded-tr-lg transition-all duration-200 ${
            activeTab === "person"
              ? "border-b-2 border-[#2F1A4B] text-[#2F1A4B]"
              : "text-gray-500"
          }`}
        >
          Pessoa Física
        </button>
        <button
          onClick={() => handleTabClick("company")}
          className={`py-2 px-4 font-medium text-lg rounded-tl-lg rounded-tr-lg transition-all duration-200 ${
            activeTab === "company"
              ? "border-b-2 border-[#2F1A4B] text-[#2F1A4B]"
              : "text-gray-500"
          }`}
        >
          Pessoa Jurídica
        </button>
      </div>

      {activeTab === "person" && (
        <div className="p-4 h-auto">
          <DataTable results={person.persons} type={"person"} />
        </div>
      )}

      {activeTab === "company" && (
        <div className="p-4 h-auto">
          <DataTable results={person.companies} type={"company"} />
        </div>
      )}
    </div>
  );
};

export default ResultList;
