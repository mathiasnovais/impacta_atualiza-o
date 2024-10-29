// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import api from './src/api'; // Importa a instância do Axios que você criou

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get('/employees'); // Faz a requisição para a API
        setEmployees(response.data); // Armazena os dados obtidos no estado
      } catch (err) {
        setError(err); // Armazena o erro, se houver
      } finally {
        setLoading(false); // Atualiza o estado de loading
      }
    };

    fetchEmployees(); // Chama a função para buscar os funcionários
  }, []); // O array vazio significa que a chamada será feita apenas uma vez, após o primeiro render

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Exibe um carregando enquanto os dados não estão prontos
  }

  if (error) {
    return <Text>Error: {error.message}</Text>; // Exibe uma mensagem de erro, se houver
  }

  return (
    <View>
      {employees.map(employee => (
        <Text key={employee.id}>{employee.name}</Text> // Renderiza a lista de funcionários
      ))}
    </View>
  );
};

export default App;
