// src/api.js
import axios from 'axios';

// Criação de uma instância do Axios
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Substitua pela URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; // Exporta a instância do Axios
