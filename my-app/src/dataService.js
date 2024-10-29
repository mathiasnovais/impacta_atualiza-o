// src/dataService.js
import api from './api'; // Importa a instância do Axios

// Função para buscar dados
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint); // Realiza a requisição GET
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error; // Lança o erro para ser tratado onde a função for chamada
  }
};
