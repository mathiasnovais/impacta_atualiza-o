import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import styles from './style.js'; // Caminho ajustado // Certifique-se de que o caminho esteja correto

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    const animation = useRef(new Animated.Value(0)).current; // Controla a posição da bola

    useEffect(() => {
        // Faz a animação da bola ir de um lado para o outro
        Animated.timing(animation, {
            toValue: isDarkMode ? 0 : 1, // Se for modo escuro, volta a bola à esquerda; senão, vai para a direita
            duration: 300, // Duração da animação
            useNativeDriver: false, // Precisa ser false para usar interpolação com layout
        }).start();
    }, [isDarkMode]);

    const ballPosition = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-5, 30], // Posição inicial e final da bola (ajuste conforme necessário)
    });

    const ballColor = isDarkMode ? 'rgba(233, 233, 233, 1)' : 'rgba(18, 18, 18, 1)'; // Cor da bola com base no tema
    const toggleContainerColor = isDarkMode ? 'rgba(233, 233, 233, 1)' : 'rgba(18, 18, 18, 1)'; // Cor do container do toggle

    return (
        <View style={styles.themeToggle}>
            <TouchableOpacity onPress={toggleTheme}>
                <View style={[styles.toggleContainer, { backgroundColor: toggleContainerColor }]}>
                    <Animated.View 
                        style={[styles.toggleBall, { backgroundColor: ballColor, transform: [{ translateX: ballPosition }] }]}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ThemeToggle;
