import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/componentes/SplashScreen/SplashScreen.js"; // Importe a SplashScreen
import Login from "./src/componentes/Login";
import Artista from "./src/componentes/Artista";
import Opcoes from "./src/componentes/Opcoes";
import Forms from "./src/componentes/Forms";
import Agenda from "./src/componentes/Agenda";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        initialRouteName="Splash" // Define a Splash como tela inicial
        screenOptions={{
          contentStyle: { backgroundColor: 'gray' }, // Estiliza todas as telas
          headerShown: false, // Oculta o cabeçalho padrão
        }}
      >
        {/* Tela de Splash */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* Tela de Login */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Opcoes" component={Opcoes} />
        <Stack.Screen name="Forms" component={Forms} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Artista" component={Artista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
