import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/componentes/Login";
import Artista from "./src/componentes/Artistas";
import Opcoes from "./src/componentes/Opcoes";
import Forms from "./src/componentes/Forms";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          contentStyle: { backgroundColor: 'gray' }, // Estiliza todas as telas
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Artista} />
        <Stack.Screen name="Opcoes" component={Opcoes} />
        <Stack.Screen name="Forms" component={Forms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}