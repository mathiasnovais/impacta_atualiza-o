import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import SplashScreen from "./src/componentes/SplashScreen";

const SplashScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Animação de escala

  useEffect(() => {
    // Inicia a animação de batida de coração (TU DUM)
    const heartbeatAnimation = Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,  // Aumenta para criar o efeito de batida
        duration: 500, // Duração da expansão (TU)
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,    // Volta ao tamanho original
        duration: 500, // Duração para voltar ao normal (DUM)
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.1,  // Aumenta novamente para a segunda batida
        duration: 500, // Duração da expansão (TU)
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,    // Volta ao tamanho original
        duration: 500, // Duração para voltar ao normal (DUM)
        useNativeDriver: true,
      }),
    ]);

    // Executa a animação
    heartbeatAnimation.start();

    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navega para a tela de login após 2 segundos
    }, 2000); // Tempo total de espera

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, [navigation, scaleAnim]);

  return (
    <View style={styles.container}>
      {/* Animação da logo com a batida de coração */}
      <Animated.Image
        source={require('src/componentes/Title/imagem-apoio.png')} // Caminho da logo
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} // Aplica a animação de escala
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar todo o espaço da tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: 'rgba(18, 18, 18, 1)', // Cor de fundo
  },
  logo: {
    width: 300, // Largura da logo
    height: 300, // Altura da logo
    resizeMode: 'contain', // Redimensiona a imagem para caber no container
  },
});

export default SplashScreen;
