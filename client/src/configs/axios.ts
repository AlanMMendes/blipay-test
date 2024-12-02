import axios from "axios";

const API_URL = "http://localhost:5000/credit-score/person";

const resultsData = async (data: {
  nome: string;
  cpf: string;
  rendaMensal: string;
  idade: string;
  cidade: string;
  razaoSocial: string;
  cnpj: string;
  faturamentoMensal: string;
}) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição POST:", error);
    return null;
  }
};

export default resultsData;
