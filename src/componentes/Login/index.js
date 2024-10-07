//-------------------------------------------------- Imports ----------------------------------------------//

import React, {useState, useRef } from "react"
import {View, Text, 
        TextInput, TouchableOpacity, 
        Image, Vibration, 
        Pressable, Keyboard, 
        KeyboardAvoidingView, Platform} 
        from "react-native"

import styles from './style'


const Main = ({ navigation }) => {
//------------------------------------------- Criando as variaveis -------------------------------------------------------------//

    const [userDig, setUserDig] = useState(null);
    const [user, setUser] = useState(null);
    const [senhaDig, setSenhaDig] = useState(null);
    const [senha, setSenha] = useState(null);
    const [textBotao, settextBotao] = useState("Criar Conta");
    const [textErroU, setMenssageErroU] = useState("");
    const [textErroS, setMenssageErroS] = useState("");
    const inputRef = useRef(null);

    //-------------------------------------- Função para criar o login depois de passar pela verificação ----------------------//

    function Criar(){
        setUser(userDig)
        setSenha(senhaDig)
        setUserDig(null)
        setSenhaDig(null)
        settextBotao("Entrar")
        return
    }

    //--------------------------------------- Função para tirar o foco da caixa (nome autoexplicativo) ------------------------//

    const tirarFoco = () => {
        if (inputRef.current) {
        inputRef.current.blur(); // Remove o foco do TextInput
        }
    };

    //------------------------------- Fução que verifica os inputs e que manda para as outras funções --------------------------//

    function Validar(){

        tirarFoco()

        //----------------------------------- If se algum dos campos forem vazios ou ambos --------------------------------------//

        if (userDig == null || senhaDig == null){
            if (userDig == null && senhaDig == null){
                settextBotao("Preencha Todos os Campos")
                setMenssageErroU("Campo Obrigatorio")
                setMenssageErroS("Campo Obrigatorio")
                setUserDig(null)
                setSenhaDig(null)
                
                return
            }
            else if(userDig == null){
                setMenssageErroU("Campo Obrigatorio")
                settextBotao("Preencha Todos os Campos")
                setMenssageErroS(null)
                setUserDig(null)
                setSenhaDig(null)
                return
            }
            if(senhaDig == null){
                settextBotao("Preencha Todos os Campos")
                setMenssageErroS("Campo Obrigatorio")
                setMenssageErroU(null)
                setUserDig(null)
                setSenhaDig(null)
                return
            }
        }

        //---------------------------------------- If para conferir se o usuario colocou o user e a senha cero ----------------------//

        if (userDig != null && senhaDig != null){
            setMenssageErroU(null)
            setMenssageErroS(null)
            if(user == null && senha == null){
                settextBotao("Erro")
                Criar()
                return
            }
            else if(user == userDig && senha == senhaDig){
                navigation.navigate('Home')
                settextBotao("Logar")
                setUserDig(null)
                setSenhaDig(null)
                return
            }
            else if(user != userDig || senha != senhaDig){
                settextBotao("User ou Senha estão errados")
                Vibration.vibrate()
                setUserDig(null)
                setSenhaDig(null)
                return
            }
            return
        }

        setUserDig(null)
        setSenhaDig(null)
    }


    return(
        
        //----------------------------------------- Tela ------------------------------------------------//

        <Pressable onPress={Keyboard.dismiss} style={styles.conteiner}>
            <KeyboardAvoidingView style={styles.conteiner2} 
                behavior={Platform.OS === 'android' ? 'padding' : 'height'} 
                keyboardVerticalOffset={346}>

                {/*------------------------------- Cabeçalho --------------------------------------------*/}

                <View style={styles.cabecalho}>
                    <Image
                    style={styles.titulo}
                    source={require('../Title/imagem-apoio.png')}
                    />
                </View>

                {/*------------------------------------ Formulario de Login ---------------------------- */}

                <View style={styles.form}>

                    <Text style={styles.label}>Usuário:</Text>
                    <TextInput 
                    style={styles.inputGrande}
                    ref={inputRef}
                    onChangeText={setUserDig}
                    value={userDig}
                    placeholder=""
                    keyboardType="ascii-capable"
                    />
                    <Text style={styles.erroMenssage}>{textErroU}</Text>

                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                    style={styles.inputGrande}
                    ref={inputRef}
                    onChangeText={setSenhaDig}
                    value={senhaDig}
                    placeholder=""
                    secureTextEntry={true}
                    />     
                    <Text style={styles.erroMenssage}>{textErroS}</Text>             

                    <TouchableOpacity style={styles.botao} onPress={()=>Validar()}>
                        <Text style={styles.textoBotao}>{textBotao}</Text>
                    </TouchableOpacity> 

                </View>
            </KeyboardAvoidingView>             
        </Pressable>
    );
}
export default Main;