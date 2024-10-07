import React from "react"
import {View, Text, TextInput, TouchableOpacity, Image} from "react-native"
import styles from './style'

const Main = ({ navigation }) => {
    return(

        

        <View style={styles.conteiner}>
            <View style={styles.cabecalho}>
            <Image
                style={styles.titulo}
                source={require('../Title/imagem-apoio.png')}
            />

            </View>
            <View style={styles.conteinerOpcoes}>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Forms')}>
                        <Text style={styles.textoBotao}>Adicionar Show</Text>                 
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}>Agenda</Text>                 
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}>Shows Próximos</Text>                 
                </TouchableOpacity>                
            </View>
             
        </View>

    );
}
export default Main;