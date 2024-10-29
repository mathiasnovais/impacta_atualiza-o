import React from "react"
import {View, StyleSheet, Text} from "react-native"

export default function ResultValor(props){
    return(

        <View>
            <Text>{props.MenssageValor}</Text>
            <Text>{props.Artista + props.Cache + props.resultvalor}</Text> 
        </View>

    );
}

const styles = StyleSheet.create({
    texto:{
        color: 'red',
    }
})