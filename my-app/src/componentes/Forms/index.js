import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import styles from './style';

const Main = ({ navigation }) => {  // Recebendo a prop navigation
    const [contratante, setContratante] = useState(null);
    const [artista, setArtista] = useState(null);
    const [cache, setCache] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [data, setData] = useState(null);
    const [hora, setHora] = useState(null);
    const [textSucesso, settextSucesso] = useState("");
    const [textErroCo, setMenssageErroCo] = useState(null);
    const [textErroAr, setMenssageErroAr] = useState(null);
    const [textErroCa, setMenssageErroCa] = useState(null);
    const [textErroE, setMenssageErroE] = useState(null);
    const [textErroCi, setMenssageErroCi] = useState(null);
    const [textErroD, setMenssageErroD] = useState(null);
    const [textErroH, setMenssageErroH] = useState(null);
    const inputRef = useRef(null);

    const tirarFoco = () => {
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    function Validar() {
        tirarFoco();

        if (contratante == null || artista == null || cache == null || estado == null || cidade == null || data == null || hora == null) {
            settextSucesso(null);
            if (contratante == null) setMenssageErroCo("Campo Obrigatório*");    
            if (artista == null) setMenssageErroAr("Campo Obrigatório*");
            if (cache == null) setMenssageErroCa("Campo Obrigatório*");
            if (estado == null) setMenssageErroE("Campo Obrigatório*");
            if (cidade == null) setMenssageErroCi("Campo Obrigatório*");
            if (data == null) setMenssageErroD("Campo Obrigatório*");
            if (hora == null) setMenssageErroH("Campo Obrigatório*");
            return;
        } else {
            settextSucesso("Adicionado");
            const event = {
                contratante,
                artista,
                cache: Number(cache), // Converte para número
                estado,
                cidade,
                hora,
            };
            navigation.navigate('Agenda', { newEvent: { [data]: [event] } }); // Passa o novo evento para a tela de Agenda
        }
    }

    return (
        <Pressable style={styles.conteiner} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 20} 
            >
                <View style={styles.cabecalho}>
                    <Image
                        style={styles.titulo}
                        source={require('../Title/imagem-apoio.png')}
                    />
                </View>

                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.form}>
                        <Text style={styles.label}>Contratante</Text>
                        <TextInput 
                            style={styles.inputGrande}
                            ref={inputRef}
                            onChangeText={setContratante}
                            value={contratante}
                            placeholder="Ex. Renato"
                        />
                        <Text style={styles.erroMenssage}>{textErroCo}</Text>

                        <Text style={styles.label}>Artista</Text>
                        <TextInput 
                            style={styles.inputGrande}
                            ref={inputRef}
                            onChangeText={setArtista}
                            value={artista}
                            placeholder="Ex. Rodriguinho"
                        />
                        <Text style={styles.erroMenssage}>{textErroAr}</Text>

                        <View style={styles.alinhar}>
                            <Text style={styles.label}>Cachê</Text>
                            <Text style={styles.label2}>Estado</Text>
                        </View>

                        <View style={styles.alinhar}>
                            <TextInput
                                ref={inputRef}
                                onChangeText={setCache}
                                value={cache}
                                style={styles.inputPequeno}
                                placeholder="Ex. 3.000"
                                keyboardType="numeric"
                            />
                            <TextInput
                                ref={inputRef}
                                onChangeText={setEstado}
                                value={estado}
                                style={styles.inputPequeno2}
                                placeholder="Ex. RJ, SP"
                                keyboardType="ascii-capable"
                            />
                        </View>

                        <View style={styles.alinhar}>
                            <Text style={styles.erroMenssage}>{textErroCa}</Text>
                            <View style={styles.afastar}><Text style={styles.erroMenssage}>{textErroE}</Text></View>
                        </View>

                        <Text style={styles.label}>Cidade</Text>
                        <TextInput
                            style={styles.inputGrande}
                            ref={inputRef}
                            onChangeText={setCidade}
                            value={cidade}
                            placeholder="Ex. Rio de Janeiro"
                            keyboardType="ascii-capable"
                        />
                        <Text style={styles.erroMenssage}>{textErroCi}</Text>

                        <View style={styles.alinhar}>
                            <Text style={styles.label}>Data</Text>
                            <Text style={styles.label2}>Hora</Text>
                        </View>

                        <View style={styles.alinhar}>
                            <TextInput
                                style={styles.inputPequeno1}
                                ref={inputRef}
                                onChangeText={setData}
                                value={data}
                                placeholder="Ex. 20/03/24"
                                keyboardType="numbers-and-punctuation"
                            />
                            <TextInput
                                style={styles.inputPequeno2}
                                ref={inputRef}
                                onChangeText={setHora}
                                value={hora}
                                placeholder="Ex. 18:30"
                                keyboardType="numbers-and-punctuation"
                            />
                        </View>

                        <View style={styles.alinhar}>
                            <Text style={styles.erroMenssage}>{textErroD}</Text>
                            <View style={styles.afastar}><Text style={styles.erroMenssage}>{textErroH}</Text></View>
                        </View>

                        <TouchableOpacity style={styles.botao} onPress={Validar}>
                            <Text style={styles.textoBotao}>Adicionar Nova Data</Text>
                        </TouchableOpacity>

                        <View style={styles.caixaSuc}>
                            <Text style={styles.sucessoMenssage}>{textSucesso}</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Pressable>
    );
};

export default Main;
