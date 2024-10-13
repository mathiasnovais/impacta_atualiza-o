import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import styles from 'src/componentes/Estilos/style.js'; // Certifique-se de que o caminho esteja correto
import ThemeToggle from 'src/componentes/Estilos/ThemeToggle.js'; // Importe o componente

const Main = ({ navigation }) => {
    const [userDig, setUserDig] = useState(null);
    const [user, setUser] = useState(null);
    const [senhaDig, setSenhaDig] = useState(null);
    const [senha, setSenha] = useState(null);
    const [textBotao, settextBotao] = useState("Criar Conta");
    const [textErroU, setMenssageErroU] = useState("");
    const [textErroS, setMenssageErroS] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode); // Alterna o tema
    };

    const Criar = () => {
        setUser(userDig);
        setSenha(senhaDig);
        setUserDig(null);
        setSenhaDig(null);
        settextBotao("Entrar");
    };

    const tirarFoco = () => {
        Keyboard.dismiss();
    };

    const Validar = () => {
        tirarFoco();
        if (userDig == null || senhaDig == null) {
            settextBotao("Preencha Todos os Campos");
            if (userDig == null) setMenssageErroU("Campo Obrigatório");
            if (senhaDig == null) setMenssageErroS("Campo Obrigatório");
            return;
        }
        setMenssageErroU(null);
        setMenssageErroS(null);
        if (user == null && senha == null) {
            settextBotao("Erro");
            Criar();
            return;
        }
        if (user === userDig && senha === senhaDig) {
            navigation.navigate('Home');
            settextBotao("Logar");
        } else {
            settextBotao("User ou Senha estão errados");
        }
        setUserDig(null);
        setSenhaDig(null);
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={[styles.conteiner, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
            {/* Usando o componente de alternância de tema */}
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            {/* O restante do código permanece igual */}
            <KeyboardAvoidingView style={styles.conteiner2} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <View style={styles.cabecalho}>
                    <Image style={styles.titulo} source={require('../Title/imagem-apoio.png')} />
                </View>

                <View style={styles.form}>
                    <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Usuário:</Text>
                    <TextInput 
                        style={styles.inputGrande} 
                        onChangeText={setUserDig} 
                        value={userDig} 
                        placeholder="" 
                    />
                    <Text style={styles.erroMenssage}>{textErroU}</Text>

                    <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Senha:</Text>
                    <TextInput 
                        style={styles.inputGrande} 
                        onChangeText={setSenhaDig} 
                        value={senhaDig} 
                        secureTextEntry={true} 
                    />
                    <Text style={styles.erroMenssage}>{textErroS}</Text>

                    <TouchableOpacity style={styles.botao} onPress={Validar}>
                        <Text style={styles.textoBotao}>{textBotao}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Pressable>
    );
};

export default Main;
