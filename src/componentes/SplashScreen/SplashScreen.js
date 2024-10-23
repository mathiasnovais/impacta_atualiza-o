import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Animação de escala

  useEffect(() => {
    // Inicia a animação de batida de coração
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,  // Reduz o quanto aumenta (crescimento suave)
          duration: 900, // Aumenta o tempo para crescer
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,    // Volta ao tamanho original
          duration: 900, // Aumenta o tempo para voltar
          useNativeDriver: true,
        }),
      ])
    ).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, [navigation, scaleAnim]);

  return (
    <View style={styles.container}>
      {/* Animação da logo com a batida de coração */}
      <Animated.Image
        source={require('src/componentes/Title/imagem-apoio.png')} // Caminho da logo
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} // Aplica a animação de escala
      />
      {/* Texto opcional */}
      <Text style={styles.title}></Text>
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
  title: {
    fontSize: 24, // Tamanho da fonte para o nome ou slogan
    fontWeight: 'bold', // Texto em negrito
    marginTop: 20, // Margem superior para espaçamento da logo
    color: '#333', // Cor do texto
  },
});

export default SplashScreen;
