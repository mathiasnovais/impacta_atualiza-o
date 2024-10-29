import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../Estilos/style"; // Ajuste o caminho
import ThemeToggle from "../Estilos/ThemeToggle"; // Ajuste o caminho
import axios from 'axios'; // Certifique-se de ter o axios instalado

const Main = ({ navigation }) => {
    const [userDig, setUserDig] = useState("");
    const [senhaDig, setSenhaDig] = useState("");
    const [textBotao, setTextBotao] = useState("Entrar");
    const [textErroU, setMenssageErroU] = useState("");
    const [textErroS, setMenssageErroS] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false); // Estado para alternar entre modos

    useEffect(() => {
        const loadData = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                const storedPassword = await AsyncStorage.getItem('senha');
                if (storedUser && storedPassword) {
                    setUserDig(storedUser);
                    setSenhaDig(storedPassword);
                    setTextBotao("Entrar");
                }
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };
        loadData();
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode); // Alterna o tema
    };

    const Criar = async () => {
        Keyboard.dismiss(); // Desfaz o foco do teclado

        // Verifica se os campos estão preenchidos
        if (!userDig || !senhaDig) {
            setTextBotao("Preencha Todos os Campos");
            if (!userDig) setMenssageErroU("Campo Obrigatório");
            if (!senhaDig) setMenssageErroS("Campo Obrigatório");
            return;
        }

        setMenssageErroU("");
        setMenssageErroS("");

        // Tenta criar um novo usuário
        try {
            const response = await axios.post('http://192.168.1.5:8000/api/auth/register', { // Substitua <SEU_IP> pelo IP correto
                email: userDig,
                password: senhaDig
            });

            if (response.status === 201) {
                setTextBotao("Conta criada com sucesso!");
                setTimeout(() => {
                    toggleMode(); // Alterna para o modo de login
                }, 1000);
            }
        } catch (error) {
            if (error.response) {
                setTextBotao(error.response.data.message || "Erro ao criar conta");
            } else {
                setTextBotao("Erro ao conectar ao servidor");
            }
            setTimeout(() => {
                setTextBotao("Criar Conta");
            }, 1000);
            console.error('Erro ao criar conta:', error);
        }
    };

    const Validar = async () => {
        Keyboard.dismiss();
        if (!userDig || !senhaDig) {
            setTextBotao("Preencha Todos os Campos");
            if (!userDig) setMenssageErroU("Campo Obrigatório");
            if (!senhaDig) setMenssageErroS("Campo Obrigatório");
            return;
        }
        setMenssageErroU("");
        setMenssageErroS("");

        // Verifica as credenciais com o backend
        try {
            const response = await axios.post('http://192.168.1.5:8000/api/auth/login', { // Substitua <SEU_IP> pelo IP correto
                email: userDig,
                password: senhaDig
            });

            if (response.data.message === 'Login bem-sucedido!') {
                // Se o login for bem-sucedido, você pode navegar para outra tela
                navigation.navigate('Opcoes');
            } else {
                setTextBotao("Usuário ou Senha estão errados");
                setTimeout(() => {
                    setTextBotao("Entrar");
                }, 1000);
            }
        } catch (error) {
            if (error.response) {
                console.error('Erro ao fazer login:', error.response.data);
                setTextBotao(error.response.data.message || "Erro ao conectar ao servidor");
            } else {
                console.error('Erro desconhecido:', error);
                setTextBotao("Erro ao conectar ao servidor");
            }
            setTimeout(() => {
                setTextBotao("Entrar");
            }, 1000);
        }
    };

    const toggleMode = () => {
        setIsCreatingAccount(!isCreatingAccount); // Alterna o modo
        setUserDig(""); // Limpa os campos
        setSenhaDig(""); // Limpa os campos
        setMenssageErroU(""); // Limpa erros
        setMenssageErroS(""); // Limpa erros
        setTextBotao(isCreatingAccount ? "Entrar" : "Criar Senha"); // Atualiza o texto do botão
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={[styles.conteiner, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            <KeyboardAvoidingView style={styles.conteiner2} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <View style={styles.cabecalho}>
                    <Image 
                        style={styles.titulo} 
                        source={isDarkMode 
                            ? require('../Title/imagem-apoio.png')  
                            : require('../Title/Modo claro.png')  
                        } 
                        resizeMode="contain" 
                    />
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

                    <TouchableOpacity style={styles.botao} onPress={isCreatingAccount ? Criar : Validar}>
                        <Text style={styles.textoBotao}>{textBotao}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleMode} style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', color: isDarkMode ? 'white' : 'black' }}>
                            {isCreatingAccount ? "Já tem uma conta? Fazer login" : "Ainda não tem conta? Criar Conta"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Pressable>
    );
};

export default Main;
