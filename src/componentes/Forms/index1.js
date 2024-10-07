import React, {useState} from "react"
import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import ResultValor from "my-app/src/componentes/Forms/ResultValor/"

export default function Form(){

const [cache, setCache] = useState(null);
const [cache1, setCache1] = useState(null);
const [artista, setArtista] = useState(null);
const [artista1, setArtista1] = useState(null);
const [tempo, setTempo] = useState(null);
const [menssageValor, setmenssageValor] = useState("Prenecha os valores");
const [valor, setValor] = useState(null);
const [textBotao, settextBotao] = useState("add");

function valorCalculation(){
    return setValor((cache*tempo).toFixed(2))
}

function validacao(){
    if(cache != null && tempo != null && artista != null){
        valorCalculation()
        setmenssageValor("Artista / Cache / Valor")
        setCache1(" / " + cache + " / ")
        setArtista1(artista)
        setArtista(null)
        setCache(null)
        setTempo(null)
        settextBotao("add outro")
        return
    }
    setValor(null)
    setCache1(null)
    setArtista1(null)
    settextBotao("add")
    setmenssageValor("Prenecha os valores")

}

    return(

        <View>
            <View>
                <Text>Artista</Text>
                <TextInput
                onChangeText={setArtista}
                value={artista}
                placeholder="Ex. Nome"
                />

                <Text>Cache</Text>
                <TextInput
                onChangeText={setCache}
                value={cache}
                placeholder="Ex. 3.000"
                keyboardType="numeric"
                />

                <Text>Tempo (em minutos)</Text>
                <TextInput
                value={tempo}
                onChangeText={setTempo}
                placeholder="Ex. 20"
                keyboardType="numeric"
                />            
                <Button onPress={()=>validacao()} title="Calcular"/>
            </View>
            {/*<ResultValor MenssageValor={menssageValor} Artista={artista1} Cache={cache1} resultvalor={valor} />*/} 
        </View>

    );
}

const styles = StyleSheet.create({
    texto:{
        color: 'red',
    }
})